import React, { Component } from 'react';

class List extends Component {

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
                <table border="1px">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                            {item.name}
                            </td>
                            <td>
                            {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default List;
