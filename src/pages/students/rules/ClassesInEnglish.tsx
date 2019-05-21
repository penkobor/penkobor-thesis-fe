import React from "react";
import { LeftSideMenu } from "../../admissions/LeftSideMenu";



export class ClassesInEnglish extends React.Component<{},{}>{

  render() {
    return(
      <div className='flex w-full h-full'>
    <div className='bg-grey-light shadow text-grey-dark h-full mr-6 mt-2 flex-none w-1/5 rounded-lg'>
          <LeftSideMenu />
      </div>
      <div className='flex-grow bg-white rounded-lg shadow mt-2'>
        <h1 className='p-8'>
            Enrollment in classes taught in English for students studying in Czech programs at FEE
        </h1>
        <div className ='p-8'> 
          <p>Enrollment of subjects taught in English (ie subjects with codes E and XE) for students studying in Czech programs is governed by the following rules:</p>
          <br></br>
          <ol>
            <li>Students can enroll in subjects taught in English. It is not permissible to enroll at the same time the Czech and English versions of the same subject, as well as pass the same subject in both language versions.</li>
            <li>In bachelor's programs, the student is obliged to obtain at least 70 credits from compulsory courses in his / her program and the field completed in Czech.</li>
          </ol>
          <br></br>
          <p>
          For the enrollment of subjects in a different language version, the Study and Examination Regulations, Article 6 (4), ie, each subject can be registered at most twice regardless of the language version.
          </p>
        </div>
      </div>
      </div>
      )
  }
}
