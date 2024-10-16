
import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Book = ( {book}) => {

    

    return (
        <div className="book">
                            <Link to="">
                                <figure className="book__img--wrapper">
                                <img src='https://static.wikia.nocookie.net/the-most-random-site-ever/images/b/b9/DAA7A721-26B7-46A9-A49E-5B92863BD465.png/revision/latest?cb=20230120142031' alt="" className="book__img" /> 
                                </figure>
                            </Link>

                            <div className="book__title">
                                <Link className = "book__title--link">
                                    {book.title}
                                </Link>
                            </div>
                            <div className="book__ratings">

                            {
                                new Array(Math.floor(book.rating)).fill(0).map ( (_, index) => {
                                    return <FontAwesomeIcon icon = "star" key = {index} style = {{ color: "orange", }} />

                                })
                            }

                            {
                                !Number.isInteger(book.rating) && <FontAwesomeIcon icon = "star-half-alt"  style = {{ color: "orange", }} />
                            }


                            </div>

                            <div className="book__price">

                                {
                                    book.salePrice ?  <><span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                                    ${book.salePrice} </> : (
                                       <>${book.originalPrice }</> 
                                    )
                                }


                               
                            </div>
                        </div>
    )
}

export default Book; 