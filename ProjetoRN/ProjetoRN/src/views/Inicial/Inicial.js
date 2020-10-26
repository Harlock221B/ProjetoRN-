import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial ({navigation}) {

    const abrirHerois = () =>{
    navigation.navigate('Herois')        
    }
    const abrirPerfil = () =>{
    navigation.navigate('Perfil')        
    }

    return (
        <ImageBackground source={require('../../../assets/imagens/f1.jpg')} style={estiloInicial.fundo}>
        <View style={estiloInicial.container}>
            <View style = {estiloInicial.borda}>
                <Text style={estiloInicial.texto}>Heróis Vingadores</Text>
                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirHerois}>
                    <Text style={estiloInicial.botaoTexto}>Vingadores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirPerfil}>
                    <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ImageBackground>
    )
}
export default Inicial;