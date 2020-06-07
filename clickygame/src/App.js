import React, { Component } from 'react';
import ImageCard from './components/ImageCard';
import images from './images.json';
import Wrapper from './components/Wrapper';
import ContainerMain from './components/ContainerMain'
import Title from './components/Title'
import Instructions from './components/Instructions'
import './App.css'


class App extends Component {

  state = {
    images,
    score : 0,
    message : "Test your memory",
    userChoice: [],
    topScore: 0
  };

  shuffleImg = id => {
    let userChoice = this.state.userChoice;

    if (userChoice.includes(id)) {
    
        if (userChoice.length > this.state.topScore) {
          this.setState({topScore: userChoice.length})
        }
        this.setState({score: 0, userChoice: [], message: "OOPs!! Game Over.  Pick an image to restart."});
        return;

      } else {
      userChoice.push(id)

    if (userChoice.length === 12) {
      this.setState({score: 12, message: "You win.  Click an image to play again", userChoice:[]});
      return;
    }

    this.setState({ images, score : userChoice.length, message: "You're doing good!"});

      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images [i], images [j]] = [images[j], images[i]];
      }
    }
  }


  render() {
    return (
      <Wrapper>
        <Title
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Instructions></Instructions>
          <ContainerMain>
            {this.state.images.map(character => (
              <ImageCard
                shuffleImg={this.shuffleImg}
                id={character.id}
                key={character.id}
                image={character.image}
              />
            ))}
          </ContainerMain>
        <footer>
          <p className="foot">Clicky Game by C. Shane Brown</p>
        </footer>
      </Wrapper>
    );
  }
}



export default App;
