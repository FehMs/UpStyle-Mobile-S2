import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';

export default function Home(){

    const navigation = useNavigation();

    return(
      <View>
        <Navbar/>
        <View style={styles.banner}>
        <Text style={styles.bannerText}>ELEVE SEU ESTILO. IMPULSIONE SUA LOJA FEMININA COM RESULTADOS QUE BRILHAM.</Text>
      </View>
      <View style={styles.content}>
      <Image resizeMode='contain' source={require('../assets/Business.png')} style={styles.icon} />
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>APRIMORE</Text>
          <Text style={styles.cardText}>SUA EMPRESA</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
}
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    logo: {
      color: '#00400E',
      fontSize: 20,
      fontWeight: 'bold',
    },
    nav: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    navItem: {
      color: '#000',
      marginHorizontal: 10,
      fontSize: 10,
    },
    banner: {
      padding: 20,
      backgroundColor: '#00400E',
      justifyContent: 'center',
      alignItems: 'center',
      height: 160,
    },
    bannerText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
    },
    content: {
      height: 500,
      justifyContent: 'center',
    },
    icon:{
      opacity: 0.3,
      width: 500,
      height: 400,
      alignSelf: 'center'
    },
    card: {
      alignSelf: 'center',
      backgroundColor: '#00400E',
      position: 'absolute',
      padding: 12,
      borderRadius: 6,
    },
    cardText: {
      alignSelf: 'center',
      fontSize: 12,
      fontWeight:'bold',
      color: "white",
    }
  });