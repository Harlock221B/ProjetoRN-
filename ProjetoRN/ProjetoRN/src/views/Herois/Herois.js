import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import estiloHerois from './estiloHerois';
import Lista from '../../views/Lista/Lista';

function Herois( ) {

    const [herois , setHerois] = useState ([
        {
            id: '1',
            titulo: 'Capitão América',
            descricao: 'Capitão América é um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics. Criado por Joe Simon e Jack Kirby, o primeiro personagem apareceu em Captain America Comics # 1 da Timely Comics, antecessora da Marvel Comics.',
            autorp: 'Christopher Robert Evans',
            anos: '2011',
            foto: require ('../../../assets/imagens/f2.jpg'),
        },
        {
            id: '2',
            titulo: 'Homem de Ferro',
            descricao: 'Homem de Ferro é um personagem fictício dos quadrinhos publicados pela Marvel Comics. Sua identidade verdadeira é a do empresário e bilionário Tony Stark, que usa armaduras de alta tecnologia no combate ao crime.',
            autorp: 'Robert Downey Jr.',
            anos: '2008',
            foto: require ('../../../assets/imagens/f3.jpg'),
        },
        {
            id: '3',
            titulo: 'Homem Aranha',
            descricao: 'O Homem-Aranha o alter-ego de Peter Parker, é um personagem fictício, um super-herói que aparece nas revistas em quadrinhos americanas publicadas pela Marvel Comics, existindo no seu universo partilhado.',
            autorp: 'Tom Holland, Andrew Garfield e Toby Maguire',
            anos: '2002',
            foto: require ('../../../assets/imagens/f4.jpg'),
        },
    ])
    return (
        
        <View style={estiloHerois.container}>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={herois}
            renderItem = {({item}) => <Lista data={item}/>}
            />
        </View>
    )
}
export default Herois;