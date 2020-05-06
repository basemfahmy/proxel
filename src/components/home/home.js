import React , {Component} from "react";
import {Link} from "react-router-dom";
import "./home.css";
import "./home-media-query.css";
import  $ from "jquery" 
// imported images
import port1 from "../images/port1.jpg";
import port2 from "../images/port2.jpg";
import port3 from "../images/port3.jpg";
import port4 from "../images/port4.jpg";
import port5 from "../images/port5.jpg";
import port6 from "../images/port6.JPG";
import port7 from "../images/port7.jpg";
import port8 from "../images/port8.jpg";
import port9 from "../images/port9.jpg";
import blogimg1 from "../images/blogs-sm1.JPG";
import blogimg2 from "../images/blogs-sm2.JPG";
import blogimg3 from "../images/blogs-sm3.JPG";
import blogimg4 from "../images/blogs-sm4.JPG";
import client1 from "../images/client1.webp";
import client2 from "../images/client2.webp";
import client3 from "../images/client3.webp";
//imported images
class Home extends Component{
// jquery code
   componentDidMount(){

    $(document).ready(function(){
        /*start home page */
        $(".search-box i").click(function(e){ // search box
            $(this).toggleClass("is-hidden")
            if( $(this).hasClass("is-hidden")) {
               $(this).parent().find("input").show() // show input search
            }
            else{
             $(this).parent().find("input").hide() // hide it again
            }
        })
    
        $(".portfolio .item ").mouseenter(function(){ // for portfolio
          $(this).find(".overlay").fadeIn(300) // show overlay
        })
        $(".portfolio .item ").mouseleave(function(){ // for portfolio
         $(this).find(".overlay").fadeOut(300) // hide  overlay
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
        

       /*end homepage*/   
    }) // end main function 

   } 
 // jquer code   
    render(){
        return(
        <div className="home">
            <div className="main-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
  <Link className="navbar-brand" to="/">proxel.</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i className="fa fa-bars" aria-hidden="true"></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">home </Link>
      </li>
      <li className="nav-item">
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

            <div className="header">
                <div className="container">
             <div className="info">
                 <h2>hi , i am john proxel ui / ux designer</h2>
                 <div className="buttons">

                <a className="my-button" href="/portfolio"> my portfolio</a> 
                  <a  className="my-button" href="#">
                  <i class="fa fa-download" aria-hidden="true"></i>
                     </a> 
                     
                     </div>
                 </div>
                </div>
                </div>

                <div className="services main-box">
                    <div className="container">
                        <h2 className="heading">my services</h2>
                        <div className="row">

                            <div className="col-md-6 col-sm-6" >
                                <div className="item">
                      <i class="fa fa-paint-brush" aria-hidden="true"></i>
                                <div className="info">
                                    <h3> design </h3>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            sed ac augue at leo aliquam sagittis eget vitae elit. </p>
                                </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6" >
                                <div className="item">
                                <i class="fa fa-rocket" aria-hidden="true"></i>
                                <div className="info">
                                    <h3> marketing </h3>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            sed ac augue at leo aliquam sagittis eget vitae elit. </p>
                                </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6" >
                                <div className="item">
                                <i class="fa fa-bullhorn" aria-hidden="true"></i>
                                <div className="info">
                                    <h3> branding </h3>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            sed ac augue at leo aliquam sagittis eget vitae elit. </p>
                                </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6" >
                                <div className="item">
                                <i class="fa fa-search-plus" aria-hidden="true"></i>
                                <div className="info">
                                    <h3> seo </h3>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            sed ac augue at leo aliquam sagittis eget vitae elit. </p>
                                </div>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </div>

                    <div className="portfolio main-box">
                        <div className="container">
                        <h2 className="heading">my portfolio</h2>
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
                     <div className="button">
                 <a className="my-button" href="/portfolio">read more</a>
                            </div>
                         </div>
                        </div>   

                <div className="clients main-box"> 
                <div className="container">
                <h2 className="heading">what clients say about me</h2>
                <div id="client-slider" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#client-slider" data-slide-to="0" class="active"></li>
    <li data-target="#client-slider" data-slide-to="1"></li>
    <li data-target="#client-slider" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="item">
        <img  src={client1} alt="client-img"/>
        <p  className="main-p">lorem ipsum dolor sit amet, consectetur adipiscing elit
        sed ac augue at leo aliquam sagittis eget vitae elit 
        nunc pellentesque quis dapibus dictum. Phasellus sed.  </p>
        <div className="info">
            <h3>monica Epstein </h3>
            <p>civil engineer</p>
            </div>
            </div>
    </div>

    <div className="carousel-item">
    <div className="item">
        <img  src={client2} alt="client-img"/>
        <p  className="main-p">lorem ipsum dolor sit amet, consectetur adipiscing elit
        sed ac augue at leo aliquam sagittis eget vitae elit 
        nunc pellentesque quis dapibus dictum. Phasellus sed.  </p>
        <div className="info">
            <h3>David Murcek</h3>
            <p>teacher</p>
            </div>
            </div>
    </div>

    <div className="carousel-item">
    <div className="item">
        <img  src={client3} alt="client-img"/>
        <p className="main-p">lorem ipsum dolor sit amet, consectetur adipiscing elit
        sed ac augue at leo aliquam sagittis eget vitae elit 
        nunc pellentesque quis dapibus dictum. Phasellus sed.  </p>
        <div className="info">
            <h3>Mario Bedin </h3>
            <p>translator</p>
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

                 <div className=" blogs main-box">
                     <div className="container">
                     <h2 className="heading">latest blogs</h2>
                     <div className="row">

                         <div className="col-md-6 col-sm-12">
                             <div className="item">
                                 <a href="#">
                                 <img src={blogimg1} alt="blog-img" />
                                 <div className="info">
                               <h3>emerging technologies in ui design</h3>
                                     <div className="blog-stats">
                      <p> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> 20 april 2020 </p>
                      <p> <i class="fa fa-commenting-o" aria-hidden="true"></i> 12 comments </p>
                                         </div>
                                     </div>
                                     </a>
                             </div>
                             </div>
                             
                         <div className="col-md-6 col-sm-12">
                             <div className="item">
                                 <a href="#">
                                 <img src={blogimg2} alt="blog-img" />
                                 <div className="info">
                              <h3>what is the right name for your product</h3>
                                     <div className="blog-stats">
                      <p> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> 12 may 2020 </p>
                      <p> <i class="fa fa-commenting-o" aria-hidden="true"></i> 5 comments </p>
                                         </div>
                                     </div>
                                     </a>
                             </div>
                             </div>
                             
                         <div className="col-md-6 col-sm-12">
                             <div className="item">
                                 <a href="#">
                                 <img src={blogimg3} alt="blog-img" />
                                 <div className="info">
                                     <h3>The Keyword Research Master Guide</h3>
                                     <div className="blog-stats">
                      <p> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> 5 feb april 2020 </p>
                      <p> <i class="fa fa-commenting-o" aria-hidden="true"></i> 15 comments </p>
                                         </div>
                                     </div>
                                     </a>
                             </div>
                             </div>
                             
                         <div className="col-md-6 col-sm-12">
                             <div className="item">
                                 <a href="#">
                                 <img src={blogimg4} alt="blog-img" />
                                 <div className="info">
                         <h3>do you think you choose the best marketing strategy</h3>
                                     <div className="blog-stats">
                      <p> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> 14 jan 2020 </p>
                      <p> <i class="fa fa-commenting-o" aria-hidden="true"></i> 20 comments </p>
                                         </div>
                                     </div>
                                     </a>
                             </div>
                             </div>
                         </div>
                         
                         <div className="button">
               <a className="my-button" href="/blogs">read more</a>
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
     
             </div> 
        )
    }
}

export default Home;