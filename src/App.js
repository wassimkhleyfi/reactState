
import './App.css';
import React, { Component } from 'react'
import myphoto from './myphoto.jpg'

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {date: new Date(),
                  fullName : 'Wassim Khleyfi',
                  bio :'I am a senior Information Security, Privacy and Risk Management Professional with a solid technical background and a highly analytical mind. I have been involved within the information security .I work as the linchpin between business and the technical level using my deep technical knowledge as well as strategic and tactical insights to see multiple steps ahead, oversee consequences and ultimately provide the best solution combining key elements from the information security, privacy and IT risk management fields',
                  imgSrc :myphoto ,
                  profession :'Computer  and cyber security Engineer' ,
                  show : true };
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(), 1000  );
    } 
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    
      render() {
      return (
            <div className="App">
            <button className ="bottom" onClick={this.toggle}> {this.state.show ? 'hide' : 'show'} my profile ! </button>    
            {this.state.show &&
             <div className ="profile">
               <img src ={this.state.imgSrc} height ='200px' width ='200px' />
               <h1>my name is :<span> {this.state.fullName}</span></h1>
               <h1>my biography : <span>{this.state.bio}</span></h1>
               <h1>my profession : <span>{this.state.profession}</span></h1>                                    
              </div>}
              <h2>Time Is {this.state.date.toLocaleTimeString()}.</h2>
             </div>
            );
      }
  }

              