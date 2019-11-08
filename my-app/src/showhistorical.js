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
          url: 'https://www.youtube.com/watch?v=0vk5Rmo3E3E',
          pip: false,
          playing: null,
          controls: false,
          light: false,
          volume: 0.8,
          muted: false,
          played: 0,
          loaded: 0,
          duration: 0,
          playbackRate: 1.0,
          loop: false
      };
     
  }
  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing:"true" })
  }
  
  handlePause = () => {
    console.log('onPause')
    this.setState({ playing:"false"})
    console.log(this.state.playing)
  }
  handleChange = (tabId) => {
    
 
    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
    switch(tabId) {
      case 0:
        return this.setState(
          { activeTab: <div>
                  <ReactPlayer 
                  id="myVid" height='auto' width='auto' 
                  // ref={this.ref}
                  className='react-player'
                  width='100%'
                  height='100%'
                  url={url}
                  pip={pip}
                  playing={true}
                  controls={controls}
                  light={light}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  onPlay={this.handlePlay}
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /> 
          <button onClick={this.handlePlay}> Play </button>
          <button onClick={this.handlePause}> Pause </button>
          </div>});
          case 1:
              return this.setState(
                { activeTab: 'audio' });
             case 2:
                return this.setState(
                  { activeTab: 'read' });
               
    }
     
  }
  render() {
    const backImg=""+this.state.backgroundImage1+"";
    return(
      
        <div style={{height:'100%',width:'100%',backgroundColor:'black'}}>
          <Grid style={{background:'black',alignItems:'center'}}>
                  <Cell col={10}><h2 style={{color:'white'}}> Welcome </h2></Cell> 
                  <Cell col={2} style={{color:'black'}}><Chip className="aboutCell1">back</Chip></Cell>
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