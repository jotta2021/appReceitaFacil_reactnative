import AsyncStorage from "@react-native-async-storage/async-storage";

 export async function getFavorites(key) {
  try {
    const data = await AsyncStorage.getItem(key);

    if (data !== null) {
      // Se há dados no armazenamento, parse e retorne-os
      return JSON.parse(data);
    } else {
      // Se não há dados, retorne um array vazio
      return [];
    }
  } catch (error) {
    // Lida com erros, por exemplo, registrando-os
    console.error(error);
    return [];
  }
}


export async function saveFavorites(key,newItem){


    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some(item=> item.id === newItem.id)
    if(hasItem){
           console.log('Essa receita já esta como favorita')
           return;
    
    }
    myFavorites.push(newItem)
    await AsyncStorage.setItem(key,JSON.stringify(myFavorites))
    console.log('salvo com sucesso')
}



  
export async function removeItem(id){
let receipes = await getFavorites("@appreceitas")
let myFavorites = receipes.filter(item => {
    return(   item.id !== id  )
})
await AsyncStorage.setItem("@appreceitas",JSON.stringify(myFavorites))
console.log('A receita exluida dos seus favoritos')
return(myFavorites)

}

export async function isFavorite(receipe) {
    if (receipe && receipe.id) {
      let myReceipes = await getFavorites("@appreceitas");
      const favorite = myReceipes.find(item => item.id ===receipe.id);
      if (favorite) {
        return true;
      }
    }
    return false;
  }
  