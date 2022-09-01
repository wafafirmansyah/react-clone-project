import React, {Component} from "react";
import './LinkListCard.scss';



class LinkListCard extends Component {
    render(){
        return(
            <div className="link-list-container">
                <h4>{this.props.title}</h4>
                {this.props.linkName.map((item, index)=> {
                    return(<a key={index} href={item.href}>{item.label}</a>)
                })}
            </div>
        )
    }
}

export default LinkListCard;