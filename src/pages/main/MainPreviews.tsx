import * as React from 'react'
import { Preview } from '../../components/Preview';
import { RoutingStore } from '../../components/RoutingStore';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export class MainPreviews extends React.Component<{store? : RoutingStore},{}>{
    preview1 = require('../../assets/11-prihlaska.jpg');
    preview2 = require('../../assets/12-prijimac.jpg');
    preview3 = require('../../assets/13-proc.jpg');
    preview4 = require('../../assets/13-proc.jpg');



    render(){
        return (
            <div className='flex ml-12 items-center content-center'>
                <div className='flex-auto justify-center p-2'> <Preview img={this.preview1} text= 'Application form' unavailable = {true}/> </div>
                <div className='flex-auto justify-center p-2'> <Preview img={this.preview2} text= 'Living in Prague' unavailable = {true}/> </div>
                <div className='flex-auto justify-center p-2' onClick={this.props.store!.openWhyCTU}> <Preview img={this.preview3} text= 'Why CTU FEE' unavailable = {false}/> </div>
                <div className='flex-auto justify-center p-2'> <Preview img={this.preview4} text= 'Living in Prague' unavailable={true}/> </div>
            </div>
        )
    }
}