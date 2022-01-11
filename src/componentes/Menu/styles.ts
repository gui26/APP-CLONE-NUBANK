import { StyleSheet } from 'react-native';
import { theme } from '../../../Global/theme';
import { Animated } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex:1
    
  },
  
     menu:{
         
          justifyContent:'center',
          paddingHorizontal:24,
          marginTop:270
      },
      item1:{
          flexDirection:'row',
          marginVertical:5,
          alignItems:'center',
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.overlay,
          
      },
      txtitems:{
          color:"white",
          marginLeft:25,
          paddingBottom:5
      },
      itens:{
          marginBottom:10

      },
      icon:{
          marginBottom:10
      },
      sair:{
          textAlign:'center',
          color:"white",
          fontSize:15,
          fontWeight:'700'
      },
      but:{
          marginTop:5,
          backgroundColor:theme.colors.overlay,
          height:40,
          justifyContent:'center',
          borderRadius:5
      }
      
});