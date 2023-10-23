import { View ,Text,StyleSheet} from "react-native";

export default function Logo(){
    return(
        <View style={styles.logoArea}>
     <Text style={styles.logo} >Receita Fácil</Text>
   
        </View>
    )
}

const styles= StyleSheet.create({
logo:{
fontSize:20,
color:'white',
fontWeight:'bold'
},
logoArea:{
    backgroundColor:'#4CBE6C',
    height:36,
    width:173,
    justifyContent:"center",
    alignItems:'center',
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:32
}

})