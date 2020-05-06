import React , {Component} from "react";
import  "../home/home.css";
import "./contact.css";
import "./contact-media-query.css";
import {Link} from "react-router-dom";
import $ from "jquery";

class Contact extends Component {
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

      $(".contact-form form .field input").focusout(function(){ // contact form
          if( $(this).val()=="" ){
              $(this).css({border:"1px solid red"}) // style for input
              $(this).parent().find("p").css({color:"red"}) // style for p
          }
      })
      $(".contact-form form .field input").keydown(function(){  // contact form
        $(this).css({border:"1px solid #A9A9A9"}) // style for input
        $(this).parent().find("p").css({color:"#8c8c8c"}) // style for p
      })


    }) // end main function

   }
    // jquery code
    render(){
        return(
            <div className="contact">
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
      <li className="nav-item ">
           <Link className="nav-link" to ="/portfolio">portfolio</Link>
      </li>
      <li className="nav-item ">
           <Link className="nav-link" to="/services">services</Link>
      </li>
      <li className="nav-item ">
           <Link className="nav-link" to="/blogs">blogs</Link>
      </li>
      <li className="nav-item active">
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
            <p>contact</p>
              </div>

      <div className="map ">
          <div className="container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.7226002556968!2d0.13054518420398772!3d52.21208837975706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8709335df1657%3A0x1b1396adce6a5318!2sMidsummer%20House!5e0!3m2!1sar!2seg!4v1587742338467!5m2!1sar!2seg" width="400" height="300"
          >   </iframe>
       </div>
      </div>

      <div className="contact-info main-box">
      <div className="container">
          <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="item">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <div className="info">
                <h3> address </h3>
                <p>121 king street melbourne vic 3000 australia</p>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="item">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <div className="info">
                <h3> phone </h3>
                <p>+61 7 8430 4625</p>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="item">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <div className="info">
                <h3> email </h3>
                <p>proxel@info.com</p>
                </div>
                </div>
              </div>
              </div>
             </div>
       </div> 


 <div className="contact-form main-box">
   <div className="container"> 
      <h2 className="heading"> say hello</h2>
       <form>
       <div className="row">
           <div className="col-md-4 col-sm-6">
               <div className="field">
                   <p> name *</p>
                   <input type="text" required />
                   </div>
               </div>

               <div className="col-md-4 col-sm-6">
               <div className="field">
                   <p> email *</p>
                   <input type="email" required />
                   </div>
               </div>

               <div className="col-md-4 col-sm-12">
               <div className="field">
                   <p> subject *</p>
                   <input type="text" required />
                   </div>
               </div>

               <div className="col-md-12 col-sm-12">
               <div className="field">
                   <p> message *</p>
                   <textarea/>
                   </div>
               </div>

               <div className="col-md-12 col-sm-12">
               <div className="button">
         <input className="my-button" type="submit" value="send message" />
                   </div>
                   </div>

           </div>
        </form>
     </div>
     </div>

                </div> // end blogs
        )
    }
}
export default Contact;