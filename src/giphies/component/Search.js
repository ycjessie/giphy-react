import React, { Component } from 'react';
import Giphy from './Giphy';
class Search extends Component {
    render() { 
        return ( 
            <>
                <div>
                    <form>
                        <label>Search Giphy</label>
                        <input type="text" placeholder="search for?"></input>
                     <span> <button>Enter</button></span>
                    </form>
                   
                </div>
            </>
         );
    }
}
 
export default Search;