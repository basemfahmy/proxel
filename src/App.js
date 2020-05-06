import React, { Component } from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./components/home/home.js";
import About from "./components/about/about.js";
import Portfolio from "./components/portfolio/portfolio.js";
import Services from "./components/services/services.js";
import Blogs from "./components/blogs/blogs.js";
import Contact from "./components/contact/contact.js";
import Footer from "./components/footer/footer.js";
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path ="/portfolio" component={Portfolio}/>
      <Route path="/services" component={Services}/>
      <Route path="/blogs" component ={Blogs}/>
      <Route path="/contact" component={Contact}/>
        <Footer/>
        </div>
        </BrowserRouter>
    )
  }
}

export default App;
