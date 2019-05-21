import * as React from 'react'
// import logo from './logo.svg';
import './App.css'
import { Header } from './components/header/Header'
import { MainPage } from './components/MainPage'
import { RoutingStore } from './components/RoutingStore';
import { inject, observer, Provider } from 'mobx-react';
import { MainFrame } from './chatbot/MainFrame';
import axios from 'axios';



// в общем у нас будет общий стор с переменными идентифицирующеми компоненты которые должны рендериться
// кнопки в хедеру будут менять эти переменные
// а мэйнпэйдж в зависимости на этих переменных будет отображать правильное содержание страницы


export class App extends React.Component<{},{}> {

  state = {
    users: [
      {id: 0, username: 'dummy'}
    ],
    res: {}
  }

  postAskSomeStuff = (sessionId: string, whatToAsk:string) => {
    axios.post('http://localhost:3002/api/message', {
      session_id : sessionId,
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
      console.log(res.data.output.generic[0].text)
    })
  }

  askAssistant = (message : string) => {
    axios.get('http://localhost:3002/api/session').then( (res) => {
        this.postAskSomeStuff(res.data.session_id, message)
    })
  }

  componentDidMount(){ 
    // this.askAssistant('show me FEL')  //will console.log the answer 
    // this.askAssistant('why should I go to Prague?')   //will console.log the answer 
    // this.askAssistant('How can I apply?')   //will console.log the answer 
  }

  render() {
    const store = new RoutingStore();

    return (
      <Provider store = {store}>
        <div className='bg-red'> 
          {/* <Board /> */}
            <Header />
            <MainPage store = {store} />
            <div className='fixed pin-b w-full'><MainFrame /></div>
            {/* {this.state.users.map(user => <li key={user.id}> {user.username}</li>)} */}
        </div>
      </Provider>
        
    );
  }
}

export default App;
