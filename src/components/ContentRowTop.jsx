import React from 'react'

import ContentRowMovies from './ContentRowInfo'
import LastProductInDb from './LastProductInDb'
import User from './User'

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">DashBoar del <a href="http://localhost:3030/" target="_blank" className='links'>Petshop</a> </h1> 
            </div>

            {/* <!-- Content Row Movies--> */}
            <ContentRowMovies />
            {/* <!-- End movies in Data Base --> */}


            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Movie in DB --> */}
                <LastProductInDb />
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                <User/>
            </div>
        </div>
    )
}

export default React.memo(ContentRowTop)
