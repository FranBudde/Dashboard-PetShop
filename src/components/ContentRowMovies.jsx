import React from 'react';

import SmallCard from './SmallCard'

import productService from '../services/product'
import userService from '../services/user'


function ContentRowMovies() {
    const [products, setProducts] = React.useState([])
    const [users, setUsers] = React.useState([])
    const [cards, setCards] = React.useState([
        {
            title: 'Products in Data Base',
            color: 'primary',
            quantity: 0,
            icon: 'fa-film',
            slug: 'products'
        },
        {
            title: 'Categoria Products in Data Base',
            color: 'success',
            quantity: 0,
            icon: 'fa-award',
            slug: 'categories'
        },
        {
            title: 'User in Data Base',
            color: 'warning',
            quantity: 0,
            icon: 'fa-user',
            slug: 'users'
        }
    ])

    React.useEffect(() => {
        async function getData() {
            const productsResponse = await productService.get()
            const usersResponse = await userService.get()
            setProducts(productsResponse.products)
            // Cambiar cuando se implemente servicio de usuarios
            setUsers(usersResponse.products)

            setCards(values => {
                return values.map(element => {
                    let totalCategories = 0
                    // Esto no se debe hacer el api debe devolver un array de objetos o un objeto pero cada key debeser la descripcion de la categoria
                    Object.keys(productsResponse.countByCategory).forEach((key) => {
                        totalCategories += productsResponse.countByCategory[key]
                    })
                    element.quantity = element.slug === 'products' ? productsResponse.count : element.quantity
                    element.quantity = element.slug === 'users' ? usersResponse.count : element.quantity
                    element.quantity = element.slug === 'categories' ? totalCategories : element.quantity
                    return element
                })
            })
        }
        getData()
    }, [])

    console.log(getData());

    return (
        <div className="row">
            {cards.map((card, key) =>
                <SmallCard key={key} color={card.color} title={card.title} quantity={card.quantity} icon={card.icon} />
            )}
        </div>
    )
}

export default ContentRowMovies