import React, { Component } from 'react';
import UserForm from './UserForm';


class User extends Component {

    render() {
        let list = [
            {
                name: "renata",
                email: "renata@gmail.com"
            },
            {
                name: "maykon",
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
                                    {item.name}
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
