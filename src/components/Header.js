import React from 'react';
import { Row, Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Row>
                <Navbar className="deep-orange darken-2">
                    <li><NavLink to="/">Página Inicial</NavLink></li>
                    <li><NavLink to="/cadastrar-cliente">Crie sua conta de cliente</NavLink></li>
                </Navbar>
            </Row>
        )
    }
}

export default Header;