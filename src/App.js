import React, { Component } from 'react';
import GiphyContainer from './giphies/component/GiphyContainer'
import Search from './giphies/component/Search';
console.log(`${process.env.REACT_APP_URL_RANDOM}api_key=${process.env.REACT_APP_APIKEY}`)
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      imageSrc: '',
      apiKey: "afea92ac6eff442ba6fca79368717d0d",
    }
  }
  // componentDidMount() { 
  //   this.randomGiphy();
   
  // }
  componentDidMount() { 
    this.trendGiphy();
  }
  randomGiphy=(req,res)=>{
    console.log('show randomGiphy')
    
      let url = `https://api.giphy.com/v1/gifs/random?&api_key=${this.state.apiKey}`;
      //let url = `${process.env.REACT_APP_BASE_URL}`;
      
      fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ imageSrc: res.data.image_url}))
        .catch((res) => {
          console.log('ERROR: No image from API!');
        });
  }
  trendGiphy=(req,res)=>{
    console.log('show trendGiphy')
    
      let url = `https://api.giphy.com/v1/gifs/trending?&api_key=${this.state.apiKey}`;
      fetch(url)
        .then(res => res.json())
        .then(res => 
          this.setState({ 
            imageSrc: res.data.images.fixed_width_small.url}))
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
          
        <span>
        <button className="btn-loadimg" onClick={this.randomGiphy}>Random</button>
        <button className="btn-loadimg" onClick={this.trendGiphy}>Trending</button></span>
        <img src={this.state.imageSrc} alt=""
            style={{width: "50%", maxHeight:"50%"}}/> 
        
      </div>  
      </>
      );
  }
}
 

export default App;
