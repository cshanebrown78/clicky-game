import React, { Component } from 'react';
import ImageCard from './components/ImageCard';
import images from './images.json';
import Wrapper from './components/Wrapper'

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        {this.state.images.map(friend => (
          <ImageCard
            id={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      
      
    );
  }
}



export default App;
