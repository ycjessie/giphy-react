import React, { Component } from 'react';
import Giphy from './Giphy';
class Search extends Component {
    render() { 
        return ( 
            <>
                <div>
                    <label>Search Giphy</label>
                    <input type="text" placeholder="search for?"></input>
                </div>
            </>
         );
    }
}
 
export default Search;