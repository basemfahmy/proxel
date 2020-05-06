import React , {Component} from "react";
import  "../home/home.css";
import "./footer.css";
import "./footer-media-query.css" //media query css file 
class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="container">
                     <p> &copy; proxel 2020  all rights reserved</p>
                     <div className="social-links">
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> </a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
                         </div>
                    </div>
                </div>
        )
    }
}
export default Footer;