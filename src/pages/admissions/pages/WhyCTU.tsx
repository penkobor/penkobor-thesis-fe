import * as React from 'react'
import { admissions } from '../../students/strings'

export class WhyCTU extends React.Component<{},{}>{
    render() {
        return (
            <div>
                <h1 className='p-3'>{admissions.whyCtuFee.titles.one}</h1>
                <p className='p-5'>{admissions.whyCtuFee.contents.one}</p>
                <h1 className='p-3'>{admissions.whyCtuFee.titles.two}</h1>
                <p className='p-5'>{admissions.whyCtuFee.contents.two}</p>
                <h1 className='p-3'>{admissions.whyCtuFee.titles.three}</h1>
                <p className='p-5'>{admissions.whyCtuFee.contents.three}</p>
                <h1 className='p-3'>{admissions.whyCtuFee.titles.four}</h1>
                <p className='p-5'>{admissions.whyCtuFee.contents.four}</p>
                <h1 className='p-3'>{admissions.whyCtuFee.titles.five}</h1>
                <p className='p-5'>{admissions.whyCtuFee.contents.five}</p>
                <h1 className='p-3'> {admissions.whyCtuFee.titles.six}</h1>
                <p className='p-5'>{admissions.whyCtuFee.contents.six}</p>
            </div>
        )
    }
}