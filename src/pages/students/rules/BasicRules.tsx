import React from "react";
import { LeftSideMenu } from "../../admissions/LeftSideMenu";



export class BasicRules extends React.Component<{},{}>{

  render() {
    return(
      <div className='flex w-full h-full'>
      <div className='bg-grey-light shadow text-grey-dark h-full mr-6 mt-2 flex-none w-1/5 rounded-lg'>
          <LeftSideMenu />
      </div>
      <div className='flex-grow bg-white rounded-lg shadow mt-2'>
        <h1 className='p-8'>
          Study Regulations
        </h1>
        <h3 className='p-8'>You can use information from these sources as single source of truth</h3>
        <p className='p-8'>
        <ul>
          <li className='p-3'><a href='http://www.msmt.cz/areas-of-work/tertiary-education/the-higher-education-act?lang=2'> ACT No. 111 on Higher Education Institutions </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/StatuteCTU.pdf'> Statute of the Czech Technical University in Prague </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/Study_and_Exam_Code.pdf'> Study and Examination Code  </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/SD_2015_02.pdf'> Dean’s directive for diploma thesis and the comprehensive final examination in Bachelor’s and Master’s programs at the FEE at CTU </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/StatuteCTU.pdf'> CTU Admission Procedure Rules - Statute of the CTU (Article 6) </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/StatuteCTU.pdf'> Conditions of Study at CTU for foreigners - Statute of the CTU (Article 9) </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/Scholarship_Code.pdf'> Scholarship Code </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/Disciplinary_Code.pdf'> Disciplinary Code </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/Accommodation_Code.pdf'> Accommodation Code </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/Career_Code.pdf'> Career Code </a></li>
          <li className='p-3'><a href='https://international.cvut.cz/for-incomers/phd-programme-in-english/'> Rules of Doctoral Study at the CTU in Prague </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/rules/DoctoralStudyCode_FEE.pdf '> Doctoral Study Code for FEE - 2016 </a></li>
          <li className='p-3'><a href='http://www.fel.cvut.cz/en/education/code-of-ethics.html'> Code of Ethics </a></li>
        </ul>
        </p>
      </div>
    </div>
      )
  }
}