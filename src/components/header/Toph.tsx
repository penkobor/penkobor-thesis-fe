import * as React from 'react'
import { TextField } from '@material-ui/core';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { RoutingStore } from '../RoutingStore';


@observer
@inject('store')
export class Toph extends React.Component<{store?:RoutingStore},{}> {

    Diamond = require('../../assets/fel.png');

    @observable field = ''

    myStyle: React.CSSProperties = {
        maxWidth: '100%',
        maxHeight: '100%'
    };
    

    doTheJob = (event: any) => {
        this.field = event.target.value
        if (this.field.includes('student')) {
            this.props.store!.openStudents() }
        else if (this.field.includes('staff')) {
            this.props.store!.openStaff()
        } 
        else if (this.field.includes('close')) {
            this.props.store!.closeEverything()
        }
        else if (this.field.includes('admission')) {
            this.props.store!.openAdmission()
        }
        else if (this.field.includes('faculty')) {
            this.props.store!.openFaculty()
        }
        else if (this.field.includes('research')) {
            this.props.store!.openResearch()
        }


    }

    searchbar = '<SearchBar />'

    render() {
        return(
        <div className='bg-white flex w-full h-32'>
            <div className='p-4 ml-32 w-48'> 
                <img src={this.Diamond} style={this.myStyle}></img>
            </div>
            <div className='mt-8 w-2/5'>
            <h1 className='text-blue'>FACULTY OF ELECTRICAL ENGINEERING</h1>
            <h2>Czech Technical University in Prague</h2>
            {/* <TextField
                id="outlined-full-width"
                label="Virtual Assistant"
                placeholder="Ask me anything"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange = {this.doTheJob}
            /> */}
            </div>
            <div className='flex-grow text-right p-8 text-xl mr-32 mt-6'>
                {this.searchbar}
            </div>

        </div>
            
        );
    }
}