import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1F1F1F',
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:24,
    alignItems:'center',
    marginTop:getStatusBarHeight() + 20,
},

cart:{
color:'white',
fontSize:25,
fontWeight:'700'
},
});