import { StyleSheet } from 'react-native';
import { theme } from '../../../Global/theme';
import { Animated } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width:"100%"
  },
 
      card:{
        flex:1,
         maxHeight:400,
        

      },

      menu:{
          height:100,
          transform: [{ translateY: -120}]
          
      },
      icon:{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:20,
          marginTop:15,
          alignItems:'center'

      },
      saldo:{
          flex:1,
          paddingHorizontal:24,
          justifyContent:'center'

      },
      saldo2:{
          fontSize:13,
          color: theme.colors.highlight,
          fontWeight:'700'
      },

      saldo3:{
          fontSize:32,  
      },
      footer:{
          backgroundColor:theme.colors.secondary90,
          alignItems:'center',
          justifyContent:'center',
          paddingHorizontal:30,
          textAlign:'center',
          borderRadius:4,

      },
      footerT:{
          fontSize:13,
          color:'#333'
      },
      tabs:{
          
          transform: [{ translateY: -140}]
      },
      qrcode:{
          marginTop:5,
          justifyContent:'center',
          alignItems:'center',
          transform: [{ translateY: 70}]
       
      },
    
      item1:{
          flexDirection:'row',
          alignItems:'center',
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.overlay,
          
      },
      txtitems:{
          marginLeft:25,
      },
     
    
      cc:{
          marginTop:0,
      },
      headerr:{
          marginTop:100
      },
      card3:{
          transform: [{ translateY: -150}]
      }
});