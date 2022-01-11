import { StyleSheet } from 'react-native';
import { theme } from '../../../Global/theme';
import { Background } from '../../componentes/background';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header:{
       flexDirection: 'row',
       justifyContent:'space-between',
       paddingHorizontal:35,
       paddingTop:50,
       alignItems:'center',
       marginBottom:20


   
   
    
  },
  image:{
    width:93,
    height:93
  },
  image2:{
    width:27,
    height:27,
  },
    image3:{
      width:68,
      height:38
    },
    

  imageb:{
    backgroundColor:theme.colors.overlay,
    width:32,
    height:32,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:16
  },
  
  card:{
    backgroundColor: theme.colors.overlay,
    width:315,
    height:191,
    alignSelf:'center',
    borderRadius:20,
 },

 card3:{
  backgroundColor: theme.colors.overlay,
  width:315,
  height:121,
  alignSelf:'center',
  borderRadius:20,
  marginTop:19

 },
  card2:{
    
 justifyContent:'space-between',
    flexDirection: 'row',

  },
  card4:{
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems:'center'


  },
  saldo:{
      color:theme.colors.heading,
      fontWeight:'700',
      fontSize:14,
      paddingHorizontal:16,
      paddingTop:10
  },
  saldo2:{
    color:theme.colors.heading,
    fontWeight:'700',
    fontSize:36,
    paddingLeft:16,
    

  },
  imageCard:{
    paddingHorizontal:20,
    paddingTop:20
  },
  imageCard2:{
    paddingHorizontal:20,
    paddingTop:18,
    alignItems:'center'
  },

  txt:{
    alignContent:'flex-start',
    color: theme.colors.heading,
    fontSize:24,
    fontWeight:'bold',
    paddingLeft:16,
    paddingTop:80
  },
  menu:{
    marginTop:40
  },
  ajuda:{
    paddingHorizontal:35,
    paddingTop:31,
    
   

  },
  ajuda2:{
    color: theme.colors.heading,
    fontSize:14,
    fontWeight:'bold',
    marginLeft:8
  
  },
  retirar:{
    backgroundColor:'blue',
    width:'100%',
    height:50,
    marginTop:25,
    zIndex:5,
    position:'relative',
    alignItems:'center'
  }
 
});