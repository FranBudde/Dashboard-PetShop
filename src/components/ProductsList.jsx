import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MovieList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.category}</td>
                <td><Link to={`/products/${props.id}`}>Detail</Link></td>
            </tr>
        </React.Fragment>
    )
}

MovieList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    detail: PropTypes.string
}

export default MovieList