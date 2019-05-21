import React from "react";
import { BachelorDegreePrograms } from "./BachelorDegreePrograms";
import { MasterDegreePrograms } from "./MasterDegreePrograms";



export class StudyProgrmsInEng extends React.Component<{},{}> {

  render(){
    return (
    <div>
      <h1>Study programmes conducted in English</h1>
      <h2>We offer following programmes taught in English:</h2>

      <BachelorDegreePrograms />
      <br />
      <br />
      <br />
      <br />
      <MasterDegreePrograms /> 

    </div>
    )}

}