import * as React from 'react'


export class Events extends React.Component<{},{}>{
    render() {
        return (
            <div>
              <div className='pb-3'>
                <h1>Events</h1>
              </div>
              <div className='p-3'>
                <p>11.03.2019 </p>
                <h3 className='text-blue'>first dummy event</h3>
              </div>
              <div className='p-3'>
                <p>02.03.2019 </p>
                <h3 className='text-blue'>second dummy event</h3>
              </div>
              <div className='p-3'>
                <p>19.02.2019 </p>
                <h3 className='text-blue'>third dummy event</h3>
              </div>
              <div className='p-3'>
                <p>12.02.2019 </p>
                <h3 className='text-blue'>fourth dummy event</h3>
              </div>
              <div className='p-3'>
                <p>10.01.2019 </p>
                <h3 className='text-blue'>fifth dummy event</h3>
              </div>
              <div className='p-3'>
                <p>23.01.2019 </p>
                <h3 className='text-blue'>six dummy event</h3>
              </div>
            </div>
        )
    }
}