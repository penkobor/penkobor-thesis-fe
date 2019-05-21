import * as React from 'react'
import { TextField, Button, Input } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { observable, computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import axios from 'axios';
import classNames from 'classnames';
import { RoutingStore } from '../components/RoutingStore';
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';


@inject('store')
@observer
export class MainFrame extends React.Component<{store?:RoutingStore},{}>{

    // this stucks probably should be located in separate store and should be cleaned up after chatbot is closed ()
    // (they are used just to store information that needs to be displayed in our view)
    @observable conversationStack: string[] = []
    arrayOfPhrases: string[] = []
    userInput = '';
    @observable watsonResponse = ''
    @observable firstField = ""
    @observable sessionId = ''
    counter = 0;
    watson = require('../assets/watson.png');
    myStyle: React.CSSProperties = {
      width: '35%',
      height: '65%'
    };
    nechet = false
    renderQuestions = () => {
        this.counter = 0
        if (this.conversationStack.length % 2 == 0) {
            return this.conversationStack.map(element => {
                this.counter++;
                if(this.counter %2 ==0){
                    return (
                    <div key={this.counter} className='h-8 w-64 bg-grey ml-8 mt-3 p-1 rounded'><p className='text-center'>{element}</p></div>
                    ) 
                }
                else {
                    return (
                        <div key={this.counter} className='h-8 w-64 bg-blue mt-3 p-1 rounded'><p className='text-center'>{element}</p></div>
                        ) 
                }
                
                
            })
        } else {
            return this.conversationStack.map(element => {
                this.counter++;
                if(this.counter %2 != 0){
                    return (
                    <div key={this.counter} className='h-8 w-64 bg-blue mt-3 p-1 rounded'><p className='text-center'>{element}</p></div>
                    ) 
                }
                else {
                    return (
                        <div key={this.counter} className='h-8 w-64 bg-grey ml-8 p-1 mt-3 rounded'><p className='text-center'>{element}</p></div>
                        ) 
                }
                
                
            })
        }
    }

    updateStuck = () => {
          this.conversationStack.push(this.firstField)
          this.firstField= ""
          this.nechet = true
          setTimeout(() => this.updateStuckAgain(), 1500)
    }

    updateStuckAgain = () => {
         this.conversationStack.push('dummy answer')
    }

    postAskSomeStuff = (whatToAsk:string) => {
      console.log(this.sessionId)
      axios.post('http://localhost:3002/api/message', {
        session_id : this.sessionId,
        input: {
          message_type: 'text',
          text: whatToAsk
        },
        context: {
          global: {
            system: {
              turn_count: 1
            }
          }
        }
      }).then(res => { 
        if (res.data.output.generic[0]) {
          this.watsonResponse = res.data.output.generic[0].text
          if (res.data.output.generic[1]) {
            this.watsonResponse = this.watsonResponse + ' ' + res.data.output.generic[1].text
          }
      }
      })
    }
  
    askAssistant = () => {
      axios.get('http://localhost:3002/api/session').then( (res) => {
        this.sessionId = res.data.session_id
      })
    }

    showWhatIsNeeded() {
      console.log('called from computed showTimeTable')
      if (this.watsonResponse == 'Okay, here you can find all related dates'){
        this.props.store!.openTimeTable()
      }
      if (this.watsonResponse == 'I will redirect you to Master Programs now') {
        this.props.store!.openMasterPrograms()
      }
      if (this.watsonResponse == 'I will redirect you to Bachelor Programs now'){
        this.props.store!.openBachelorPrograms()
      }
      if (this.watsonResponse.includes('Erasmus Exchange Program for')) {
        this.props.store!.openErasmus()
      }
      if (this.watsonResponse.includes('Bilatera Exchange Program for')) {
        this.props.store!.openBelateral()
      }
      if (this.watsonResponse.includes('winter semester')) {
        this.props.store!.openWinterTimeTable()
      }
      if (this.watsonResponse.includes('summer semester')) {
        this.props.store!.openSummerTimeTable()
      }
      if (this.watsonResponse.includes('rules')) {
        this.props.store!.openBasicRulse()
      }
      if (this.watsonResponse.includes('personal study plan')) {
        this.props.store!.openExceptionalCases()
      }
      if (this.watsonResponse.includes('attend English classes while studying in Czech')) {
        this.props.store!.openClassesInEng()
      }
      if (this.watsonResponse.includes('transfer')){
        this.props.store!.openTransferToFaculty()
      }
      return null
    }

    componentDidUpdate() {
      this.showWhatIsNeeded()
    }
      
    askTheAssistant = () => {
      this.nechet = !this.nechet
    //  this.watsonResponse = this.userInput 
     this.postAskSomeStuff(this.userInput)
  }

    fillInput = (event:any) => {
      this.userInput = event.target.value
    }

    renderBuble = () => {
      const properties = {
        startStyle: { opacity: 0 },
        endStyle: { opacity: 1 },
        durationSeconds: 1
      };
      return (
        <div className={classNames('flex-grow w-2/4 h-16 bg-blue shadow-lg rounded-lg ml-10 mt-8 mr-10 text-center font-thin text-white', {
          ['tracking-tight']: this.nechet == true,
          ['tracking-normal']: this.nechet == false,
          ['text-sm']: this.watsonResponse.length > 50,
          ['text-2xl']: this.watsonResponse.length < 50
        })}
            >
            <Animate play {...properties}>
              <p className='p-4'>{this.watsonResponse}</p>
            </Animate>
            </div>
      )
    }

    render(){
      console.log('update')
      if (this.sessionId == ''){
        this.askAssistant();
      }
        return (
            <div className='h-32 bg-white shadow-lg -mr-10'>
              <div className='flex'>
                <div className='h-16 w-1/3 rounded-lg mt-12 ml-20'>
                  <TextField fullWidth placeholder="If you have any questions I'm here to help" onChange = {this.fillInput}> </TextField>
                </div>
              <div className='mt-10'>
                  <Button className='h-12' onClick= {this.askTheAssistant}>ask</Button>
                  </div>
                {this.renderBuble()}
                <div>
                <img src={this.watson} style = {this.myStyle} className='mt-6'></img>
                </div>
              </div>
            </div>
        )
    }



}