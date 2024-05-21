import React, {createContext, useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    const cadastro = (usuario, senha, cnpj, empresa, contato) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/cadastro`, {
            usuario: usuario,
            senha: senha,
            cnpj: cnpj,
            empresa: empresa,
            contato: contato

        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false)
            console.log(userInfo);
        }).catch(e => {
            console.log(`cadastro error ${e}`)
            setIsLoading(false);
        });
    }

    const perguntas = (produtos, meta, canais, desafio, estilo, meses, estrategia) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/perguntas`,{
            produtos : produtos,
            meta : meta,
            canais : canais,
            desafio : desafio,
            estilo : estilo,
            meses : meses,
            estrategia : estrategia
        }).then(res => {
            let questsInfo = res.data;
            AsyncStorage.setItem('questsInfo', JSON.stringify(questsInfo));
            console.log(questsInfo);
        }).catch(e => {
            console.log(`Erro ao inserir perguntas${e}`)
        });
    }


  return (
    <AuthContext.Provider value={{
        isLoading,
        userInfo,
        cadastro,
        perguntas,
    }}>{children}</AuthContext.Provider>
  );
};