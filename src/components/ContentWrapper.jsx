import React from 'react'

import ContentRowTop from './ContentRowTop'
import Products from './Products'
import Footer from './Footer'
import User from './User'


function ContentWrapper() {
    return (
     
			<>			{/* <!-- Main Content --> */}
			<div id="content">


				{/* <!-- Content Row Top --> */}
				<ContentRowTop />
				{/* <!--End Content Row Top--> */}
		
				<User/>
				<Products />

			</div>
			{/* <!-- End of MainContent --> */}
			{/* <!-- Footer --> */}
			<Footer />
			{/* <!-- End of Footer --> */}

			</>

		
    )
}

export default React.memo(ContentWrapper)
