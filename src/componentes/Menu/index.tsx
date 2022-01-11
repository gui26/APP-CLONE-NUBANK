import React from 'react';

import {
  View,
  Text,
  Animated
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Menu({ translateY }){
  return (
    <Animated.View> 
    <View style={styles.menu}>

                  <View style={styles.itens}>
                  
                     <View style={styles.item1}>
                        <MaterialIcons style={styles.icon} name="contact-support" size={18} color="white" />
                        <Text style={styles.txtitems}>Me ajuda </Text>
                     </View>


                     <View style={styles.item1}>
                     <Ionicons  style={styles.icon} name="person-outline" size={18} color="white" />
                        <Text style={styles.txtitems}>Perfil</Text>
                     </View>



                     <View style={styles.item1}>
                        <FontAwesome5  style={styles.icon} name="credit-card" size={18} color="white" />
                        <Text style={styles.txtitems}>Configurar Cartão</Text>
                     </View>



                     <View style={styles.item1}>
                     <Ionicons style={styles.icon}  name="phone-portrait-sharp" size={18} color="white" />
                        <Text style={styles.txtitems}>Configurações do App</Text>
                     </View>



                     

         <TouchableOpacity style={styles.but}>
          <Text style={styles.sair}>Sair da conta</Text>
        </TouchableOpacity>


                  </View>
            </View>
            </Animated.View>
  );
}