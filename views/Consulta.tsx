import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Consulta(){
  const [produtos, setProdutos] = useState('');
  const [meta, setMetas] = useState('');
  const [canais, setCanais] = useState('');
  const [desafio, setDesafio] = useState('');
  const [estilo, setEstilo] = useState('');
  const [meses, setMeses] = useState('');
  const [estrategia, setEstrategia] = useState('');


  const {perguntas} = useContext(AuthContext);


  return (
    <ScrollView>
      <Spinner/>
        <Navbar/>
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Quais roupas sua empresa vende?</Text>
                <TextInput
                style={styles.input}
                placeholder="Exemplo: (Camisetas, saias, shorts)"
                value={produtos}
                onChangeText={setProdutos}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Qual sua meta?</Text>
                <TextInput
                style={styles.input}
                placeholder="Exemplo: (Aumentar lucro, visibilidade)"
                value={meta}
                onChangeText={setMetas}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Quais canais de marketing a empresa utiliza atualmente?</Text>
                <TextInput
                style={styles.input}
                placeholder="Exemplo: (redes sociais, e-mail marketing)"
                value={canais}
                onChangeText={setCanais}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Quais os principais desafios da empresa ao promover seus produtos?</Text>
                <TextInput
                style={styles.input}
                placeholder="Exemplo: (Aumentar lucro, aumentar visibilidade)"
                value={desafio}
                onChangeText={setDesafio}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Qual o estilo de roupa sua marca tem como foco?</Text>
                <TextInput
                style={styles.input}
                placeholder="Exemplo: (Casual, Esportivo...)"
                value={estilo}
                onChangeText={setEstilo}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Quais meses sua empresa tem mais lucro?</Text>
                <TextInput
                style={styles.input}
                placeholder="Exemplo: (Janeiro, Fevereiro...)"
                value={meses}
                onChangeText={setMeses}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Sua empresa já utiliza estratégias de marketing? Se sim, quais?</Text>
                <View>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Descreva as estratégias de marketing"
                    value={estrategia}
                    onChangeText={setEstrategia}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {perguntas(produtos, meta, canais, desafio, estilo, meses, estrategia)}}>
                <Text style={styles.labelText}>Consultar</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
    padding: 20,
    backgroundColor: '#CCD8CE',
    borderRadius: 7,
  },
  formGroup: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    backgroundColor: '#fff'
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16
  },
  button: {
    backgroundColor: '#7f9f86',
    alignSelf: 'center',
    justifyContent:'center',
    width: 100,
    height: 45,
  },
  labelText: {
    alignSelf: 'center',
  },

});

