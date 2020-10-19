import React, { Component } from 'react';
import Definition from './Definition';

class Flashcard extends Component {
  displayDefs = definitions => {
    return definitions.map((definition, idx) => {
      return <Definition key={definition._id} def={definition} idx={idx} />
    })
  }

  render() {
    console.log(this.props)
    const { word, definitions } = this.props.detail;
    return (
      <div className="card">
        <div className="card-content">
          <h1>{word}</h1>
        </div>
        <div className="card">
          {this.displayDefs(definitions)}
        </div>
      </div>
    )
  }
}

export default Flashcard;
