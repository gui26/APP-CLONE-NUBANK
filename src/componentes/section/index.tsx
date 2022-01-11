import React from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Section(){
  
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}>
       
        

        <View style={styles.itens1}>
           

             <View style={styles.titleV}>
            <Text style={styles.title}>All Product</Text>
            </View>
        </View>

        <View style={styles.itens}>
            

             <View style={styles.titleV}>
            <Text style={styles.title}>Popular</Text>
            </View>
        </View>

        <View style={styles.itens}>
            

             <View style={styles.titleV}>
            <Text style={styles.title}>Recent</Text>
            </View>
        </View>

         <View style={styles.itens}>
            
             <View style={styles.titleV}>
            <Text style={styles.title}>Novidades
            </Text>
            </View>
        </View>

        
       
        




        </ScrollView>
</SafeAreaView>
  );
}