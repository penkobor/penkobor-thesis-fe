import React from "react";
import { LeftSideMenu } from "../../admissions/LeftSideMenu";



export class ExceptioanalCases extends React.Component<{},{}>{

  render() {
    return(
      <div className='flex w-full h-full'>
      <div className='bg-grey-light shadow text-grey-dark h-full mr-6 mt-2 flex-none w-1/5 rounded-lg'>
          <LeftSideMenu />
      </div>
      <div className='flex-grow bg-white rounded-lg shadow mt-2'>
        <h1 className='p-8'>
          Conditions of individual study plan and progress to a higher semester
        </h1>
        <p>
          The minimum number of credits required for continuation of studies is stipulated in Article 14 (4) of the Study and Examination Regulations for CTU Students (hereinafter referred to as “SER”).
          Another (lower) number of credits can be determined in exceptional cases by the Dean in the form of an individual study plan (see Article 13 (9) of the Code). For example, a long-term illness or other serious problems may be the reason for an individual study plan (ISP).
          As a rule, ISPs cannot be allowed retrospectively, ie at the end of a given semester. Therefore, we would like to draw your attention to all students who would have serious health or personal problems during the semester, which would significantly complicate their fulfillment of their study obligations, so that they could ask for an ISP immediately, ie immediately when this situation occurs. Applications for ISPs submitted at the end of the semester will not be accepted.
          The Study and Examination Regulations for CTU Students, 13/9, stipulate that if the conditions of the individual study plan are not met, the studies are terminated according to Art.
        </p>
        <h3>Notice:</h3>
        <p>
          ISPs are no longer asked by students who are missing only subjects whose total credits (without credits for Bachelor / Diploma Thesis) are less than 20:
          students will write down all missing subjects listed in the relevant semester including the Bachelor / Diploma thesis, or other courses of their choice
          to proceed to the next year there will be an obligation to achieve at least 2/3 of the sum of credits for all subjects enrolled in this academic year necessary for the fulfillment of the student's study plan (no credits will be included in this number). if surrendered).
          In the event that students do not reach the required number of credits, their studies will be terminated due to non-fulfillment of study obligations in accordance with Article 13 (9) of the Code.
        </p>
      </div>
    </div>
      )
  }
}