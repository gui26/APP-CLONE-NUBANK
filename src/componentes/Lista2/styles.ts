import { StyleSheet } from 'react-native';
import { theme } from '../../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    width:"100%",
    marginTop:24,
    paddingLeft:10,
    paddingRight:10
  },
  itens:{
      width:157,
      height:230,
      backgroundColor:'#262626',
      borderRadius:15,
      marginHorizontal:5,
      justifyContent:'space-between',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      
      elevation: 12,
  },
  title:{
      color:"#FFF",
      fontSize:16,
      fontWeight:'700'
  },
  title2:{
    color:"#FFF",
    fontSize:16,
    fontWeight:'700'
},
title3:{
  color:"#515151",
  fontSize:13,
  fontWeight:'700',
  textDecorationLine:'line-through'
},
  titleV:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:5
  },
  titleV2:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    marginBottom:10,
    transform:[{
      translateY:-40
    }]
  },
  titlef3:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    marginBottom:10,
    
  },
  fone3:{
    marginLeft:20
  },
  titlef4:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    marginBottom:10,
    
  },
  titlef5:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    marginBottom:30,
    
  },
  fone5:{
    marginLeft:25,
  },
  iconv:{
    transform:[{
      translateY:-10
    }],
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
  
},

});