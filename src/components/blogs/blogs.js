import React , {Component} from "react";
import  "../home/home.css";
import "./blogs.css";
import "./blogs-media-query.css";
import {Link} from "react-router-dom";
import $ from "jquery";
// imporetd images
import blogimg1 from "../images/blog1.JPG"
import blogimg2 from "../images/blog2.JPG"
import blogimg3 from "../images/blog3.JPG"
import blogimg4 from "../images/blog4.JPG"
// imporetd images

class Blogs extends Component {
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
            <div className="blogs-sm">
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
      <li className="nav-item ">
           <Link className="nav-link" to="/about">about</Link>
      </li>
      <li className="nav-item ">
           <Link className="nav-link" to ="/portfolio">portfolio</Link>
      </li>
      <li className="nav-item ">
           <Link className="nav-link" to="/services">services</Link>
      </li>
      <li className="nav-item active">
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
            <p>blogs</p>
            </div>

      <div className="main-blogs main-box">
          <div className="container">
              <div className="row">
              <div className="col-md-6 col-sm-12"> 
              <div className="image">
                  <img src={blogimg1} alt="blog-img"/>
              </div>
              </div>
              <div className="col-md-6 col-sm-12"> 
              <div className="info right-info">
                  <a href="#">
                  <h3>emerging technologies in ui design</h3>
                  <p className="main-p">
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
        sed ac augue at leo aliquam sagittis eget vitae elit. 
        nunc pellentesque quis augue dapibus dictum. 
        phasellus sed dui id leo convallis sollicitudin ac nec sapien.
        iaculis molestie est, id interdum ex ultrices sit amet. 
        maecenas nec metus vel risus sagittis auctor sed et odio. 
        quisque scelerisque enim dui, condimentum cursus dui elementum ac
        duis vitae placerat erat. Sed id </p>
            <div className="blog-stats"> 
            <p> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
            <span> 1 may 2020 </span>
            </p>
            <p> <i class="fa fa-commenting-o" aria-hidden="true"></i> 
            <span> 14 comments</span>
            </p>

            </div>  
            </a>       
              </div>
            </div>
              </div>

              <div className="row">
              <div className="col-md-6 col-sm-12 col-one"> 
              <div className="info ">
                  <a href="#">
                  <h3>what is the right name for your product </h3>
                  <p className="main-p">
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
        sed ac augue at leo aliquam sagittis eget vitae elit. 
        nunc pellentesque quis augue dapibus dictum. 
        phasellus sed dui id leo convallis sollicitudin ac nec sapien.
        iaculis molestie est, id interdum ex ultrices sit amet. 
        maecenas nec metus vel risus sagittis auctor sed et odio. 
        quisque scelerisque enim dui, condimentum cursus dui elementum ac
        duis vitae placerat erat. Sed id </p>
            <div className="blog-stats"> 
            <p> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
            <span> 5 march 2020 </span>
            </p>
            <p> <i class="fa fa-commenting-o" aria-hidden="true"></i> 
            <span> 7 comments</span>
            </p>

            </div>  
            </a>       
              </div>

            </div>
            <div className="col-md-6 col-sm-12 col-two"> 
              <div className="image">
                  <img className="big-img" src={blogimg2} alt="blog-img"/>
              </div>
              </div>
              </div>

              <div className="row">
              <div className="col-md-6 col-sm-12"> 
              <div className="image">
                  <img src={blogimg3} alt="blog-img"/>
              </div>
              </div>
              <div className="col-md-6 col-sm-12"> 
              <div className="info right-info">
                  <a href="#">
                  <h3>The Keyword Research Master Guide</h3>
                  <p className="main-p">
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
        sed ac augue at leo aliquam sagittis eget vitae elit. 
        nunc pellentesque quis augue dapibus dictum. 
        phasellus sed dui id leo convallis sollicitudin ac nec sapien.
        iaculis molestie est, id interdum ex ultrices sit amet. 
        maecenas nec metus vel risus sagittis auctor sed et odio. 
        quisque scelerisque enim dui, condimentum cursus dui elementum ac
        duis vitae placerat erat. Sed id </p>
            <div className="blog-stats"> 
            <p> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
            <span> 7 april 2020 </span>
            </p>
            <p> <i class="fa fa-commenting-o" aria-hidden="true"></i> 
            <span> 20 comments</span>
            </p>

            </div>  
            </a>       
              </div>
            </div>
              </div>

              <div className="row"> 
              <div className="col-md-6 col-sm-12 col-one"> 
              <div className="info ">
                  <a href="#">
                  <h3>do you think you choose the best marketing strategy</h3>
                  <p className="main-p">
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
        sed ac augue at leo aliquam sagittis eget vitae elit. 
        nunc pellentesque quis augue dapibus dictum. 
        phasellus sed dui id leo convallis sollicitudin ac nec sapien.
        iaculis molestie est, id interdum ex ultrices sit amet. 
        maecenas nec metus vel risus sagittis auctor sed et odio. 
        quisque scelerisque enim dui, condimentum cursus dui elementum ac
        duis vitae placerat erat. Sed id </p>
            <div className="blog-stats"> 
            <p> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
            <span> 12 jan 2020 </span>
            </p>
            <p> <i class="fa fa-commenting-o" aria-hidden="true"></i> 
            <span> 22 comments</span>
            </p>

            </div>  
            </a>       
              </div>

            </div>
            <div className="col-md-6 col-sm-12 col-two"> 
              <div className="image">
                  <img className="big-img" src={blogimg4} alt="blog-img"/>
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
                </div> // end blogs
        )
    }
}
export default Blogs;