import { StyleSheet } from 'react-native';
import { theme } from '../../../Global/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    justifyContent:'center',
    alignItems:'center'

  },
  image: {
    width: 44,
    height: 44,
    marginRight:10

},
title:{
    color:'#FFF',
    fontWeight:'700',
    fontSize:18
},
elem:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'

},
icon:{
    marginTop:0
}
});