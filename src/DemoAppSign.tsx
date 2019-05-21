import React from "react";
import WarningIcon from '@material-ui/icons/Warning';


export class DemoAppSign extends React.Component<{},{}> {
    render() {
      return (
        <div className='flex items-center justify-center'>
          <div className='bg-yellow text-black shadow-lg rounded-lg p-6 mt-10 flex'>
            <WarningIcon></WarningIcon>
            <h2 className='ml-5'>This element was not included in demo application</h2>
          </div>
        </div>
      )
    }
}