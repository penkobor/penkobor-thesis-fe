import * as React from 'react'
import { inject, observer } from 'mobx-react';
import { LeftSideMenu } from './LeftSideMenu'
import { RightSide } from './RightSide';
import { Previews } from './Previews';
import { RoutingStore } from '../../components/RoutingStore';

 {/* <Previews /> */}
                {/* <LeftSideMenuBar /> */}
                {/* <News /> */}
                {/* <Events/> */}

@inject('store')
@observer
export class Admission extends React.Component<{store? : RoutingStore},{}>{
    render(){
        return (
            <div className='flex w-full h-full'>
                <div className='bg-grey-light text-grey-dark h-full mr-6 mt-2 flex-none w-1/5 rounded-lg'>
                    <LeftSideMenu />
                </div>
                <div className='flex-grow'>
                    <Previews store = {this.props.store}/>
                    <RightSide />
                    {/* flex-vertical -> admissions -> (flex horizontal) {news/events} */}
                </div>
            </div>
        )
    }
}