import React from "react";
import { Preview } from "../../../components/Preview";
import { LeftSideMenu } from "../../admissions/LeftSideMenu";



export class BachelorDegreePrograms extends React.Component<{},{}> {

  preview1 = require('../../../assets/11-prihlaska.jpg');

  render(){
    return (
      <div className='flex'>
      <div className='bg-grey-light shadow text-grey-dark h-full mr-6 mt-2 flex-none w-1/5 rounded-lg'>
        <LeftSideMenu />
      </div>
    <div className='p-5 ml-8 bg-white rounded'>
      <h2 className='p-5'>Bachelor's degree programmes:</h2>
      <div className='p-5'><Preview img={this.preview1} text= 'Electrical Engeneering and Computer Science' unavailable = {true} /></div>
      <h3 className='p-5'>It takes three years to earn a Bachelor of Science (B.Sc.) degree.</h3>
      <p className='p-5'>The standard period of studies in bachelor programs is 6 semesters (3 years).</p>
      <h3 className='p-5'>How to apply</h3>
      <p className='p-5'>When applying to the Faculty of Electrical Engineering in CTU in Prague, the process is much the same as that of other European universities. The deadline for enrolment (the application form together with all required documents) for the year 2019/2020 is 30th of April 2019.</p>
      <br></br>
      <h3 className='p-5'>Three simple steps:</h3>
      <p className='p-5'>1. First of all, choose the study programme you wish to study. As you are going to study this programme for several years make sure you choose a programme which meets your personal interests and you know you will really enjoy studying!</p>
      <p className='p-5'>2. Fill in the application form </p>
      <p className='p-5'>3. Pay the admission fee and send all the required documents together with the application form that includes your signature (must be sent via scan) electronically to Ms. Ivana Bymova</p>
      <p className='p-5'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores exercitationem labore saepe molestias eaque, a sint quam velit officia similique voluptatem adipisci magnam, vero, consequuntur pariatur? Illo natus reiciendis commodi deserunt corporis. Aspernatur inventore beatae similique nesciunt voluptatibus quia dolor deserunt nobis, iste sunt suscipit iure cum accusamus aut pariatur officia illo quam voluptas blanditiis laudantium quas alias est qui ea? Laborum quibusdam maxime dolor quam, quos autem doloribus voluptatibus, culpa repellat, voluptate ullam suscipit ratione ab vel id animi velit! Voluptatibus perferendis iure cupiditate, magnam nam quia, amet fuga sit optio quibusdam unde sint ex cumque deleniti in! Eius.</p>
    </div>
    </div>
    )}

}