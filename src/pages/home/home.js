
import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity,FlatList,ActivityIndicator,Image, Pressable} from 'react-native';
import Logo from '../../components/logo/logo';
import { TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons'; 
import{useEffect, useState} from 'react'
import api from '../../services/api';
import RenderItens from '../../components/foodlist';
import {useNavigation} from '@react-navigation/native'



export default function Home() {

 const[input,setInput] =useState('')
 const [foods,setFoods] = useState([])
 const [loading,setLoading] = useState(true)
 const navigation = useNavigation()


 

  useEffect(()=>{
 async function FecthApi(){
  await new Promise((resolve) => setTimeout(resolve, 2000));
const response = await api.get('/foods')

setFoods(response.data)
console.log(response.data)
setLoading(false);

}



FecthApi();


  },[])




  function HandleSearch(){
  if (!input)  return;
  
navigation.navigate('search',{name:input})
console.log(input)

  }

 

  return (
    <SafeAreaView style={styles.container}>
       <Logo/>
    <View style={styles.areaText}>
     
      <Text style={styles.p}>Encontre a receita </Text>
      <Text style={styles.p}>que combina com você</Text>
    </View>
    <View style={styles.form}>

<TextInput style={styles.input}
placeholder='Digite o nome da comida..'
value={input}
onChangeText={(e)=> setInput(e)}


/> 
<TouchableOpacity onPress={HandleSearch}>
  <Feather  name='search' color='#4CBE6C' size={24}/>
</TouchableOpacity>

    </View > 



    <View style={{flexDirection:'row',gap:10}}>

   
</View>
 
 
{
loading?(
 <ActivityIndicator 
 size='large'
 color='#4CBE6C'
 style={{marginTop:200}}/>
): (
     <FlatList showsVerticalScrollIndicator='false'
    data={foods}
    keyExtractor={(item)=> item.id.toString()}
    renderItem={({item}) => <RenderItens item={item}/>}
    
    
    
    />
)

}





 
  

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:36,
   flex:1,
   backgroundColor:'#F3F9FF',
   paddingStart:14,
   paddingEnd:14
   
  },
  areaText:{
marginTop:9,
marginBottom:19
  },
  
  p:{
    fontSize:28,
    fontWeight:'bold'
  },
  input:{
    
    width:356,
   backgroundColor:'white',
   maxWidth:'90%'

  },
  form:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:10
  },
  coverCategory:{
    width:40,
    height:40,
    borderRadius:20,
    marginBottom:4
},
ViewCategory:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:14
}
});
