import React, { Component } from 'react';
import ImageCard from './components/ImageCard';
import images from './images.json';
import Wrapper from './components/Wrapper';
import Container from './components/Container'

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        <Container>
          {this.state.images.map(friend => (
            <ImageCard
              id={friend.id}
              image={friend.image}
          />
        ))}
        </Container>
        
      </Wrapper>
      
      
    );
  }
}



export default App;
