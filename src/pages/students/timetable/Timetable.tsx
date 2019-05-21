import React from 'react';
import { SummerTimetable } from './SummerTimetable';
import { WinterTimetable } from './WinterTimetable';


  export class Timetable extends React.Component<{},{}> {


      render() {
          return (
            <div>
              <WinterTimetable />
              <SummerTimetable />
            </div>
          )
      }
  }
