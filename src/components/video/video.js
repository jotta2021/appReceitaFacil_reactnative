import {View,Text, Pressable,StyleSheet, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather} from '@expo/vector-icons'
import {WebView} from 'react-native-webview'


export default function Video({videoUrl,CloseVideo}){
    return(
        <SafeAreaView style={styles.container}>
<TouchableOpacity  onPress={CloseVideo}  style={styles.header}>
<Feather style={{marginStart:17}} name='arrow-left' size={24} color={'white'}/>
    <Text style={styles.backText}>Voltar</Text>
</TouchableOpacity>

     <WebView
     style={styles.container}
     source={{uri:videoUrl}}
     />
     
         </SafeAreaView>
    )
}

const styles = StyleSheet.create({
header:{
    backgroundColor:'#4CBE6C',
    flexDirection:'row',
    alignItems:'center',
    height:50
},
backText:{
    fontSize:16,
    color:'white',
    fontWeight:'700'

},
container:{
   flex:1,
   width:'100%'
}


})