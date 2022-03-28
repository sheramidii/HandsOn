import { Component } from "react";
import axios from "axios";
import Home from "../home/index.js";

class Search extends Component {
   state = { data:[], query:""};

   
   handleInput = (e) => {
     this.setState({ query: e.target.value})
    }

   searchGif = async () =>{
    const gifs = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
    )
    .then((response) => response)
    .catch((error) => error);
   this.setState({data: gifs.data.data})
   console.log(gifs); 
   }

   render(){
       const {data} = this.state;
       return (
        <>
          <input placeholder="Search" onChange={this.handleInput}/>
          <button onClick={this.searchGif}>Search</button>
          <Home passData = {data}/>
        </>
      );
   }
  };
  export default Search;