import React, {Component} from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Navbar.scss';
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <div className="bg-nav-top background">
                <div className="container">
                    <div className="text">
                        <p>Support Ukraine 🇺🇦 <a href="#">Help Provide Humanitarian Aid to Ukraine.</a></p>
                    </div>
                </div>
                <div className="bg-nav-bottom background">
                    <div className="navigation container">
                        <div className="react-logo">
                            <Link to="/">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react icon" />
                                <h3>react</h3>
                            </Link>
                        </div>
                        <div className="navigation-text">
                            <Link to='/docs'>Docs</Link>
                            <a href="#">Tutorial</a>
                            <a href="#">Blog</a>
                            <a href="#">Community</a>
                        </div>
                        <SearchBar/>
                        <div className="version-language">
                            <a href="#">v18.2.0</a>
                            <a className="language" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " className="css-c4d79v"></path></svg>
                                Languages
                            </a>
                            <a className="github" href="#">
                                Github
                                <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className="css-1yyhkcy"><path fill="currentColor" d="
                                M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
                                0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
                                "></path><polygon fill="currentColor" points="
                                45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
                                14.9 62.8,22.9 71.5,22.9
                                "></polygon></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;