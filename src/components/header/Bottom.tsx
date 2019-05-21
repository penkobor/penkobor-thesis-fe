import * as React from 'react'
import { computed, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { RoutingStore } from '../RoutingStore'
import { extendObservableObjectWithProperties } from 'mobx/lib/internal';
import Radium from 'radium'
import Button from '@material-ui/core/Button';






@inject("store")
@observer
export class Bottom extends React.Component<{store?:RoutingStore},{}> {
  
    render() {

        return(
        <div className='flex bg-blue w-full h-10 shadow-lg content-center text-white'>
          <Button className='flex-auto m-auto' color='inherit' onClick={this.props.store!.openAdmission}>Admission</Button>
          <Button className='flex-auto m-auto' color='inherit' onClick={this.props.store!.openStudents}>Students</Button>
          <Button className='flex-auto m-auto' color='inherit' onClick={this.props.store!.openStaff}>Staff</Button>
          <Button className='flex-auto m-auto' color='inherit' onClick={this.props.store!.openResearch}>Research</Button>
          <Button className='flex-auto m-auto' color='inherit' onClick={this.props.store!.openResearch}>Enterprise and Media</Button>
          <Button className='flex-auto m-auto' color='inherit' onClick={this.props.store!.openFaculty}>Faculty</Button>
        </div>
            
        );
    }
}