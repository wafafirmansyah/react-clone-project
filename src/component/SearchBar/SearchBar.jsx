import React, {Component} from "react";
import './SearchBar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
    onFocus(){
        const focus = document.getElementById('focus');
        focus.style.backgroundColor='rgba(255, 255, 255, 0.1)'
    }

    onBlur(){
        const blur = document.getElementById('focus');
        blur.style.backgroundColor = 'transparent';
    }
    render(){
        return(
            <div id="focus" className="search-bar-container">
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                <input onBlur={this.onBlur} onFocus={this.onFocus} placeholder="Search" type="text"/>
            </div>
        )
    }
}

export default SearchBar;