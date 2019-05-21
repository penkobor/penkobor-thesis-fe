import * as React from 'react'
import { observable, computed } from 'mobx';
import { RoutingStore } from './RoutingStore';
import { inject, observer } from 'mobx-react';
import { Admission } from '../pages/admissions/Admissions';
import { Students } from '../pages/students/Students';
import { Staff } from '../pages/staff/Staff';
import { WhyCTU } from '../pages/admissions/pages/WhyCTU';
import { Main } from '../pages/main/Main';
import { ExchangePage } from '../pages/students/exchange/ExchangePage';
import { ErasmusExchange } from '../pages/students/exchange/erasmus/ErasmusExchange';
import { BelateralExchange } from '../pages/students/exchange/belateria/BelateralExchange';
import { Timetable } from '../pages/students/timetable/Timetable';
import { SummerTimetable } from '../pages/students/timetable/SummerTimetable';
import { WinterTimetable } from '../pages/students/timetable/WinterTimetable';
import { BasicRules } from '../pages/students/rules/BasicRules';
import { ExceptioanalCases } from '../pages/students/rules/ExceptionalCases';
import { ClassesInEnglish } from '../pages/students/rules/ClassesInEnglish';
import { DemoAppSign } from '../DemoAppSign';
import { TransferToFacultyPage } from '../pages/students/transfer/TransferToFacultyPage';
import { BachelorDegreePrograms } from '../pages/students/studyprogrammes/BachelorDegreePrograms';
import { MasterDegreePrograms } from '../pages/students/studyprogrammes/MasterDegreePrograms';


// тут у нас компоненты страницы
@inject('store')
@observer
export class MainPage extends React.Component<{store:RoutingStore},{}> {

    @computed get admissionIs(){ return this.props.store!.admissions }
    @computed get studentIs(){ return this.props.store!.students   }
    @computed get enterpriseIs(){ return this.props.store!.enterpriseAndMedia }
    @computed get facultyIs(){  return this.props.store!.faculty }
    @computed get researchIs(){ return this.props.store!.research }
    @computed get staffIs(){ return this.props.store!.staff  }
    @computed get whyCTUis(){ return this.props.store!.WhyCTU }
    @computed get ExchangeProgramsIs(){ return this.props.store!.ExchangePrograms   }
    @computed get erasmusIs() { return this.props.store!.ErasmusIs  }
    @computed get belateralIs() { return this.props.store!.BelateralIs    }
    @computed get summerTimeTableIs(){ return this.props.store!.summerTimeTableIs  }
    @computed get winterTimeTableIs() { return this.props.store!.winterTimetableIs  }
    @computed get basicRulesIs() {  return this.props.store!.basicRulesIs   }
    @computed get exceptionalCasesIs() { return this.props.store!.exceptionalCasesIs }
    @computed get englishClassesIs() { return this.props.store!.classesInEngIs }
    @computed get transferToFacultyIs() { return this.props.store!.transferToFacultyIs    }
    @computed get timeTableIs() { return this.props.store!.timeTable  }
    @computed get bachelorProgramIs() { return this.props.store!.bachelorProgramsIs }
    @computed get masterProgramIs() { return this.props.store!.masterProgramsIs }
 
    mystyle = {
        minHeight: '130vh'
    }

    //вот тут вместо просто надписи Admission будет появляться компонента Admission и так далее 
    render() {
        return(
            <div className='w-full min-h-screen pb-32 bg-grey-light'>
                <div className='w-5/6 ml-auto mr-auto bg-grey-lighter' style={this.mystyle}>
                {this.admissionIs && (
                    <div className='p-10'><Admission store={this.props.store}/></div> 
                )}

                {this.studentIs && (
                    <div className='p-10'><Students /></div> 
                )}
                {this.enterpriseIs && ( <div className='p-10'><DemoAppSign /></div> )}
                {this.facultyIs && ( <div className='p-10'><DemoAppSign /></div> )}
                {this.researchIs && ( <div className='p-10'><DemoAppSign /></div> )}
                {this.staffIs && ( <div className='p-10'><DemoAppSign /></div> )}
                {this.whyCTUis && (
                    <div className='p-10'> <WhyCTU /> </div>
                )}
                {this.ExchangeProgramsIs && (
                    <div className='p-10'> <ExchangePage /> </div>
                )}
                {this.erasmusIs && (
                    <div className='p-10' > <ErasmusExchange /> </div>
                )}
                {this.belateralIs && (
                    <div className='p-10' > <BelateralExchange /> </div>
                )}
                {this.summerTimeTableIs && (
                    <div className='p-10'> <SummerTimetable /> </div>
                )}
                {this.winterTimeTableIs && (
                    <div className='p-10'> <WinterTimetable /> </div>
                )}
                {this.basicRulesIs && (
                    <div className = 'p-10'> <BasicRules /> </div>
                )}
                {this.exceptionalCasesIs  && (
                    <div className = 'p-10'> <ExceptioanalCases /> </div>
                )}
                {this.englishClassesIs && (
                    <div className = 'p-10'> <ClassesInEnglish /> </div>
                )}
                {this.transferToFacultyIs && (
                    <div className = 'p-10'> <TransferToFacultyPage /> </div>
                )}
                {this.timeTableIs && (
                    <div className = 'p-10'> <Timetable /> </div> 
                )}
                {this.bachelorProgramIs && (
                    <div className = 'p-10'> <BachelorDegreePrograms /></div>
                )}
                {this.masterProgramIs && (
                    <div className = 'p-10'> <MasterDegreePrograms /> </div>
                )}
                {!this.whyCTUis && 
                !this.admissionIs &&
                !this.enterpriseIs &&
                !this.facultyIs &&
                !this.staffIs &&
                !this.researchIs &&
                !this.studentIs &&
                !this.ExchangeProgramsIs &&
                !this.belateralIs &&
                !this.erasmusIs &&
                !this.summerTimeTableIs &&
                !this.winterTimeTableIs &&
                !this.basicRulesIs &&
                !this.exceptionalCasesIs &&
                !this.englishClassesIs &&
                !this.transferToFacultyIs &&
                !this.timeTableIs &&
                !this.bachelorProgramIs &&
                !this.masterProgramIs &&
                (
                    <div className='p-10'> 
                    <Main /> 
                    {/* <ExchangePage />
                    <SummerTimetable /> */}
                    </div>
                )}
                </div>
            </div>
        );
    }
}