import React, { Component } from "react";
import api from '../../services/api';
import './styles.css'

export default class Product extends Component {
    state = {
        product : {},
        isLoading: false
    }

    async componentDidMount(){
        this.setState({isLoading: true})
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data, isLoading:false})
    }

    render() {
        const {product} = this.state;

        return (
            <section>
                {
                    this.state.isLoading &&
                    <span>Aguarde, Carregando...</span>
                }
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

                    <p>
                        URL: <a href={product.url}>{product.url}</a>
                    </p>
                </div>
            </section>
            
        )
    }
}