import React, { Component } from 'react';
import GiphyContainer from './giphies/component/GiphyContainer'
import Search from './giphies/component/Search';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      imageSrc: '',
      apiKey: "afea92ac6eff442ba6fca79368717d0d",
    }
  }
  componentDidMount() { 
    this.randomGiphy(); 
  }
  
  randomGiphy=(req,res)=>{
    console.log('show randoGiphy')
    
      let url = `https://api.giphy.com/v1/gifs/random?&api_key=${this.state.apiKey}`;
      fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ imageSrc: res.data.image_url}))
        .catch((res) => {
          console.log('ERROR: No image from API!');
        });
  }
  render() { 
    return (
      <>
        <h1>Giphy</h1>
        <span>
        <Search />
        </span>
        <GiphyContainer />
         {/* <h3>{process.env.REACT_APP_BASE_URL}</h3> */}
        <div >
          
          <img src={this.state.imageSrc} alt=""
            style={{width: "100%", maxHeight:"auto"}}/> 
        <button className="btn-loadimg" onClick={this.randomGiphy}>Random</button>
      </div>  
      </>
      );
  }
}
 

export default App;
