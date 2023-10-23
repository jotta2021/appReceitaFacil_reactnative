import {View,Text,StyleSheet} from 'react-native'

export default function PrepareFood({item}){
    return(


        <View style={styles.container}>
<Text style={{fontSize:20,fontWeight:'700'}}>{item.id} -</Text>
<Text style={styles.instructions}>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

container:{
flexDirection:'row',
marginBottom: 15,
width:340,
alignItems:'center'


},
instructions:{
    flexWrap:'wrap',
    marginStart:8
 
}



})