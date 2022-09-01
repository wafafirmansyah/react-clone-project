import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import './DropDownMenuCard.scss';

class DropDownMenuCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    onClick = () => {
        this.setState(
            {isOpen: !this.state.isOpen}
        )
    }
    

    render(){
        return(
            <div className="drop-down-container">
                <h4 onClick={this.onClick} id="drop-down"> {this.props.title} <FontAwesomeIcon className={`angle-down ${this.state.isOpen ? 'active' : ''}`} icon={faAngleDown}/></h4>
                <div className={`drop-down-menu ${this.state.isOpen ? 'active' : ''}`}>
                    {this.props.linkName.map((item, index)=> {
                        return(<a key={index} href={item.href}>{item.label}</a>)
                    })}
                </div>
            </div>
        )
    }
}

export default DropDownMenuCard;