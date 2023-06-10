import React from "react"

import usersService from '../services/user'
import UserList from './UserList'

class Users extends React.Component {
    state = {
        users: []
    }

    async componentDidMount() {
        const usersResponse = await usersService.get()
        const { data } = usersResponse
        try {
            if (data) {
                this.setState({ users: data })
            }

        } catch (error) {
            console.log(err)
        }



    }

    render() {
        return (
            <div>
                <h1 id="title_view_users">Listado de Usuarios existentes</h1>

                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Ver usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user, index) => {
                                return <UserList  {...user} key={index} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}



export default React.memo(Users)