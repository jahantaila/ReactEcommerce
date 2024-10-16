import {library} from "@fortawesome/fontawesome-svg-core"
import {faBars, faStarHalfAlt, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar} from '@fortawesome/free-solid-svg-icons'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route,} from "react-router-dom"

import Home from "./pages/home"
import Books from "./pages/Books"
import {books} from "./data"

import BookInfo from "./pages/BookInfo"

library.add(faBars)
library.add(faShoppingCart)
library.add(faTimes, faBolt, faStarHalfAlt, faStar, faBookOpen, faTags)

function App() {
  return (

    <Router>
    <div className = "App"> 
        
          <Nav />

          <Route path = "/" exact component = {Home}/>
          <Route path = "/home" exact component = {Home}/>

          <Route path = "/books" render = {() => <Books books = {books} />}  />
          <Route path = "/books/1" render = { () => <BookInfo books = {books} />} />

          <Footer />
          </div>
    </Router>
   

  )
}

export default App;
