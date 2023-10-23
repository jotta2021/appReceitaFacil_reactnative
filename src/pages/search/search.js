
import { Text, View ,StyleSheet,SafeAreaView, FlatList} from 'react-native';
import { useRoute} from '@react-navigation/native'
import{useState,useEffect} from 'react'
import api from '../../services/api';
import RenderItens from '../../components/foodlist';


export default function Search() {
const route = useRoute()
const [receipeSearch,setReceipeSearch] = useState([])


useEffect(()=>{
async function FecthApi(){

let receipes = await api.get(`/foods?name_like=${route.params.name}`)
setReceipeSearch(receipes.data)
console.log(receipes.data)
}
FecthApi()
  
},[route.params?.name])
  return (
    <SafeAreaView >
  <FlatList
  data={receipeSearch}
  keyExtractor={item=> item.id.toString()}
  renderItem={({item})=> (<RenderItens item={item} />)}
  ListEmptyComponent={()=> 

    <Text style={{fontSize: 15, marginLeft: 70}}> Não encontramos o que está buscando...</Text>
  }
  
  />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container:{
  marginTop:14,
  marginStart:14,
  marginEnd:14,
  flex: 1,
  backgroundColor:'#f3f9ff'
}



})