import React from 'react'
import productService from '../services/product'

function ContentRowMovies() {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        async function getData() {
            const productsResponse = await productService.get()
            const lastProduct = products[products.length - 1].id;
            setProducts(lastProduct)
            console.log(lastProduct);
        }
        getData()
    }, [])
    return products;
}



function getImgProduct() {
    const [detailLastProduct, setProducts] = React.useState([])

    React.useEffect(() => {
        async function getData() {
            const productsResponse = await productService.getById(products)
            const imgProduct = productsResponse
            setProducts(imgProduct)
        }
        getData()
    }, [])
    return detailLastProduct
}
console.log(getImgProduct(detailLastProduct));

function LastMovieInDb() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src="assets/images/mandalorian.jpg" alt=" Star Wars - Mandalorian " />
                        <h1>{detailLastProduct}</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LastMovieInDb)