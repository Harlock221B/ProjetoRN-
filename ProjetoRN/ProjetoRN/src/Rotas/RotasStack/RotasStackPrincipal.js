import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Inicial from '../../views/Inicial/Inicial';
import Herois from '../../views/Herois/Herois';
import Perfil from '../../views/Perfil/Perfil';
import estiloRotaStack from './estiloRotaStack';

const Stack = createStackNavigator();
const RotasStackPrincipal = () => {
    
    return (
    <Stack.Navigator initialRouteName="Inicial" >
        <Stack.Screen name = "Inicial" component = {Inicial} options = {{
            cardStyle: estiloRotaStack.screenInicial,
        }}
        />

        <Stack.Screen
        name = "Herois" component = {Herois} options = {{
            cardStyle: estiloRotaStack.screenHerois,
        }}
        />

        <Stack.Screen name = "Perfil" component = {Perfil} options = {{
            cardStyle: estiloRotaStack.screenPerfil,
        }}
        />
    </Stack.Navigator>

);
}
export default RotasStackPrincipal;