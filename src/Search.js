import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
render() {
    return (
        <div>
            <form>
                <input className="search" type="text" id="filter" placeholder="Search for ..."  onChange={this.handleInputChange}/>
            </form>

        </div>
    )
  }
}


export default Search;
