import React from 'react';
import { Row, Card } from 'react-materialize';
import * as services from '../services/deliveryServices';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            foto: '',
            descricao: '',
        }
    }

    componentDidMount() {
        services.getDadosRestaurante()
            .then(
                data => {
                    this.setState({
                        ...data
                    });
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            )
    }

    render() {
        return (
            <Card>
                <Row>
                    <img src={services.getApiUrl() + this.state.foto}
                        className="responsive-img" />
                </Row>
                <Row>
                    <strong>{this.state.nome}</strong>
                </Row>
                <Row>
                    <small>{this.state.descricao}</small>
                </Row>
            </Card>
        )
    }
}

export default Profile;