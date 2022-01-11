import React, { useState } from 'react';

import {
  Text,
  View,
  Image
} from 'react-native';
import axios from 'axios';
import { Props } from '../../componentes/Props';


import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Films(){

 const baseUrl = 'https://jsonplaceholder.typicode.com'


                  
const [products, setProducts] = useState({})
console.log(products)



const Two = async () =>{//Metodo corretos para usar no React Native
  axios({
    method: 'get',
    url: `${baseUrl}/users/1`,
  }).then((response) => {
    const a = JSON.stringify(response.data)
    setProducts(a)
    
    
  });
      

}

function transformar(){
  const c = JSON.parse(products)
  return c
}




const [dataAsync, setDataAsync] = useState(null)

//Usando async storage para armazenar dados locais no dispositivo
//recebe chave e valor


 //const Armazernar = async (chave, value) => { //function usada para armazebar dados que queremos 
 // try {
 //   await AsyncStorage.setItem(chave, value)//SetItem inserir um valor
 // } catch (e) {
    // saving error
 // }
//}

//const Buscar = async (chave )=> { //Metodo getItem busca um valor atraves da chave informar
 // try {
 //   const valor = await AsyncStorage.getItem(chave)
 //   setDataAsync(valor)
 // } catch (e) {
    
//  }
//}

//Armazernar( '01', 'JavaScrpit')// function aceita somente dados do tipo string
//Armazernar( '02', 'React Native')//Se receber recebermos objto teremos que conver JSON.stringfy()
//Armazernar( '03', 'Html')
//Armazernar( '04', 'Css')
//Armazernar( '05', 'Noje.js')

//Buscar('03')




//  const baseUrl ="https://www.omdbapi.com/?t=Iron+man&apikey=cfdd04bb"
 // const[dados, setDados]= useState()
  //const Uri:'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'
  
 
 // const GetFilms = () => {
  //  axios.get(baseUrl)
 //   .then( response =>{
      
  //    const ar = response.data
      
      //console.log(ar)
 //   })
 //   .catch(error => console.log(error))
 // }

 // GetFilms()



  return (
    
   <View style={styles.container}>
      <TouchableOpacity
      onPress={Two}
    >
        <Props name="guilherme"/>
        <Props idade={5}/>

        
      <Text>{dataAsync}</Text>
      

      </TouchableOpacity>
      
     

      

    </View>
  );
}