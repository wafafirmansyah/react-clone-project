import React,{Component} from "react";
import './Button.scss';

class Button extends Component {
    render(){
        return(
            <button>{this.props.ButtonName}</button>
        )
    }
}

export default Button;