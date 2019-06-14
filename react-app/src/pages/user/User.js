import React, { Component } from 'react';
import UserForm from './UserForm';


class User extends Component {

    render() {
        let list = [
            {
                nome: "renata",
                email: "renata@gmail.com"
            },
            {
                nome: "maykon",
                email: "maykon@gmail.com"
            }
        ]
        return (
            <div>
                <UserForm></UserForm>
                <table border="1px">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {list.map((item) => {
                        return <tbody>
                            <tr>
                                <td>
                                    {item.nome}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                            </tr>
                        </tbody>
                    })}
                </table>
            </div>
        );
    }
}

export default User;
