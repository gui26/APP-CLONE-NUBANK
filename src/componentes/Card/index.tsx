import React from 'react';

import {
  View,Text
} from 'react-native';
import { Animated } from 'react-native';
import { PanGestureHandler, State} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import { styles } from './styles';

export function Card(){
   
  return (
    <View style={styles.card
    }>
    
    <View style={styles.card2}>
            <View style={styles.icon}>
                    <View>
                <MaterialIcons name="attach-money" size={24} color="black" />
                </View>
               
                <View>
                <Ionicons name="eye-off" size={24} color="black" />
                </View>
            </View>


       <View style={styles.saldo}>
         <View>
             <Text style={styles.saldo2}>Saldo Disponivel</Text>
         </View>
         <View >
             <Text style={styles.saldo3}>R$ 165.225,00</Text>
         </View>
       </View>

      <View style={styles.footer}>
         <Text style={styles.footer}>Transferência de R$20,00 recebida de Guilherme Paulino de Souza hoje às 09:00h.</Text>
      </View>
    </View>
    
</View>
  );
}