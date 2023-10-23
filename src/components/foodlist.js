import {View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'

export default function RenderItens({item}){

const navigation = useNavigation()
function handleFood(){
 
        console.log(item)
        navigation.navigate('about', {item :item})



    
}

    return(
        
            
              <TouchableOpacity activeOpacity={0.8} style={styles.container}  onPress={handleFood}>
     <Image style={styles.cover}
   src={item.cover}
     />
     <View style={styles.information}>
<Text style={styles.nameFood}>{item.name}</Text>
<Text style={styles.description}>{item.total_ingredients} ingredientes | {item.time} min</Text>

     </View>
     <LinearGradient
     style={styles.gradient}
     colors={['transparent','rgba(0,0,0, 0.70)' ,'rgba(0,0,0,0.90)']}
     />
    
              </TouchableOpacity>
            
          
         
    )
}
const styles = StyleSheet.create({
container:{
    marginBottom:14,
    marginTop:14,
    
},
cover:{
    width: '100%',
    height:200,
    borderRadius:14,
    
    
},
information:{
    position:'absolute',
    marginTop:140,
    color:'white',
    left:14,
    zIndex:100
   
},
nameFood:{
    fontSize:18,
    color:'white',
    fontWeight:'700',
    marginBottom:9
    
},
description:{
    color:'white',
    fontSize: 14,
    
},
gradient:{
left:0,
right:0,
bottom:0,
position:'absolute',
height:'55%',
width:'100%',
zIndex:99,
backgroundColor:'transparent',
borderBottomRightRadius:8,
borderBottomLeftRadius:8


}
})