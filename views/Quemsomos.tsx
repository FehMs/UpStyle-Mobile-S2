import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';

export default function Quemsomos(){
    return(
    <View>
        <Navbar/>
        <View style={styles.container}>
            <Text style={styles.titulo}>Quem Somos?</Text>
            <Text style={styles.texto}>Somos a ponte para o sucesso da sua marca de moda feminina. Com estratégias personalizadas e expertise incomparável, impulsionamos sua loja para o topo do mercado. Desde aumentar a visibilidade até otimizar as vendas, estamos comprometidos em tornar sua marca inesquecível. Confie na nossa equipe apaixonada e leve sua loja para novos patamares de sucesso!</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    texto: {
        marginTop: 20,
    },
  });