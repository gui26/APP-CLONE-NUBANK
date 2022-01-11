import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {Home} from './../../screens/home';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Indicar } from "../../screens/Indicar";
import { Ecommerce1 } from "../../screens/Ecommerce1";
import { Tela2 } from "../../screens/Tela2";
import { Tela3 } from "../../screens/Tela3";
import { Tela4 } from "../../screens/Tela4";
import { Films } from "../../screens/Films";


const Stack= createNativeStackNavigator();
function Routes() {
return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Films">


       <Stack.Screen name="Films" component={Films}
            options={{
              title: 'Films',
              headerShown: false,
            }}/>
       
       
         <Stack.Screen name="Home" component={Home}
            options={{
              title: 'Home',
              headerShown: false,
            }}/>

           <Stack.Screen name="Indicar" component={Indicar}
            options={{
              title: 'Indicar',
              headerShown: false,
            }}/>
            
            <Stack.Screen name="Ecommerce1" component={Ecommerce1}
            options={{
              title: 'Ecommerce1',
              headerShown: false,
            }}/>


              <Stack.Screen name="Tela2" component={Tela2}
            options={{
              title: 'Tela2',
              headerShown: false,
            }}/>

            <Stack.Screen name="Tela3" component={Tela3}
            options={{
              title: 'Tela3',
              headerShown: false,
            }}/>


          <Stack.Screen name="Tela4" component={Tela4}
            options={{
              title: 'Tela4',
              headerShown: false,
            }}/>
         




           
       </Stack.Navigator>
    </NavigationContainer>


);
}
export default Routes;