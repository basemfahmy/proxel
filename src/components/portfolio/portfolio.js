import React , {Component} from "react";
import  "../home/home.css";
import "./portfolio.css";
import {Link} from "react-router-dom";
import $ from "jquery";
import mixitup from 'mixitup';
// imporetd images
import port1 from "../images/port1.jpg";
import port2 from "../images/port2.jpg";
import port3 from "../images/port3.jpg";
import port4 from "../images/port4.jpg";
import port5 from "../images/port5.jpg";
import port6 from "../images/port6.JPG";
import port7 from "../images/port7.jpg";
import port8 from "../images/port8.jpg";
import port9 from "../images/port9.jpg";
// imporetd images

class Portfolio extends Component {
     // jquery code
componentDidMount(){
    $(document).ready(function(){
        
       $(".search-box i").click(function(e){ // search box
           $(this).toggleClass("is-hidden")
           if( $(this).hasClass("is-hidden")) {
              $(this).parent().find("input").show() // show input search
           }
           else{
            $(this).parent().find("input").hide() // hide it again
           }
       })
       
       $(window).scroll(function(){  // for go up button
           if ( $(window).scrollTop() > 200){
               $(".go-up-button button").fadeIn(300) // show button 
           }
           else { 
            $(".go-up-button button").fadeOut(300) // hide button 
    
           }
       })
       $(".go-up-button button").click(function(){ // for go up button 
           $("html,body").animate({scrollTop:0},1200) // go to the top of web page 
       })

      $(".gallery .navigation button").click(function(){ // for gallery buttons
        $(this).addClass("active").siblings().removeClass("active")
       })

         
       $(".portfolio .item ").mouseenter(function(){ // for portfolio images
        $(this).find(".overlay").fadeIn(300) // show overlay
      })
      $(".portfolio .item ").mouseleave(function(){ // for portfolio images
       $(this).find(".overlay").fadeOut(300) // hide  overlay
     })
     
    }) // end main function
    var mixer = mixitup('.mix-container'); // excute gallery mixit up shuffle

   }
    // jquery code
    render(){
        return(
            <div className="portfolio">
                               <div className="main-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
  <Link className="navbar-brand" to="/">proxel.</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i className="fa fa-bars" aria-hidden="true"></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">home </Link>
      </li>
      <li className="nav-item ">
           <Link className="nav-link" to="/about">about</Link>
      </li>
      <li className="nav-item active">
           <Link className="nav-link" to ="/portfolio">portfolio</Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link" to="/services">services</Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link" to="/blogs">blogs</Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link" to="/contact">contact</Link>
      </li>
      <div className="search-box">
      <i className="fa fa-search" aria-hidden="true"></i>
        <form><input type="text" placeholder="seacrh for"/> </form>
            </div>
    </ul>

           <div className="hire-me"> 
             < Link to="/contact">hire me </Link>
             </div>
  </div>
   </div>
      </nav> 
       </div>
 
      <div className="go-up-button">
          <button>
              <i className="fa fa-angle-double-up" aria-hidden="true"></i>
               </button>
       </div>

       <div className="header-sm">
            <p>portfolio</p>
            </div>

         <div className="gallery main-box">
             <div className="container">
                  <div className="navigation">
<button type="button" data-filter="all" className="active">All</button>
<button type="button" data-filter=".design">design</button>
<button type="button" data-filter=".branding">branding</button>
<button type="button" data-filter=".marketing">marketing</button>
<button type="button" data-filter=".seo">seo</button>
                      </div>

                      <div className="mix-container">
                          <div className="row">
                          <div className="col-md-4 col-sm-12">
                                 <div className="item mix design">
                                     <div className="overlay">
                                         <div className="info">
                                             <h3>ui design</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port1} alt="work-img"/>
                                     </div>

                                     <div className="item mix seo">
                                     <div className="overlay">
                                         <div className="info">
                                             <h3>seo</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port2} alt="work-img"/>
                                     </div>

                                     <div className="item mix branding">
                                     <div className="overlay">
                                         <div className="info">
                                             <h3>branding</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port3} alt="work-img"/>
                                     </div>
                                 </div>

                                 <div className="col-md-4 col-sm-12">
                                 <div className="item mix marketing">
                                     <div className="overlay">
                                     <div className="info">
                                             <h3>marketing</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port4} alt="work-img"/>
                                     </div>

                                     <div className="item mix branding">
                                     <div className="overlay">
                                     <div className="info">
                                             <h3>branding</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port5} alt="work-img"/>
                                     </div>

                                     <div className="item mix design">
                                     <div className="overlay">
                                     <div className="info">
                                             <h3>ui design</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port6} alt="work-img"/>
                                     </div>
                                 </div>

                                 <div className="col-md-4 col-sm-12">
                                 <div className="item mix seo">
                                     <div className="overlay">
                                     <div className="info">
                                             <h3>seo</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port7} alt="work-img"/>
                                     </div>

                                     <div className="item mix branding">
                                     <div className="overlay">
                                     <div className="info">
                                             <h3>branding</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port8} alt="work-img"/>
                                     </div>

                                     <div className="item mix marketing">
                                     <div className="overlay">
                                     <div className="info">
                                             <h3>marketing</h3>
                                             <a href="#">preview</a>
                                         </div>
                                         </div>
                                     <img src={port9} alt="work-img"/>
                                     </div>
                                 </div>
                                 </div>
                            </div>
                     </div>
                     </div>

                
                     <div className="newsletter">
                       <div className="container">
                           <div className="row">
                               <div className="col-lg-6 col-md-12 col-sm-12">
                                   <h2> subscribe to newsletter </h2>
                                   </div>

                             <div className="col-lg-6 col-md-12 col-sm-12">
                            <form>
                      <input type="email" placeholder="your email" required/>
                      <input type="submit" value="subscribe"/>
                          </form>
                                   </div>
                               </div>

                           </div>
                       </div> 

                </div> // end portfolio 
        )
    }
}
export default Portfolio;