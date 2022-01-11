import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 


export function Tela4(){
    const navigation = useNavigation();
    
    
    function handleGoBack (){
         navigation.goBack();
      }
  return (
    <View style={styles.container}>
         
         <View style={styles.header}>
            <View>
            <AntDesign 
            name="left"
             size={24} 
             color="white" 
             onPress={handleGoBack}/>
            </View>

            <View >
                <Text style={styles.cart}>My Cart</Text>
            </View>

            <View>
            
            </View>
             
          
        </View>
      
    </View>
  );
}