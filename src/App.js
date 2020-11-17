import React, { Component } from 'react';
import GiphyContainer from './giphies/component/GiphyContainer'
import Search from './giphies/component/Search';
class App extends Component {
  render() { 
    return (
      <>
        <h1>Giphy</h1>
        <Search />
        <GiphyContainer />
      </>
      );
  }
}
 

export default App;
