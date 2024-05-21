import React from 'react';
import { Text, View, StyleSheet,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/AntDesign"

export default function Navbar(){

    const navigation = useNavigation();

    return(      
    <View>
      <View style={styles.header}>
        <Text style={styles.logo}>UP STYLE</Text>
        <View style={styles.nav}>
          <Text onPress={() => {navigation.navigate('Home')}} style={styles.navItem}>INÍCIO</Text>
          <Text onPress={() => {navigation.navigate('Quemsomos')}} style={styles.navItem}>QUEM SOMOS</Text>
          <Text onPress={() => {navigation.navigate('Consulta')}} style={styles.navItem}>CONSUTORIA</Text>
          <Icon onPress={() => {navigation.navigate('Login')}} name="user" size={30} color='#000'/>
        </View>
      </View>
      <View style={styles.line}></View>
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
    line: {
      backgroundColor: '#00400E',
      height: 1,
    },
  });