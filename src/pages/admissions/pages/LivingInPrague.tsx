import * as React from 'react'
import { admissions } from '../../students/strings'

export class LivingInPrague extends React.Component<{},{}>{
    render() {
        return (
            <div className='m-10 rounded-lg p-3'>
                <h1 className='p-3'>{admissions.whyCtuFee.livingInPrague.titles.one}</h1>
                <p className='ml-6 p-1'>{admissions.whyCtuFee.livingInPrague.contents.one}</p>
                <h1 className='p-3'>{admissions.whyCtuFee.livingInPrague.titles.two}</h1>
                <p className='ml-6 p-1'>{admissions.whyCtuFee.livingInPrague.contents.two}</p>
                <h1 className='p-3'>{admissions.whyCtuFee.livingInPrague.titles.three}</h1>
                <p className='ml-6 p-1'>{admissions.whyCtuFee.livingInPrague.contents.three}</p>
                <h1 className='p-3'>{admissions.whyCtuFee.livingInPrague.titles.four}</h1>
                <p className='ml-6 p-1'>{admissions.whyCtuFee.livingInPrague.contents.four}</p>
            </div>
        )
    }
}