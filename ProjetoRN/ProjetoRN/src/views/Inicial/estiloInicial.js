import { StyleSheet } from 'react-native';

const estiloInicial =  StyleSheet.create ({

    fundo: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    borda: {
        backgroundColor: '#483D8B',
        width: '80%',
        height: '40',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: "bold",
        textAlign: 'center',
        padding: 10,
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 10,
        height: 40,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#191970',
        justifyContent: "center",
        alignItems: "center",
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
})
export default estiloInicial;