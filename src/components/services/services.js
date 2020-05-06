import React , {Component} from "react";
import  "../home/home.css";
import "./services.css";
import "./services-media-query.css";
import {Link} from "react-router-dom";
import $ from "jquery";
// imporetd images
import imgservices1 from "../images/services1.JPG";
import imgservices2 from "../images/services2.JPG";
import imgservices3 from "../images/services3.JPG";
// imporetd images

class Services extends Component {
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

    }) // end main function

   }
    // jquery code
    render(){
        return(
            <div className="services">
            <div className="main-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
  <Link className="navbar-brand" to="/">proxel.</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fa fa-bars" aria-hidden="true"></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">home </Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link" to="/about">about</Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link" to ="/portfolio">portfolio</Link>
      </li>
      <li className="nav-item active">
           <Link className="nav-link" to="/services">services</Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link" to="/blogs">blogs</Link>
      </li>
      <li className="nav-item">
           <Link className="nav-link" to="/contact">contact</Link>
      </li>
      <div className="search-box">
      <i class="fa fa-search" aria-hidden="true"></i>
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
              <i class="fa fa-angle-double-up" aria-hidden="true"></i>
               </button>
       </div>

       <div className="header-sm">
            <p>services</p>
            </div>

           <div className="services-sm main-box">
               <div className="container">
                   <div className="row">

                       <div className="col-lg-6 col-md-12 col-sm-12">
                           <div className="image">
                         <img src={imgservices1} alt="service-img"/>
                           </div>
                           </div>

                           <div className="col-lg-6 col-md-12 col-sm-12">
                           <div className="info"> 
                            <h3>modern concept</h3>
                    <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    sed ac augue at leo aliquam sagittis eget vitae elit.
                    nunc pellentesque quis augue dapibus dictum. 
                    phasellus sed dui id leo convallis sollicitudin ac nec
                    sapien. iaculis molestie est, id interdum ex
                    ultrices sit amet. Maecenas nec metus vel risus 
                    sagittis auctor sed et odio. Quisque scelerisque enim dui, 
                    condimentum cursus dui elementum ac. Duis vitae placerat erat. 
                    Sed id sagittis augue.
                    Duis vitae placerat erat. Sed id sagittis augue.
                     Donec in sollicitudin diam, sit amet porttitor eros.
                      sollicitudin ac nec sapien. Phasellus iaculis
                       molestie est, id interdum ex ultrices sit amet.
                     Maecenas nec metus vel risus sagittis auctor sed et odio. leo aliquam
                    </p>
                           </div>
                               </div>

                       </div>

                       <div className="row">

     <div className="col-lg-6 col-md-12 col-sm-12 col-one">
    <div className="info second-info"> 
     <h3>various options</h3>
            <p >
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed ac augue at leo aliquam sagittis eget vitae elit.
            nunc pellentesque quis augue dapibus dictum. 
            phasellus sed dui id leo convallis sollicitudin ac nec
            sapien. iaculis molestie est, id interdum ex
            ultrices sit amet. Maecenas nec metus vel risus 
            sagittis auctor sed et odio. Quisque scelerisque enim dui, 
            condimentum cursus dui elementum ac. Duis vitae placerat erat. 
            Sed id sagittis augue.
            Duis vitae placerat erat. Sed id sagittis augue.
            Donec in sollicitudin diam, sit amet porttitor eros.
            sollicitudin ac nec sapien. Phasellus iaculis
            molestie est, id interdum ex ultrices sit amet.
            Maecenas nec metus vel risus sagittis auctor sed et odio. leo aliquam
            </p>
    </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-two">
    <div className="image second-image">
  <img src={imgservices2} alt="service-img"/>
    </div>
    </div>

</div>    
<div className="row">

<div className="col-lg-6 col-md-12 col-sm-12">
    <div className="image ">
  <img src={imgservices3}  className="last-image" alt="service-img"/>
    </div>
    </div>

    <div className="col-lg-6 col-md-12 col-sm-12">
    <div className="info"> 
     <h3>high quality</h3>
            <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed ac augue at leo aliquam sagittis eget vitae elit.
            nunc pellentesque quis augue dapibus dictum. 
            phasellus sed dui id leo convallis sollicitudin ac nec
            sapien. iaculis molestie est, id interdum ex
            ultrices sit amet. Maecenas nec metus vel risus 
            sagittis auctor sed et odio. Quisque scelerisque enim dui, 
            condimentum cursus dui elementum ac. Duis vitae placerat erat. 
            Sed id sagittis augue.
            Duis vitae placerat erat. Sed id sagittis augue.
            Donec in sollicitudin diam, sit amet porttitor eros.
            sollicitudin ac nec sapien. Phasellus iaculis
            molestie est, id interdum ex ultrices sit amet.
            Maecenas nec metus vel risus sagittis auctor sed et odio. leo aliquam
            </p>
    </div>
        </div>

</div>

                   </div>
               </div> 

               <div className="pricing main-box">
                   <div className="container">
                       <h2 className="heading">pricing</h2>   
                       <div className="row">
                           <div className="col-md-4 col-sm-6">
                               <div className="item">
                               <h3>basic plane</h3>
                               <p className="price-tag">$ 99</p>
                               <ul>
                               <li>1 design sample</li>
                               <li>no psd file</li>
                               <li>no discount</li>
                               <li>cutomer support</li>
                                   </ul>
                              <form>
                  <input  type="submit"  className="my-button" value="buy now"/>
                                </form>
                                   </div>
                               </div>

                               <div className="col-md-4 col-sm-6">
                               <div className="item">
                               <h3>business plan</h3>
                               <p className="price-tag">$ 199</p>
                               <ul>
                               <li>2 design samples</li>
                               <li> psd file</li>
                               <li>3% discount</li>
                               <li>cutomer support</li>
                                   </ul>
                              <form>
                  <input  type="submit"  className="my-button" value="buy now"/>
                                </form>
                                   </div>
                               </div>

                               <div className="col-md-4 col-sm-6">
                               <div className="item">
                               <h3>pro plane</h3>
                               <p className="price-tag">$ 299</p>
                               <ul>
                               <li>3 design samples</li>
                               <li> psd file</li>
                               <li>6% discount</li>
                               <li>cutomer support</li>
                                   </ul>
                              <form>
                  <input  type="submit"  className="my-button" value="buy now"/>
                                </form>
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
                     
              
                </div> // end services
        )
    }
}
export default Services;