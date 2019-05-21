import * as React from 'react'

//Better to pass variables that will turn off some values from the sidebar, 
//as its more same values on different pages than distinct ones

export class LeftSideMenu extends React.Component<{},{}> {
    render(){
        return (
            <div className='p-6 rounded-lg'>
                <ul>
                    <li>Why CTU FEE
                        <ul>
                            <li>Living in Prague</li>
                            <li>After your studies</li>
                        </ul>
                    </li>
                    <li>Degree Student
                        <ul>
                            <li>Study program</li>
                            <li>Study Plans</li>
                            <li>How to apply</li>
                        </ul>
                    </li>
                    <li>Degree Student
                        <ul>
                            <li>Study program</li>
                            <li>Study Plans</li>
                            <li>How to apply</li>
                        </ul>
                    </li>
                    <li>Degree Student
                        <ul>
                            <li>Study program</li>
                            <li>Study Plans</li>
                            <li>How to apply</li>
                        </ul>
                    </li>
                    <li>Degree Student
                        <ul>
                            <li>Study program</li>
                            <li>Study Plans</li>
                            <li>How to apply</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}