import * as React from 'react'
import { inject, observer } from 'mobx-react';
import { LeftSideMenu } from '../admissions/LeftSideMenu'
import { RightSide } from '../admissions/RightSide';
import { Previews } from '../admissions/Previews';
import { StudyProgrmsInEng } from './studyprogrammes/StudyProgramsInEng';
import { SummerTimetable } from './timetable/SummerTimetable';
import { StudentPreviews } from './StudentPreviews';
import { TransferToFacultyPage } from './transfer/TransferToFacultyPage';

@observer
export class Students extends React.Component<{},{}>{
    render(){
        return (
            // <TransferToFacultyPage />
            <div className='flex w-full h-full'>
                <div className='bg-grey-light shadow text-grey-dark h-full mr-6 mt-2 flex-none w-1/5 rounded-lg'>
                    <LeftSideMenu />
                </div>
                <div className='flex-grow'>
                    <StudentPreviews />
                    <RightSide />
                    {/* <StudyProgrmsInEng /> */}
                    {/* <SummerTimetable /> */}
                </div>
            </div>
        )
    }
}