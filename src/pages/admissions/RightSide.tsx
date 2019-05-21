import * as React from 'react'
import { admissions } from '../students/strings'
import { WhyCTU } from './pages/WhyCTU';
import { LivingInPrague } from './pages/LivingInPrague';
import { Events } from './Events';

export class RightSide extends React.Component<{},{}>{


    render(){
        return(
            <div className='flex w-full'>
                <div className='m-2 bg-grey-lighter w-3/4 flex-shrink rounded-lg'> 
                <LivingInPrague />  
                </div>
                {/* events here */}
                <div className='m-2 w-2/5 rounded-lg p-16'> 
                    {/* { admissions.whyCtuFee.titles.one } */}
                    <Events />
                </div> 
            </div>
        )
    }
}