import React from 'react';

import {
  View,
  Image,
  Text
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import logoNubank from '../../../assets/Nubank_Logo.png';

export function Header(){
  return (
    <View style={styles.container}>
       
       <View style={styles.elem}>
       <Image 
       source={logoNubank }
       style={styles.image}
       resizeMode='center'
        />
        

        <Text style={styles.title}>Guilherme</Text>
        </View>

        <View style={styles.icon}>
        <AntDesign name="down" 
        size={15} 
        color="#FFF" />
        </View>
    </View>
  );
}