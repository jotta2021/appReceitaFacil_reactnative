import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/home/home'
import Favorites from '../pages/favorites/favorites'
import {Ionicons} from '@expo/vector-icons'
import StackRoutes from './stack'

const Tab = createBottomTabNavigator()

export function Routes(){
    return(

<Tab.Navigator
screenOptions={{
headerShown:false,
tabBarShowLabel:false,
tabBarActiveTintColor:'#121212',
tabBarHideOnKeyboard:true,
tabBarStyle:{
    backgroundColor:'white',
    borderTopWidth:0,
    
}
}}



>
<Tab.Screen
 name='Home'
  component={StackRoutes}
options={{
tabBarIcon:({color,size,focused}) =>{

if(focused){
    return(
<Ionicons name='home' size={size} color='#121212' />
    ) 
} if (!focused){
    return(
<Ionicons name='home-outline' size={size} color={color} />
    )
}
}
}}
  
  />


<Tab.Screen 
name='Favorites'
 component={Favorites}
 options={{
tabBarIcon:({color,size,focused})=>{
if(focused){
    return(

      <Ionicons name='heart' size={size} color='red'/> ) 
} if(!focused){
    return(
      <Ionicons  name='heart-outline' size={size} />   
    )
    
}


}


 }}


 />
</Tab.Navigator>
    )
}