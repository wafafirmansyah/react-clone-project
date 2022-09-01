import React, {Component} from "react";
import DropDownMenuCard from "../../DropDownMenuCard/DropDownMenuCard";
import FooterCard from "../../FooterCard/FooterCard";
import Navbar from "../../Navbar/Navbar";
import './SidebarLayout.scss'

export default class SidebarLayout extends Component{
    render(){
        return(
            <div className="sidebar-layout-container">
                <Navbar/>
                <div className="sidebar-layout">
                    <div>
                        {this.props.children}
                        <FooterCard/>
                    </div>
                    <div className="sidebar-layout-content container">
                        {/* <div className="sidebar-container">
                            <DropDownMenuCard 
                            title='installation'
                            linkName={[
                                {href:'', label:'getting started'},
                                {href:'', label:'add react to a website'},
                                {href:'', label:'create a new react app'},
                            ]}
                            /> 
                        </div> */}
                    </div>                
                </div>
            </div>
        )
    }
}