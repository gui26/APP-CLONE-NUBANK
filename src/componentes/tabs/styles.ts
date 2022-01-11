import { StyleSheet } from 'react-native';
import { theme } from '../../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    width:"100%",
    marginTop:24,
    paddingHorizontal:10
  },
  itens:{
      width:100,
      height:100,
      backgroundColor:theme.colors.overlay,
      borderRadius:3,
      marginHorizontal:5,
      alignItems:'center',
      justifyContent:'space-between'
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
  
});