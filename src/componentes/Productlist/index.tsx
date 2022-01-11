import React from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Productlist(){
 
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}>
       
        <RectButton 
        style={styles.itens}
        
        >
            <View style={styles.iconv}>
             <Ionicons 
             name="person-sharp" 
             size={24} 
             color="#FFF" />
             </View>

             <View style={styles.titleV}>
            <Text style={styles.title}>Indicar{'\n'}
            amigos</Text>
            </View>
        </RectButton >

        <View style={styles.itens}>
            <View style={styles.iconv}>
            <Entypo name="publish" size={24} color="white" />
             </View>

             <View style={styles.titleV}>
            <Text style={styles.title}>Cobrar</Text>
            </View>
        </View>

        <View style={styles.itens}>
            <View style={styles.iconv}>
            <AntDesign name="down" size={24} color="white" />
             </View>

             <View style={styles.titleV}>
            <Text style={styles.title}>Depositar</Text>
            </View>
        </View>

        <View style={styles.itens}>
            <View style={styles.iconv}>
            <AntDesign name="up" size={24} color="white" />
             </View>

             <View style={styles.titleV}>
            <Text style={styles.title}>Tranferir</Text>
            </View>
        </View>

         <View style={styles.itens}>
            <View style={styles.iconv}>
            <EvilIcons name="lock" size={37} color="white" />
             </View>

             <View style={styles.titleV}>
            <Text style={styles.title}>Bloquear{'\n'}
            cartão
            </Text>
            </View>
        </View>

        
       
        




        </ScrollView>
</SafeAreaView>
  );
}