import React, { Component } from "react";
import axios from 'axios';
import Flashcard from "./Flashcard";
import { CLIENT_URL } from "../constants.js";

class FlashcardContainer extends Component {
  state = {
    flashcards: [],
    currentIndex: 0,
  }

  componentDidMount() {
    console.log('[FlashcardContainer] mounted');
    // setTimeout(() => {this.setState({
    //   flashcards: ['test']
    // })}, 2000)

    // fetch
    // fetch(CLIENT_URL)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //     this.setState({
    //       flashcards: json
    //     })
    //   })
    //   .catch(err => console.log(err))

    // axios
    axios.get(CLIENT_URL)
      .then(response => {
        console.log(response)
        this.setState({
          flashcards: response.data
        })
      })
      .catch(err => console.log(err))

      window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    console.log('[FlashcardContainer] unmounted')
    window.removeEventListener('keyup');
  }

  handleKeyUp = event => {
    if(event.keyCode === 39) this.goToNextCard();
    if(event.keyCode === 37) this.goToPrevCard();
  }

  goToNextCard = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }

  goToPrevCard = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1
    })
  }

  render() {
    console.log('[FlashcardContainer] rendered');
    const { flashcards, currentIndex } = this.state;

    return(
      <div>
        {this.state.flashcards.length > 0 ?
          <Flashcard detail={flashcards[currentIndex]} /> :
          <h3>Loading...</h3>
        }
        <button onClick={this.goToPrevCard}>Prev</button>
        <button onClick={this.goToNextCard}>Next</button>
      </div>
    )
  }
}

export default FlashcardContainer;