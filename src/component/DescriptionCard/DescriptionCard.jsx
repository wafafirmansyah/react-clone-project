import React, {Component} from "react";
import './DescriptionCard.scss';

class DescriptionCard extends Component {
    render(){
        return(
            <div className="description-card-container">
                <h2>{this.props.title}</h2>
                <p>{this.props.pText}</p>
                <p>{this.props.p2Text}</p>
            </div>
        )
    }
}

export default DescriptionCard;