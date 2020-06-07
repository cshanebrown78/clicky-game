import React, { Component } from 'react';
import ImageCard from './components/ImageCard';
import images from './images.json';
import Wrapper from './components/Wrapper';
import ContainerMain from './components/ContainerMain'
import Title from './components/Title'
import Instructions from './components/Instructions'


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
      console.log(userChoice);

    if (userChoice.includes(id)) {
      console.log(userChoice.length)
      console.log(this.state.topScore)
      if (userChoice.length > this.state.topScore) {
        this.setState({topScore: userChoice.length})
      }
      this.setState({score: 0, userChoice: [], message: "OOPs!! Game Over.  Pick an image to restart."});
      return;
    } else {
      userChoice.push(id)

      if (userChoice.length === 9) {
        this.setState({score: 8, message: "You win.  Click to play again"});
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
        
      </Wrapper>
      
      
    );
  }
}



export default App;
