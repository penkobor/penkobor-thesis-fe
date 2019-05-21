import React from "react";
import { RightSide } from "../../admissions/RightSide";
import { LeftSideMenu } from "../../admissions/LeftSideMenu";



export class TransferToFacultyPage extends React.Component<{},{}>{

    render() {
        return(
          <div className='flex w-full h-full'>
          <div className='bg-grey-light shadow text-grey-dark h-full mr-6 mt-2 flex-none w-1/5 rounded-lg'>
              <LeftSideMenu />
          </div>
          <div className='flex-grow bg-white rounded-lg shadow mt-2'>
            <h1 className='p-8'>
              Transfer to the Faculty of Electrical Engeneering 
            </h1>
            <p className='p-8'>
            <ul>
              <li className='p-3'>The transfer is governed by the Study and Examination Regulations of CTU, Article 15.</li>
              <li className='p-3'>The condition for the transfer is the successful completion of the first year of study and fulfillment of the conditions for continuing the studies in the following semester / academic year at the original faculty.</li>
              <li className='p-3'>Applicants will apply for a transfer to FEE CTU in writing at their original faculty. The application must include the inclusion of a study program for which the applicant is applying for the FEE, or interest in the field. Applicants will apply to their original faculty at the same time</li>
              <li className='p-3'>listing of completed courses from the information system</li>
              <li className='p-3'>confirmation of successful completion of the 1st year</li>
              <li className='p-3'>confirmation of compliance with the conditions for continuing</li>
              <li className='p-3'>studies in the following semester / academic year.
                  All of its original faculty will send it all officially together with other materials to the Study Department of CTU CTU.</li>
              <li className='p-3'>The Vice-Dean of FEL will consider the application and invite the candidate to interview to clarify the details of the transfer. For this interview, the candidate will provide a list of the subjects he / she is interested in recognizing (details).</li>
              <li className='p-3'>The Vice-Dean, after consulting with the relevant program guarantor, will decide whether to accept or not. If the candidate is accepted, the Vice-Dean prescribes the candidate's year of enrollment and decides on the recognition of the subjects.</li>
              <li className='p-3'>Foreign nationals or graduates of schools abroad will provide the following documents if they agree with the transfer:
                If the school-leaving examination / university degree was abroad (does not apply to the Slovak Republic), then the candidate will provide an officially certified certificate of recognition of equivalence or the nostrification of the foreign school leaving certificate / diploma1;</li>
              <li className='p-3'>In the case of foreign nationals (it does not apply to the Slovak Republic and school graduates with a degree program in Czech), a confirmation of the examination in the Czech language issued by the Department of Languages ​​of the FEE CTU in the year of transfer.1.</li>
              <li className='p-3'>Recognition of subjects must be requested in writing; on the recognition of subjects from the original faculty for subjects of FEE, the Vice-Dean will decide on the basis of the opinions of the relevant heads of FEE departments.</li>
            </ul>
            </p>
                        

          </div>
      </div>
        )
    }
}