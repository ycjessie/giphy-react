import React, { Component } from 'react';
import Giphy from './Giphy';
class GiphyContainer extends Component {
    render() { 
        return (
            <>
                <h4>List</h4>
                <ul>
                    <Giphy />
                    <Giphy />
                    <Giphy />
                </ul>
            </>
          );
    }
}
 
export default GiphyContainer;