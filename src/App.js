// create your App component here
import React from 'react';

export default class App extends React.Component {
  this.state = {
    people: []
  }
  
  componentDidMount () {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        people: data
      })
    })
  }
}
