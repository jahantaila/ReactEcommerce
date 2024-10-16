import React from 'react'

const Explore = () => {

    return ( 
        <section id="explore">
            <div className="container">
                <div className="row row_column" style = {{display: 'flex', flexDirection: 'column',  }}>
                    <h2>
                        Explore more <span className="purple">Books</span>
                    </h2>
                    <a href="/books" style = {{margin: "0 auto"}}>
                        <button className="btn">Explore Books</button>
                    </a> 
                </div>
            </div>
        </section>
    )
}

export default Explore; 