
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import Highlight from "./ui/Highlight";

const Highlights = () => {
    
    return (
        <section id = "highlights">

            <div className="container">
                <div className="row" style = { {display: 'flex'} }>
                    
                <Highlight 
                icon = {<FontAwesomeIcon icon = "bolt" />}
                 title = "Easy & Quick" 
                 para = "Get access to the book you purchase online in an instant!"   
                />

                <Highlight 
                icon = {<FontAwesomeIcon icon = "book-open" />}
                 title = "10,000 + Boooks" 
                 para = "Library has a wide range of books for any reader!"   
                />

                <Highlight 
                icon = {<FontAwesomeIcon icon = "tags" />}
                 title = "Affordable" 
                 para = "Low cost & inexpensive books so anyone can learn!"   
                />




                </div>
            </div>

        </section>
    )
}

export default Highlights; 