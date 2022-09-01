import React, {Component} from "react";
import Button from "../Button/Button";
import './FooterCard.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LinkListCard from "../LinkListCard/LinkListCard";

class FooterCard extends Component{
    render(){
        return(
            <div className="bg-footer-card-container">
                <div className="bg-footer-card-button background">
                    <div className="container">
                        <div className="footer-button">
                            <a href="#">
                                <Button ButtonName='Get Started'/>
                            </a>
                            <div className="tutorial-card">
                                <a href="#">
                                    Take the Tutorial 
                                    <span><FontAwesomeIcon icon={faAngleRight} /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-footer-card-body background">
                    <div className="container">
                        <div className="copyright-card">
                            <div className="open-source-icon-name">
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL+'images/mask-group.png'} alt="open source icon" />
                                </a>
                                <p>Copyright <i>&copy;</i> 2022 Meta Platforms, inc.</p>
                            </div>
                            <div className="link-list">
                                <LinkListCard 
                                    title='DOCS'
                                    linkName={[
                                        {href:'', label:'Installation'},
                                        {href:'', label:'Main Concepts'},
                                        {href:'', label:'Advanced Guides'},
                                        {href:'', label:'API References'},
                                        {href:'', label:'Hooks'},
                                        {href:'', label:'Testing'},
                                        {href:'', label:'Contributing'},
                                        {href:'', label:'FAQ'}
                                    ]}
                                />
                                <LinkListCard 
                                    title='CHANNELS'
                                    linkName={[
                                        {href:'', label:'Github'},
                                        {href:'', label:'Stack overflow'},
                                        {href:'', label:'discussion forums'},
                                        {href:'', label:'reactiflux chat'},
                                        {href:'', label:'DEV community'},
                                        {href:'', label:'facebook'},
                                        {href:'', label:'twitter'}
                                    ]}
                                />
                                <LinkListCard 
                                    title='COMMUNITY'
                                    linkName={[
                                        {href:'', label:'Code Of Conduct'},
                                        {href:'', label:'community resources'}
                                    ]}
                                />
                                <LinkListCard
                                    title='more'
                                    linkName={[
                                        {href:'', label:'tutorial'},
                                        {href:'', label:'blog'},
                                        {href:'', label:'acknowledgement'},
                                        {href:'', label:'react native'},
                                        {href:'', label:'priacy'},
                                        {href:'', label:'terms'}
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterCard;