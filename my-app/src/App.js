import SearchBar from "./SearchBar";
import React from "react";
import axios from 'axios';
import ImageList from "./ImageList";


class App extends React.Component {

  state = {images : []};

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
    params: {query: term},
    headers :{
      Authorization :'Client-ID i720xUqPFqUlps6XML8St4m6OqHD6KWmElqpSl86l4w'
    }
   });
   this.setState({images: response.data.results});
    
  };
  render(){
  return (
    <div className="ui container" style={{marginTop : '15px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList  images={this.state.images}/>
    </div>
  );
  }
}

export default App;
