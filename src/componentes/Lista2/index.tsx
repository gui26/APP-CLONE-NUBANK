import React, { version } from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Fone2 from '../../../assets/img/fone2.png';
import Fone3 from '../../../assets/img/fone3.png';
import Fone4 from '../../../assets/img/fone4.png';
import Fone5 from '../../../assets/img/fone5.png';



import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Lista2(){
  const navigation = useNavigation();
  function DetailsRed(){
    navigation.navigate('Tela3')
  }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}>
       
        <View style={styles.itens}>

          <View style={styles.titleV}>
            <View>
            <Text style={styles.title}>Boat Ws54</Text>
            <Text style={styles.title}>4.5</Text>
            </View>

            <View>
            <Entypo name="heart-outlined" size={24} color="white" />
            </View>
            
            </View>
            <View style={styles.iconv}>
            <Image 
             source={Fone2} />
             </View>

             <View style={styles.titleV2}>
             <View>
            <Text style={styles.title3}>R$89.90</Text>
            <Text style={styles.title2}>R$54.00</Text>
            </View>
            <TouchableOpacity onPress={DetailsRed}>
            <AntDesign name="plussquare" size={28} color="#4596DC" backgroundColor='white' />
            </TouchableOpacity>
            
            </View>
        </View >


        <View style={styles.itens}>
          
          <View style={styles.titleV}>
            <View>
            <Text style={styles.title}>Boat Ws54</Text>
            <Text style={styles.title}>4.5</Text>
            </View>

            <View>
            <Entypo name="heart-outlined" size={24} color="white" />
            </View>
            
            </View>
            <View style={styles.fone3}>
            <Image 
             source={Fone3} />
             </View>

             <View style={styles.titlef3}>
             <View>
            <Text style={styles.title3}>R$89.90</Text>
            <Text style={styles.title2}>R$54.00</Text>
            </View>
            <TouchableOpacity>
            <AntDesign name="plussquare" size={28} color="#4596DC" backgroundColor='white' />
            </TouchableOpacity>
            
            </View>
        </View >


        <View style={styles.itens}>
          
          <View style={styles.titleV}>
            <View>
            <Text style={styles.title}>Boat Ws54</Text>
            <Text style={styles.title}>4.5</Text>
            </View>

            <View>
            <Entypo name="heart-outlined" size={24} color="white" />
            </View>
            
            </View>
            <View style={styles.fone4}>
            <Image 
             source={Fone4} />
             </View>

             <View style={styles.titlef4}>
             <View>
            <Text style={styles.title3}>R$89.90</Text>
            <Text style={styles.title2}>R$54.00</Text>
            </View>
            <TouchableOpacity>
            <AntDesign name="plussquare" size={28} color="#4596DC" backgroundColor='white' />
            </TouchableOpacity>
            
            </View>
        </View >


        <View style={styles.itens}>
          
          <View style={styles.titleV}>
            <View>
            <Text style={styles.title}>Boat Ws54</Text>
            <Text style={styles.title}>4.5</Text>
            </View>

            <View>
            <Entypo name="heart-outlined" size={24} color="white" />
            </View>
            
            </View>
            <View style={styles.fone5}>
            <Image 
             source={Fone5} />
             </View>

             <View style={styles.titlef5}>
             <View>
            <Text style={styles.title3}>R$89.90</Text>
            <Text style={styles.title2}>R$54.00</Text>
            </View>
            <TouchableOpacity>
            <AntDesign name="plussquare" size={28} color="#4596DC" backgroundColor='white' />
            </TouchableOpacity>
            
            </View>
        </View >

        <View style={styles.itens}>
          
          <View style={styles.titleV}>
            <View>
            <Text style={styles.title}>Boat Ws54</Text>
            <Text style={styles.title}>4.5</Text>
            </View>

            <View>
            <Entypo name="heart-outlined" size={24} color="white" />
            </View>
            
            </View>
            <View style={styles.iconv}>
            <Image 
             source={Fone2} />
             </View>

             <View style={styles.titleV2}>
             <View>
            <Text style={styles.title3}>R$89.90</Text>
            <Text style={styles.title2}>R$54.00</Text>
            </View>
            <TouchableOpacity>
            <AntDesign name="plussquare" size={28} color="#4596DC" backgroundColor='white' />
            </TouchableOpacity>
            
            </View>
        </View >

       
         
         

        
       
        




        </ScrollView>
</SafeAreaView>
  );
}