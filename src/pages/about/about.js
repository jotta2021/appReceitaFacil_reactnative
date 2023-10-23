import {useRoute,useNavigation, Link} from '@react-navigation/native'
import {useLayoutEffect, useState} from 'react'
import {Ionicons,AntDesign,Feather} from '@expo/vector-icons'
import { Text,View ,Pressable, ScrollView,Image,StyleSheet, TouchableOpacity, Modal,Share} from 'react-native'
import Ingredients from '../../components/ingredients'
import PrepareFood from '../../components/prepareFood'
import Video from '../../components/video/video'
import {isFavorite,saveFavorites,removeItem,} from '../../utils/storage'


export default function About(){


    const [favorite,setFavorite] = useState(true)
const [visibleModal,setVisibleModal] =useState(false)
const navigation = useNavigation()
const route = useRoute()

   useLayoutEffect(()=> {

    async function FavoriteStatus(){
     const verifyFavorite = await isFavorite(route.params?.item)
       setFavorite(verifyFavorite)
       console.log(verifyFavorite)
           }
           

           FavoriteStatus();


navigation.setOptions({
title: route.params.item ? route.params?.item.name : 'Detalhes da receita',
headerRight : () => (

    <Pressable onPress={() => Like(route.params?.item)}>
{
    favorite? (

<Ionicons name='heart' size={28} color='red'/>   
    ): (
        
    <Ionicons name='heart-outline' size={28} color='red'/>    )
    
    
  
    
}

    
    </Pressable>

)

})



 }
   ,[navigation,route.params?.item,favorite])



  
function playVideo(){
    setVisibleModal(true)
}

 async function ShareCompart(){
    try{
await Share.share({
    url: route.params?.item.video,
    message:`receita: ${route.params?.item.name}\n Vi lá no app Receita fácil`
})


    } catch(error){
console.log(error)
    }
}

{


}
async function Like(item) {
    console.log(item);
    
    if (item && item.id) {
        console.log(item.id);
        console.log(favorite);

        if (favorite) {
            await removeItem(item.id);
            setFavorite(false);
            console.log(favorite);
        } else {
            await saveFavorites("@appreceitas", item);
            
            setFavorite(true);
            console.log(favorite);
        }
    } else {
        console.log('Item inválido ou sem ID.');
    }
}





    
    return(
        
        <ScrollView style={styles.container} 
        showsVerticalScrollIndicator='false'
        >
        

        <Pressable>
            <View style={styles.playIcon}> 
            <TouchableOpacity onPress={playVideo}>
                <AntDesign   name='playcircleo' size={60} color='white'/> 

            </TouchableOpacity>

            </View>
<Image  style={styles.cover} src={route.params?.item.cover} />
        
          
        </Pressable>
    <View style={styles.nameFood}>
<Text 
style={{fontSize:18,fontWeight:'700'}}
>{route.params.item.name}</Text>
<View style={{flexDirection:    'row',justifyContent:'space-between',marginEnd:15}}>
    <Text
style={{fontSize:18,marginBottom:24}}
>ingredientes ( {route.params?.item.total_ingredients}  )</Text>
<Pressable onPress={ShareCompart}>
   <Feather name='share-2' size={24} color='black'/> 
</Pressable>

</View>

    </View>

    <View>

    {

route.params?.item.ingredients.map((item => (
    <Ingredients item={item} key={item.id}/>
    
))) 
    }
    </View>
    <View>
<View style={styles.backgroundprepareText}>

   <Text style={styles.prepareText}>Modo de preparo</Text> 
   <Feather
   name='arrow-down'
   size={24}
   color='white'
   />


</View>


    </View>

    { route.params.item.instructions.map((item)=>(

        <PrepareFood item={item} key={item.id}/>
    ))}
    <Modal animationType='slide' visible={visibleModal}
    >

        <Video  
        CloseVideo={()=> {setVisibleModal(false)}}
        videoUrl = {route.params?.item.video}/>
    </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

container:{
   
marginTop: 20,
marginLeft: 14,
marginRight:14,
backgroundColor:'#F3F9FF'
},
cover:{
    width:'100%',
    height:200,
    borderRadius: 8
},
playIcon:{
    position:'absolute',
    zIndex:99,
top:0,
left:0,
right:0,
bottom:0,
alignItems:'center',
justifyContent:'center'
},
nameFood:{
    marginTop: 13,
    gap:8,
    
},
prepareText:{
    fontSize:18,
    color:'white',
    fontWeight:'700',
    marginStart:8
     
},
backgroundprepareText:{
    backgroundColor:'#4CBE6C',
    height:36,
    borderRadius:8,
alignItems:'center',
    marginTop:15,
      marginBottom:24,
    flexDirection:'row',
    gap:5,
  
}


})