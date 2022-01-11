import React from 'react';

import {
 Image,
  View,
  Text,
  SafeAreaView,
  Animated
  
} from 'react-native';
import iconmenu from  '../../../assets/img/iconmenu.png';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { theme } from '../../../Global/theme';
import woman from '../../../assets/img/woman.png';
import { Back } from '../../componentes/Back';
import { Section } from '../../componentes/section';
import { Lista2 } from '../../componentes/Lista2';

export function Tela2(){
    const [text, onChangeText] = React.useState("Search Headphones");
   
 
    const { secondary70, secondary80} = theme.colors;
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View>
                <Image
                source={iconmenu}
                style={{width:24, height:24,}}/>

            </View>
          
            <View>
            <Ionicons 
            name="md-notifications-outline" 
            size={24} 
            color="white" />
            </View>
             
          
        </View>
             <View style={styles.title}>
                <Text style={styles.subtitle}>Discover You Best</Text>
            </View>
            <View>
                <TextInput 
                 style={styles.input}
                 onChangeText={onChangeText}
                 value={text}
                 placeholder="Search Headphones"
                 icon={<MaterialIcons name="search" size={24} color="white" />}
                
                />
            </View>
           

          
        <SafeAreaView>
            <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        >

                
                <View style={styles.card}>
                <Back>
                    <View>
                    <Text style={styles.price}>50% Off{'\n'}</Text>
                    <Text style={styles.price2}>
                          Wireless{'\n'}
                          Headphones
                      </Text>
                      <View style={styles.explore}>
                          <Text style={styles.explore2}>Explore Now</Text>
                      </View>
                        </View>


                    <View style={styles.woman}>
                        <Image
                        source={woman}
                       />


                    </View>

                    </Back>
                </View>


                <View style={styles.card}>
                <Back>
                    <View>
                    <Text style={styles.price}>50% Off{'\n'}</Text>
                    <Text style={styles.price2}>
                          Wireless{'\n'}
                          Headphones
                      </Text>
                      <View style={styles.explore}>
                          <Text style={styles.explore2}>Explore Now</Text>
                      </View>
                        </View>


                    <View style={styles.woman}>
                        <Image
                        source={woman}
                       />


                    </View>

                    </Back>
                </View>



                <View style={styles.card}>
                <Back>
                    <View>
                    <Text style={styles.price}>50% Off{'\n'}</Text>
                    <Text style={styles.price2}>
                          Wireless{'\n'}
                          Headphones
                      </Text>
                      <View style={styles.explore}>
                          <Text style={styles.explore2}>Explore Now</Text>
                      </View>
                        </View>


                    <View style={styles.woman}>
                        <Image
                        source={woman}
                       />


                    </View>

                    </Back>
                </View>



                <View style={styles.card}>
                <Back>
                    <View>
                    <Text style={styles.price}>50% Off{'\n'}</Text>
                    <Text style={styles.price2}>
                          Wireless{'\n'}
                          Headphones
                      </Text>
                      <View style={styles.explore}>
                          <Text style={styles.explore2}>Explore Now</Text>
                      </View>
                        </View>


                    <View style={styles.woman}>
                        <Image
                        source={woman}
                       />


                    </View>

                    </Back>
                </View>



               
                

                
            </ScrollView>
        </SafeAreaView>

        <Section/>
        <Lista2 />

        <View style={styles.footer}>
            <View style={styles.footer2}>
            <View style={styles.iconHomer}>
                <Ionicons 
                name="md-home-outline" 
                size={24} 
                color="white" />
            </View>
            
            <View>
                <AntDesign 
                name="hearto" 
                size={24} 
                color="white" />
                </View>
           
            <View>
                <AntDesign 
                name="shoppingcart" 
                size={24} 
                color='white' />
                </View>

            <View>
                <Ionicons 
                name="person-outline" 
                size={24} 
                color='white'/>
                </View>
         </View>
            
         </View>
    </View>
  );
}