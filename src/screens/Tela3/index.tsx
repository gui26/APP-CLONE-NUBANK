import React, {useState} from 'react';

import {
 Image,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import fone2 from  '../../../assets/img/fone2.png';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import {  Badge, CheckBox, Icon, } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import { styles } from './styles';
import { theme } from '../../../Global/theme';
import { color } from 'react-native-elements/dist/helpers';
import { Tela4 } from '../Tela4';


export function Tela3(){
    const [text, onChangeText] = React.useState("Search Headphones");
    
    
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);

    const[like, setLike]= useState(false);
 
    const { secondary70, secondary80} = theme.colors;

    const navigation = useNavigation();
    
    
    function handleGoBack (){
         navigation.goBack();
      }

    function Cart(){
        navigation.navigate(Tela4)
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
          
            <View>
            <Ionicons name="md-cart-outline" size={26} color="white" />
            <Badge
            status='error'
            containerStyle={{ position: 'relative', top: -11, right: -5 }}
            value='2+'
             
            />
            </View>
             
          
        </View>


        



        <View style={styles.img}>
            <Image 
            source={fone2}
            style={{width:350, height:280}}
            />

        </View>
      

               
                
        <View style={styles.info}>
        
                   


            <View style={styles.Conpo1}>
                <View>
                    <Text style={styles.title1}>Sony ASR-48 </Text>
                    <View style={styles.titles}>
                    <Text style={styles.subtitle1}>R$129.00</Text>
                    <Text style={styles.subtitle2}>R$89.00</Text>
                    </View>

                    <View style={styles.star}>
                    <Text style={styles.subtitle3}>4.4</Text>
                    <FontAwesome name="star" size={17} color="#F8C751"  style={{marginLeft:5}}/>
                    </View>
               </View>
               
                <View style={styles.like}>
                  
                 <CheckBox
                        
                        checkedIcon={
                            <AntDesign 
                            name="heart" 
                            size={30} 
                            color="red"/>
                          
                        }
                        uncheckedIcon={
                            
                            <AntDesign 
                            name="hearto" 
                            size={30} 
                            color="gray"
                            />
                        }
                        checked={like}
                        onPress={() => setLike(!like)}
                    />
                </View>
                
             </View>


             <View style={styles.colors}>
             <Text style={styles.titlecolors}>Colors</Text>
                <View style={styles.iconChecked}>
                
                 <View style={styles.check1}>
                 <CheckBox
                        
                        checkedIcon={
                        <Icon
                            name="radio-button-checked"
                            type="material"
                            color="#FF0000"
                            size={25}
                            iconStyle={{ marginRight: 1 }}
                        />
                        }
                        uncheckedIcon={
                        <Icon
                            name="circle"
                            type="material"
                            color="#FF0000"
                            size={25}
                            iconStyle={{ marginRight: 1 }}
                        />
                        }
                        checked={check1}
                        onPress={() => setCheck1(!check1)}
                    />
                </View>
  

                <View style={styles.check2}>
                 <CheckBox
                        
                        checkedIcon={
                        <Icon
                            name="radio-button-checked"
                            type="material"
                            color="#FF7F00"
                            size={25}
                            iconStyle={{ marginRight: 1 }}
                        />
                        }
                        uncheckedIcon={
                        <Icon
                            name="circle"
                            type="material"
                            color="#FF7F00"
                            size={25}
                            iconStyle={{ marginRight: 1 }}
                        />
                        }
                        checked={check2}
                        onPress={() => setCheck2(!check2)}
                    />
                </View>


                <View style={styles.check3}>
                 <CheckBox
                        
                        checkedIcon={
                        <Icon
                            name="radio-button-checked"
                            type="material"
                            color="#F589AB"
                            size={25}
                            iconStyle={{ marginRight: 1 }}
                        />
                        }
                        uncheckedIcon={
                        <Icon
                            name="circle"
                            type="material"
                            color="#F589AB"
                            size={25}
                            iconStyle={{ marginRight: 1 }}
                        />
                        }
                        checked={check3}
                        onPress={() => setCheck3(!check3)}
                    />
                </View>


                <View style={styles.check4}>
                 <CheckBox
                        
                        checkedIcon={
                        <Icon
                            name="radio-button-checked"
                            type="material"
                            color="white"
                            size={25}
                            iconStyle={{ marginRight: 1}}
                        />
                        }
                        uncheckedIcon={
                        <Icon
                            name="circle"
                            type="material"
                            color="white"
                            size={25}
                            iconStyle={{ marginRight: 1 }}
                        />
                        }
                        checked={check4}
                        onPress={() => setCheck4(!check4)}
                    />
                </View>



               </View>
             </View>
                  <View style={styles.descripition}>
                    <Text style={styles.descripitionTitle}>Product Details</Text>
                    <Text style={styles.descripitionsubTitle}>Sony ASR-48 True Wireless headphone offer up to 6 hours of use with an additional 9 hours in the included charging case. Voice assista...Read More</Text>
                    
                    <View style={styles.touch}>
                     <TouchableOpacity 
                     onPress={Cart}>
                         <View style={styles.cart}>
                             <Text  style={styles.carttext}>Add to Cart</Text>
                         </View>
                        
                     </TouchableOpacity>

                     <TouchableOpacity>
                     <View style={styles.saibamais}>
                        <Text style={styles.buytext}>Buy Now</Text>
                        </View>
                     </TouchableOpacity>
                     </View>
                  </View>
         </View>

         <View style={styles.animation}>
                        <LottieView
                           style={{
                               width:'auto',
                               height:400
                            
                            }}
                           source={require('./../../../anime.json')}
                           resizeMode='contain'
                           autoPlay
                           loop
                        />
                    </View>
            

</View>
    
  );
}