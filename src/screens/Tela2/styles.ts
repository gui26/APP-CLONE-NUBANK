import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1F1F1F',
  },
  header:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:24,
      marginTop:getStatusBarHeight() + 20,
      
  },
  title:{
      marginTop:36,
      paddingHorizontal:24
  },
  subtitle:{
      fontSize:24,
      color:theme.colors.heading,
      fontWeight:'500'
  },
  input: {
    color:'#ACACAC',
    backgroundColor:'#1E1E1E',
    
    width:354,
    borderRadius:10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: theme.colors.overlay,
    padding: 10,
  },
  gradient:{
      flex:1
  },
  card:{
      width:328,
      height:189,
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:10,
      borderRadius:150
  },
  woman:{
      transform:[{
          translateY:-165
      }],
      marginLeft:150
  },
  price:{
      fontSize:28,
      color:'white',
      fontWeight:'700',
      marginLeft:10,
      zIndex:2,
      marginTop:10

  },
  price2:{
    fontSize:21,
    color:'white',
    fontWeight:'700',
    marginLeft:10,
    zIndex:2,
    transform:[{
        translateY:-20
    }]

},
footer:{
    
   
    width:'100%',
    height:91,
    backgroundColor:'#262626',
    marginTop:30,
    paddingHorizontal:24
},
footer2:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:91,
    backgroundColor:'#262626',
    paddingHorizontal:24
},

iconHomer:{
    width:45,
    height:45,
    backgroundColor:'#4596DC',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
},
explore:{
    backgroundColor:'white',
    width:90,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    marginLeft:10
},

explore2:{
    color:'#5C9AC5',
    fontWeight:'700'
}
});