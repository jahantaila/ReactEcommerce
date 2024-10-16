import React from 'react'
import Logo from "../assets/Library.svg"
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="row row_column"  style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Link href="/" >
                        <figure clLinkssName = "footer__logo">
                            <img src={Logo} className = "footer__logo--img" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/home" className = "footer__link">Home</Link>
                        <span className = "footer__link no-cursor">About</span>
                        <Link to="/books" className = "footer__link">Books</Link>
                        <Link to="/cart" className = "footer__link">Cart</Link>


                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 