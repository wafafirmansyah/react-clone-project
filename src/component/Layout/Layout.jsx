import { render } from "@testing-library/react";
import React, {Component} from "react";
import Navbar from '../Navbar/Navbar.jsx';
import FooterCard from "../FooterCard/FooterCard";

class Layout extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                {this.props.children}
                <FooterCard/>
            </div>
        )
    }
}

export default Layout;