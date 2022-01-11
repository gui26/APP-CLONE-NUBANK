import React, { useState } from 'react';

import {
  View,
  Image,
  Text,
  Button
} from 'react-native';
import { Background } from '../../componentes/background';
import  Nulogo from '../../../assets/image6.png';
import  MasterCard from '../../../assets/image8.png';
import GearSix from '../../../assets/GearSix.png'; 
import Wallet from '../../../assets/Wallet.png'; 


import { styles } from './styles';
import { Tabs2 } from '../../componentes/tabs2';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Indicar(){
  const [counter, setCounter] = useState(0);

  function Adicionar(){
    setCounter(counter +15,99);
  }

  function RetirarValor(){
    setCounter(counter -15,99);
  }
  return (
    <Background>
        <View style={styles.container}>
         <View style={styles.header}>
             <View>
             <Image 
             source={Nulogo}
             style={styles.image}
            

            />
            </View>

            <View style={styles.imageb}>
             <Image 
             source={GearSix}
             style={styles.image2}
             />
            </View>
        </View>



        <View style={styles.card}>
        <View style={styles.card2}>
        <View></View>
        <View style={styles.imageCard}>
             <Image 
             source={MasterCard}
             style={styles.image3}
             />
            </View>
        </View>
        <Text style={styles.txt}>Guilherme</Text>
        </View>





        <View style={styles.card3}>
           <View style={styles.card4}>
            <View>
               <Text style={styles.saldo}>Saldo Disponível</Text>

            </View>
              <View style={styles.imageCard2}>
                 <Image 
                 source={Wallet}
                 style={styles.wallet}
                 />
                 </View>
           </View>
           <Text style={styles.saldo2}>R$ {counter}</Text>
           
              <TouchableOpacity 
           style={styles.retirar}
           onPress={Adicionar}>
            <Text> Adicionar</Text>  
               </TouchableOpacity>

           <TouchableOpacity 
           style={styles.retirar}
           onPress={RetirarValor}>
            <Text> Retirar</Text>  
               </TouchableOpacity>
          

           
        </View>



        <View style={styles.ajuda}> 
        <Text style={styles.ajuda2}>Do que precisa ?</Text>
      </View>
     
        
     
     
     
     <View style={styles.menu}> 
         <Tabs2 />
     </View>
     
  
        
        
        </View>
    </Background>
  );
}