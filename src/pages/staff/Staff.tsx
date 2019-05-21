import * as React from 'react'
import { inject, observer } from 'mobx-react';
import { LeftSideMenu } from '../admissions/LeftSideMenu'
import { RightSide } from '../admissions/RightSide';
import { Previews } from '../admissions/Previews';

@observer
export class Staff extends React.Component<{},{}>{
    render(){
        return (
            <div className='flex w-full h-full'>
                <div className='bg-grey text-grey-dark h-full mr-6 mt-2'>
                    <LeftSideMenu />
                </div>
                <div className='flex-grow'>
                    {/* <Previews />
                    <Previews /> */}
                    {/* flex-vertical -> admissions -> (flex horizontal) {news/events} */}
                </div>
            </div>
        )
    }
}