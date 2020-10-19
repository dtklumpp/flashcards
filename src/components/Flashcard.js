import React, { Component } from 'react';
import Definition from './Definition';

class Flashcard extends Component {
  state = {
    showDefs: false,
    seconds: 20,
    timer: null,
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(this.decrementTime, 1000)
    })
  }

  decrementTime = () => {
    if(this.state.seconds === 1) {
      this.props.next()
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
      }))
    }
  }

  displayDefs = definitions => {
    return definitions.map((definition, idx) => {
      return <Definition key={definition._id} def={definition} idx={idx} />
    })
  }

  toggleShowDef = () => {
    // if(this.state.showDefs === false) {
    //   this.setState({
    //     showDefs: true
    //   })
    // } else if(this.state.showDefs === true) {
    //   this.setState({
    //     showDefs: false
    //   })
    // }
    this.setState(prevState => ({
      showDefs: !prevState.showDefs
    }))

    // this.setState({
    //   showDefs: !this.state.showDefs
    // })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.detail._id !== this.props.detail._id) {
      this.setState({
        showDefs: false,
        seconds: 20
      })
    }

    if(this.state.showDefs) {
      clearInterval(this.state.timer);
    } else if(prevState.showDefs !== this.state.showDefs) {
      this.setState({
        timer: setInterval(this.decrementTime, 1000)
      })
    }
  }

  render() {
    console.log(this.props)
    const { word, definitions } = this.props.detail;
    const { showDefs, seconds } = this.state;

    return (
      <div className="card">
        <div className="card-content">
          <h4>{seconds}</h4>
          <h1>{word}</h1>
        </div>
        <div className="card-actions">
          <button onClick={this.toggleShowDef}>
            {showDefs ? 'Hide' : 'Show'}
          </button>
        </div>
        {showDefs && (
          <div className="card">
            {this.displayDefs(definitions)}
          </div>
        )}
      </div>
    )
  }
}

export default Flashcard;
