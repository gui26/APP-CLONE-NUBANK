import { StyleSheet } from 'react-native';
import { theme } from '../../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    width:"100%",
    marginTop:24,
    paddingLeft:20,
    paddingRight:10,
    
    
  },
  itens:{
      width:110,
      height:40,
      backgroundColor:'#262626',
      borderRadius:10,
      marginHorizontal:5,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
     
      
      
  },
  itens1:{
    width:110,
    height:40,
    backgroundColor:theme.colors.secondary80,
    borderRadius:10,
    marginHorizontal:5,
    alignItems:'center',
    justifyContent:'center'
},
  title:{
      color:"#FFF",
      fontSize:13
  },
  titleV:{
      marginBottom:10
  },
  iconv:{
    marginTop:10
},
Pix:{
  width:24,
  height:24
}
  
});