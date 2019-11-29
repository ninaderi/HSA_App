import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Chip} from 'react-mdl';
import ReactPlayer from 'react-player'
import { Player, ControlBar } from 'video-react';

class Showhistorical extends Component {
  constructor(props) {
      super(props)
      this.state = {
          backgroundImage1: this.props.backgroundImage1,
          activeTab: 1,
          url: this.props.video,
          pip: false,
          playing: false,
          controls: false,
         
      };
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState(
      { activeTab: <div>
              <ReactPlayer
              id="myVid" height='auto' width='auto'
              ref={this.player}
              className='react-player'
              width='100%'
              height='100%'
              url={this.state.url}
              // pip={pip}
              playing={true}
              // controls = 'true'
            
              />
      <button onClick={this.handlePlay}> Play </button>
      <button onClick={this.handlePause}> Pause </button>
      </div>});
console.log(this.state.playing)
  }

  handlePause = () => {
    console.log('onPause')
    this.setState(
      {       activeTab: <div>
              <ReactPlayer
              id="myVid" height='auto' width='auto'
              ref={this.player}
              className='react-player'
              width='100%'
              height='100%'
              url={this.state.url}
              // pip={pip}
              playing={false}
              
              />
      <button onClick={this.handlePlay}> Play </button>
      <button onClick={this.handlePause}> Pause </button>
      </div>});
    console.log(this.state.playing)
  }

  handleChange = (tabId) => {
    // const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
    switch(tabId) {
      case 0:
        this.setState(
          { activeTab: <div>
                  <ReactPlayer
                  id="myVid" height='auto' width='auto'
                  ref={this.player}
                  className='react-player'
                  width='100%'
                  height='100%'
                  url={this.state.url}
                  // pip={pip}
                  playing={this.state.playing}
                  
                  />
          <button onClick={this.handlePlay}> Play </button>
          <button onClick={this.handlePause}> Pause </button>
          </div>});
          break;
          case 1:
               this.setState(
                { activeTab: 'audio' });
                break;
             case 2:
                 this.setState(
                  { activeTab: 'read' });
               break;
    }
  }

  render() {
    const backImg=""+this.state.backgroundImage1+"";
    return(
        <div className='divHistorical' style={{backgroundColor:'black'}}>
          <Grid style={{background:'black',alignItems:'center'}}>
                  <Cell col={10}><h2 style={{color:'white'}}> Welcome </h2></Cell>
                  
                    <h2 style={{color:'white', fontWeight:'bold'}}>{this.props.historicalName}</h2>
          </Grid>
          <div>
                  <Tabs className="aboutCell" activeTab={this.state.activeTab} onChange={this.handleChange} ripple>
                        <Tab label="tab1" >Video</Tab>
                        <Tab label ="tab2">Audio</Tab>
                        <Tab label="tab3" >Read</Tab>
                 </Tabs>
          </div>
           <Grid style={{
                       backgroundImage:'url(' + backImg + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        filter: 'grayscale(75%)',
                        height:'400px'
                  }}>
                <section>
                        <div style ={{alignItems:'center'}}> {this.state.activeTab}</div>
                    </section>
                  </Grid>
    </div>
    )
  }
}
export default Showhistorical;


// <Cell col={2} style={{color:'black'}}><Chip className="aboutCell1">back</Chip></Cell>