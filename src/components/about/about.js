import React , {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import $ from "jquery";
import circleProgress from "jquery-circle-progress"; //circle progrees .js
import "../home/home.css";
import "./about.css";
import "./about-media-query.css";
// imported images
import imgabout from   "../images/about.jpg";
import imgpartner1 from "../images/partner1.jpg";
import imgpartner2 from "../images/partner2.jpg";
import imgpartner3 from "../images/partner3.jpg";
import imgpartner4 from "../images/partner4.jpg";
import imgpartner5 from "../images/partner5.jpg";
import imgpartner6 from "../images/partner6.jpg";
import client1 from "../images/client1.webp";
import client2 from "../images/client2.webp";
import client3 from "../images/client3.webp";
//imported images
class About extends Component{
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
    // start skills
    $('#circle1').circleProgress
({ value: 0.93, size: 150, fill:"#07395c",startAngle:30,thickness:6,emptyFill:"#f2f2f2"}); 

    $('#circle2').circleProgress
 ({ value: 0.80, size: 150, fill:"#07395c",startAngle:30,thickness:6,emptyFill:"#f2f2f2"}); 

    $('#circle3').circleProgress
({ value: 0.84, size: 150, fill:"#07395c",startAngle:30,thickness:6,emptyFill:"#f2f2f2"}); 

    $('#circle4').circleProgress
({ value: 0.75, size: 150, fill:"#07395c",startAngle:30,thickness:6,emptyFill:"#f2f2f2"}); 
   //end skills
  

 }) // end main function

}
 // jquery code

    render(){
        return(
        <div className="about">
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
      <li className="nav-item active">
           <Link className="nav-link" to="/about">about</Link>
      </li>
      <li className="nav-item">
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
              <i class="fa fa-angle-double-up" aria-hidden="true"></i>
               </button>
       </div>

       <div className="header-sm">
            <p>about </p>
            </div>

            <div className="about-info main-box">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                            <h2>more than 7 years experience in ui / ux design</h2>
                            <img src={imgabout} alt="about-img"/>
                            </div>
                         </div>

                         <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="personal">
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    sed ac augue at leo aliquam sagittis eget vitae elit. 
                    nunc pellentesque quis augue dapibus dictum. 
                    phasellus sed dui id leo convallis sollicitudin ac nec sapien. 
                    iaculis molestie est, id interdum ex ultrices sit amet. 
                    Maecenas nec metus vel risus sagittis auctor sed et odio. 
                    Quisque scelerisque enim dui, condimentum cursus dui elementum ac.
                    Duis vitae placerat erat. Sed id sagittis augue. 
                    Donec in sollicitudin diam, sit amet porttitor eros.
                    sollicitudin ac nec sapien. 
                    Phasellus iaculis molestie est, id interdum ex ultrices sit amet. 
                    Maecenas nec metus vel risus sagittis auctor sed et odio.
                    leo aliquam sagittis eget vitae elit.Donec in sollicitudin diam, sit amet porttitor eros.  
                    </p>
                        </div>
                         </div>
                 </div>         
        
                    </div>
                </div>

             <div className="business-partners main-box">
                 <div className="container">
             <h2 className="heading"> business partners</h2>
             <div className="row">
                 <div className="col-md-4 col-sm-6">
                     <div className="item">
                         <img src={imgpartner1} alt="partner-img"/>
                         <div className="info">
                             <h3>rita grey </h3>
                             <p>founder</p>
                             </div>
                             <p className="main-p">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </p>
                             <div className="links"> 
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> </a>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                             </div>   
                         </div>
                     </div>

                     <div className="col-md-4 col-sm-6">
                     <div className="item">
                         <img src={imgpartner2} alt="partner-img"/>
                         <div className="info">
                             <h3>Javier Gonzalez</h3>
                             <p>co-founder</p>
                             </div>
                             <p className="main-p">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </p>
                             <div className="links"> 
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> </a>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                             </div>   
                         </div>
                     </div>

                     <div className="col-md-4 col-sm-6">
                     <div className="item">
                         <img src={imgpartner3} alt="partner-img"/>
                         <div className="info">
                             <h3>Julia spade</h3>
                             <p>project manager</p>
                             </div>
                             <p className="main-p">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </p>
                             <div className="links"> 
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> </a>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                             </div>   
                         </div>
                     </div>

                     <div className="col-md-4 col-sm-6">
                     <div className="item">
                         <img src={imgpartner4} alt="partner-img"/>
                         <div className="info">
                             <h3>Raul Lluva</h3>
                             <p>ui developer</p>
                             </div>
                             <p className="main-p">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </p>
                             <div className="links"> 
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> </a>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                             </div>   
                         </div>
                     </div>

                     <div className="col-md-4 col-sm-6">
                     <div className="item">
                         <img src={imgpartner5} alt="partner-img"/>
                         <div className="info">
                             <h3>Eduardo Kohn </h3>
                             <p>video editor</p>
                             </div>
                             <p className="main-p">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </p>
                             <div className="links"> 
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> </a>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                             </div>   
                         </div>
                     </div>

                     <div className="col-md-4 col-sm-6">
                     <div className="item">
                         <img src={imgpartner6} alt="partner-img"/>
                         <div className="info">
                             <h3>Jonathan Boarelli </h3>
                             <p>graphic designer</p>
                             </div>
                             <p className="main-p">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </p>
                             <div className="links"> 
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> </a>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
               <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                             </div>   
                         </div>
                     </div>
                 </div>
               </div>
                 </div>
          <div className="skills main-box">
              <div className="container">
              <h2 className="heading"> my skills</h2>
              <div className="row">
             <div className="col-md-3 col-sm-6">
                 <div className="item">
                 <div id="circle1" className="my-progress"> <span>93 %</span> </div>
                     <h3>design</h3>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                 <div className="item">
                 <div id="circle2" className="my-progress"> <span>80 %</span> </div>
                     <h3>marketing</h3>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                 <div className="item">
                 <div id="circle3" className="my-progress"> <span>84 %</span> </div>
                     <h3>branding</h3>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                 <div className="item">
                 <div id="circle4" className="my-progress"> <span>75 %</span> </div>
                     <h3>seo</h3>
                     </div>
                  </div>

              </div>

                  </div>
              </div>

            <div className="clients clients-sm main-box">
                <div className="container">
    <div id="client-slider" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#client-slider" data-slide-to="0" class="active"></li>
    <li data-target="#client-slider" data-slide-to="1"></li>
    <li data-target="#client-slider" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" >
    <div className="carousel-item active">
        <div className="item">
            <div className="row">
         <div className="col-lg-6 col-md-12 col-sm-12">
        <img  src={client1} alt="client-img"/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="info">
           <h3>monica Epstein </h3>
            <p>civil engineer</p>
            <p  className="main-p">lorem ipsum dolor sit amet, consectetur adipiscing elit
        sed ac augue at leo aliquam sagittis eget vitae elit 
        nunc pellentesque quis dapibus dictum. Phasellus sed.  </p>
            </div>
            </div>
            </div>
            </div>
    </div>

    <div className="carousel-item">
    <div className="item">
            <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
        <img  src={client2} alt="client-img"/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="info">
        <h3>David Murcek</h3>
            <p>teacher</p>
            <p  className="main-p">lorem ipsum dolor sit amet, consectetur adipiscing elit
        sed ac augue at leo aliquam sagittis eget vitae elit 
        nunc pellentesque quis dapibus dictum. Phasellus sed.  </p>
            </div>
            </div>
            </div>
            </div>
    </div>

    <div className="carousel-item">
    <div className="item">
            <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
        <img  src={client3} alt="client-img"/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="info">
        <h3>Mario Bedin </h3>
            <p>translator</p>
            <p  className="main-p">lorem ipsum dolor sit amet, consectetur adipiscing elit
        sed ac augue at leo aliquam sagittis eget vitae elit 
        nunc pellentesque quis dapibus dictum. Phasellus sed.  </p>
            </div>
            </div>
            </div>
            </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#client-slider" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#client-slider" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

                    </div>
                </div>     

         <div className="objectives main-box">
             <div className="container"> 
             <h2 className="heading">main objectives</h2>
             <div className="row">
                 <div className="col-md-4 col-sm-6">
                 <div className="item">
                 <i class="fa fa-star" aria-hidden="true"></i>
                <div className="info">
                    <h3> quality </h3>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed ac augue at leo aliquam sagittis eget vitae elit. </p>
                </div>
                    </div>
                     </div>
                     <div className="col-md-4 col-sm-6">
                 <div className="item">
                 <i class="fa fa-cog" aria-hidden="true"></i>
                <div className="info">
                    <h3> usability </h3>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed ac augue at leo aliquam sagittis eget vitae elit. </p>
                </div>
                    </div>
                     </div>

                     <div className="col-md-4 col-sm-6">
                 <div className="item">
                 <i class="fa fa-heart" aria-hidden="true"></i>
                <div className="info">
                    <h3> satisfaction </h3>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed ac augue at leo aliquam sagittis eget vitae elit. </p>
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

             </div>  //end about
             


        )
    }
}

export default About;