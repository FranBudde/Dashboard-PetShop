import React from 'react'

import productService from '../services/product'



//Importar nuestro componente
import ProductsList from './ProductsList'

class Products extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        fetch('http://localhost:3030/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState({ products: data.products })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">All the products in the Database</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map((product, index) => {
                                            return <ProductsList  {...product} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Products
