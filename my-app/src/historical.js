import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Showhistorical from './showhistorical';

class Historical extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
        
                 <Showhistorical
                      video={2019}
                      audio={2019}
                      read="EvolveU"
                      historicalName="Lougheed Calgary"
                      backgroundImage1="'https://media.mydriveholiday.com/pages/501/Lougheed%20House%20(1).jpg'"/>
        </Cell>
        <Cell col={8}>
        
        </Cell>
      </Grid>
    )
  }
}

export default Historical;