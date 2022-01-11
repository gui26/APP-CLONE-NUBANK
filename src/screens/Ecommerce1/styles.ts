import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#4596DC',
    justifyContent:'center'
  },
  img:{
      width:396,
      height:534,
      marginTop:70,
      marginBottom:20
  },
  button:{
    width:207,
    height:50,
    backgroundColor:'black',
    alignSelf:'center',
    alignItems:'center',
    paddingHorizontal:24,
    marginTop:24,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:25,
    

  },
  textb:{
      fontSize:14,
      fontWeight:'700',
      textAlign:'center',
      color:'white',
      alignItems:'center',
      paddingRight:25
  },
  promoText:{
    fontSize:65,
    fontWeight:'700',
    textAlign:'left',
    paddingLeft:24,
    color:'white',
    alignItems:'center',
    position: 'absolute',
    zIndex:5,
    transform:[{ translateY: 50}]
    

  },
  title2:{
    fontSize:30,
    fontWeight:'700',
    textAlign:'left',
    paddingLeft:24,
    color:'white',
    alignItems:'center',
    position: 'absolute',
    zIndex:5,
    transform:[{ translateY: 30}]

  },
  icon2:{
      backgroundColor:'white',
      width:50,
      height:50,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      transform: [{ translateX:-13}]
  }

});