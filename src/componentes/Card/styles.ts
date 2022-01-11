import { StyleSheet } from 'react-native';
import { theme } from '../../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card:{
    maxHeight:400,
    zIndex:5,

 },

 card2:{
     backgroundColor:'white',
     height:400,
     marginHorizontal:20,
     borderRadius:4,
     
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
     paddingVertical:15,
     paddingHorizontal:30,
     textAlign:'center',
     borderRadius:4,

 },
 footerT:{
     fontSize:13,
     color:'#333'
 },
});