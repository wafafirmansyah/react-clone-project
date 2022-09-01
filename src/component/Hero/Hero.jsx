import React, {Component} from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Hero.scss';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Hero extends Component {
    render(){
        return(
            <div className="bg-hero background">
                <div className="bg-logo"></div>
                <h1>React</h1>
                <h2>A JavaScript library for building user interfaces</h2>
                <div className="button-card">
                    <Button ButtonName='Get Started' />
                    <a href="#">
                        Take the Tutorial
                        <span><FontAwesomeIcon icon={faAngleRight} /></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Hero;