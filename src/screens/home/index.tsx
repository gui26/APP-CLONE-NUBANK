import React from 'react';

import {
    Text,
  View
} from 'react-native';
import { Animated } from 'react-native';
import { PanGestureHandler, State, TouchableOpacity} from 'react-native-gesture-handler';
import { Background } from '../../componentes/background';
import { Header } from '../../componentes/Header';
import { Tabs } from '../../componentes/tabs';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import QRCode from 'react-native-qrcode-svg';
import { Card } from '../../componentes/Card';
import { Menu } from '../../componentes/Menu';
export function Home(){
    const link2 = "https://rocketseat.com.br";

    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
      [
         {
             nativeEvent: {
               translationY: translateY,
             },
         },            
      ],
      { useNativeDriver: true },

    );
   function onHandlerState (event){
 
    }


   
  return (
      <Background>
       <View style={styles.container}>
         <View style={styles.headerr}>
        <Header/>
       </View> 



       <Animated.View  style ={{
           opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [ 0, 1]
       })
    }}>
           <View style={styles.qrcode}>
        
              <QRCode 
              value={link2}
              size={120}
              backgroundColor='transparent'
              color='white'
              
         
               />
           </View>
           </Animated.View>



           <Animated.View  style ={{
           opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [ 0, 1]
       })
    }}>
           <View style={styles.menu}>
              <Menu />
           </View>
           </Animated.View>
        



           <View style={styles.card3}>
            <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerState}>
           
           <Animated.View style={{
               transform: [{
                   translateY: translateY.interpolate({
                     inputRange:[-350, 0, 180],
                     outputRange: [-50, 0, 380],
                     extrapolate: 'clamp',
                   }),
               }],
           }}>
          <View style={styles.cc}>
             <Card/>
            </View>
           </Animated.View>
           </PanGestureHandler>
           </View>

       
              <Animated.View  style ={{
              
           opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp'
            })
          }}>
           <View style={styles.tabs}>
       <Tabs />
       </View>
       </Animated.View>
       </View>
     </Background>
  );
}