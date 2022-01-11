import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme.colors.secondary80,
  },
  header:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:24,
      marginTop:getStatusBarHeight() + 20,
      
  },
  img:{
      marginTop:40,
      alignItems:'center'
  },
  info:{
      width:'100%',
      height:473,
      backgroundColor:'#1F1F1F',

  },
  Conpo1:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:24,
      paddingTop:24
  },
  titles:{
      flexDirection:'row'

  },

  title1:{
      color: 'white',
      fontSize:24,
      fontWeight:'bold'
  },
  subtitle1:{
      fontSize:18,
      color:'#585858',
      textDecorationLine:'line-through'
  },
  subtitle2:{
    fontSize:18,
    color:'white',
    marginLeft:10
  },
  subtitle3:{
    fontSize:18,
    color:'white',
    marginLeft:10
  },
  star:{
      flexDirection:'row',
      alignItems:'center'
  },
  colors:{
    alignItems:'baseline',
    paddingHorizontal:24,
    marginTop:30
  },
  iconChecked:{
    flexDirection:'row',
    alignItems:'center',
    transform:[{
      translateX:-37
    }]
  
    
  },
  check1:{
    transform:[{
      translateX:20
    }]
  },
  check2:{
    transform:[{
      translateX:0
    }]
  },
  check3:{
    transform:[{
      translateX:-20
    }]
  },
  check4:{
    transform:[{
      translateX:-35
    }]
  },
  titlecolors:{
    fontWeight:'500',
    fontSize:18,
    color:'white'
  },
  like:{
    marginTop:-12
  },
  descripition:{
    paddingHorizontal:24,
    marginTop:24
  },
  descripitionTitle:{
    color:'white',
    fontWeight:'700',
    fontSize:18
  },

  descripitionsubTitle:{
    color:'white',
    marginTop:10,
    fontSize:15
  },
  touch:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  cart:{
    width:165,
    height:64,
    borderWidth:1,
    borderColor:'#4A9CDC',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  saibamais:{
    width:165,
    height:64,
    borderWidth:1,
    borderColor:'#4A9CDC',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
    
  },
  carttext:{
    color:'white',
    fontWeight:'700'
  },
  buytext:{
    color:'white',
    fontWeight:'700'


  },
  animation:{
    
    position:'absolute',
    transform:[{
      translateX:50,
    }],

    

  }

  
 


});