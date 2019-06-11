import React, { Component } from 'react';
import User from './User';
import photo from './img/user.png'


class Renata extends Component {
    render() {
        return (
            <div>
                Eu sou um componente chamando Renata
                <User name= "Renata" photo={photo}></User>
                <User name= "Cris"></User>

            </div>
        );
    }
}

export default Renata;
