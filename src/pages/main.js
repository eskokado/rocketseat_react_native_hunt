import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: "JSHunt",
    };

    componentDidMount() {
        this.loadProducts();
    }

    // modelo para o this enxergar a função
    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        console.log(docs);
    }

    render() {
        return (
            <View>
                <Text>Página Main</Text>
            </View>
        );
    }
}
