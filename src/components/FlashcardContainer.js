import React, { Component } from "react";
import axios from 'axios';
import Flashcard from "./Flashcard";
import { CLIENT_URL } from "../constants.js";

class FlashcardContainer extends Component {
  state = {
    flashcards: [],
  }

  async componentDidMount() {
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

  }

  render() {
    console.log('[FlashcardContainer] rendered');
    const { flashcards } = this.state;

    return(
      <div>
        {this.state.flashcards.length > 0 ?
          <Flashcard detail={flashcards[0]} /> :
          <h1>Loading...</h1>
        }
      </div>
    )
  }
}

export default FlashcardContainer;