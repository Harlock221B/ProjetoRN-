import React from 'react';
import { Text, View, Image } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil( {navigation} ) {

    return (
        
        <View style={estiloPerfil.fotoContainer}>
            <Image style={estiloPerfil.foto} source = {require('../../../assets/imagens/f5.jpg')} />
            <Text style={estiloPerfil.nome}>Gabriel Ferreira</Text>
            <Text style={estiloPerfil.i}>Sala: 3°MI-A</Text>
            <Text style={estiloPerfil.i}>Lado: A</Text>
            <Text style={estiloPerfil.i}>Matéria: Tecnologia Mobile</Text>
            <Text style={estiloPerfil.i}>Atividade: App de navegação</Text>
        </View>
    )
}
export default Perfil;