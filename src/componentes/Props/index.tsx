import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';


type dados ={
    name: string,
    idade:number
}


export function Props(dados){
  return (
    <View style={styles.container}>
          <Text> {dados.idade}</Text>
          <Text> {dados.name}</Text>
    </View>
  );
}