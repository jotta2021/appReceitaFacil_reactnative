import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Search from '../pages/search/search'

export default function StackRoutes(){

    const Stack = createNativeStackNavigator()
    return(

<Stack.Navigator>
<Stack.Screen
 name='home' 
 component={Home}
 options={{

  headerShown:false,


 }}
 
 />
<Stack.Screen
 name='about'
  component={About}
  options={{
title:'Detalhes da receita'
  
   }}

/>
<Stack.Screen
 name='search' 
 component={Search}
 options={{
    title:'Veja o que encontramos'
      
       }}/>

</Stack.Navigator>
    )
}