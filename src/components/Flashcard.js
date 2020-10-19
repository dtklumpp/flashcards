import React, { Component } from 'react';
import Definition from './Definition';

class Flashcard extends Component {
  state = {
    showDefs: false,
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
  }

  render() {
    console.log(this.props)
    const { word, definitions } = this.props.detail;
    return (
      <div className="card">
        <div className="card-content">
          <h1>{word}</h1>
        </div>
        <div className="card-actions">
          <button onClick={this.toggleShowDef}>Show</button>
        </div>
        {this.state.showDefs && (
          <div className="card">
            {this.displayDefs(definitions)}
          </div>
        )}
      </div>
    )
  }
}

export default Flashcard;
