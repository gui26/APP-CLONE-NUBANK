import React from 'react';

import {
  Animated,
    Image,
    ImageBackground,
    Text,
  View
} from 'react-native';
import Fone from './../../../assets/img/fone1.png';
import { styles } from './styles';
import Bck1 from './../../../assets/img/bck1.png';
import { Tela2 } from '../Tela2';

import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
export function Ecommerce1(){

  const translateX = new Animated.Value(0);
  const animatedEvent = Animated.event(
      [
         {
             nativeEvent: {
               translationX: translateX,
             },
         },            
      ],
      { useNativeDriver: true },

    );
   function onHandlerState (event){
 
    }


    const navigation = useNavigation();

    function mudarTela(){
        navigation.navigate('Tela2');
    }
    
  return (
    <ImageBackground 
    source={Bck1}
    style={styles.container}>

      <View style={styles.title}>
          <Text style={styles.title2}>Wireless</Text>
          <Text style={styles.promoText}>Head {'\n'}
          Phones</Text>
    
      </View>  
       
       <View>
           <Image
           source={Fone}
           style={styles.img}
           resizeMethod='auto'
           
           />
       </View>
<TouchableOpacity style={styles.button}
onPress={mudarTela}>
    <Text style={styles.textb} >Arraste para o lado</Text>
    <Animated.View 
    style={{
      transform: [{
          translateX: translateX.interpolate({
            inputRange:[-50, 0, 50],
            outputRange: [-50, 0, 50],
            extrapolate: 'clamp',
          }),
      }],
  }}>
      <View style={styles.icon2}>
      <AntDesign 
       name="left" size={26} 
       color="black" />
       </View>
    </Animated.View>
    
</TouchableOpacity>
    </ImageBackground>
  );
}