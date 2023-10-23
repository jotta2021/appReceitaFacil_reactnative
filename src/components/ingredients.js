import {View,Text,StyleSheet} from 'react-native'
import PrepareFood from './prepareFood'

export default function Ingredients ({item}){
    return(


        <View style={styles.container}>
            <View style={styles.Ingredients}>

            <Text style={{fontSize:18, fontWeight:'700'}}>{item.name}</Text>  
            <Text>{item.amount}</Text>  
            </View>

        </View>
    )
}

const styles = StyleSheet.create({


    container:{
backgroundColor:'white',
marginBottom:14,
height:45,
justifyContent:'center',



    },
    Ingredients:{
        flexDirection:'row',
        marginStart:8,
        justifyContent:'space-between',
        marginEnd:8
    }
})