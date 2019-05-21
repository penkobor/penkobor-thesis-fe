import * as React from 'react'

export class Preview extends React.Component<{img:any, text:string, unavailable: boolean},{}>{
    myStyle: React.CSSProperties = {
        maxWidth: '100%',
        maxHeight: '100%'
    };
    // picture: string = this.props.img
    // pic = require(this.picture)
    render(){
        if (this.props.unavailable == true){
            return (
            <div className='bg-white shadow-md flex flex-col bg-gray w-64 rounded-lg'>
                <div className='flex-shrink w-full rounded-lg'>
                    <img className='rounded-t-lg' src={this.props.img} style={this.myStyle}></img>
                </div>
                <div className='w-full h-12 text-center'>
                    <h3 className='p-3 text-blue '>unavailable</h3>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='bg-white shadow-md flex flex-col bg-blue w-64 rounded-lg'>
                <div className='flex-shrink w-full rounded-lg'>
                    <img className='rounded-t-lg' src={this.props.img} style={this.myStyle}></img>
                </div>
                <div className='w-full h-12 text-center'>
                    <h3 className='p-3 text-white'>{this.props.text}</h3>
                </div>
            </div>
        )
    }
        
    }
}