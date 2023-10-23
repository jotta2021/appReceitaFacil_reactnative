import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getFavorites } from '../../utils/storage';
import { useIsFocused } from '@react-navigation/native';
import RenderItens from '../../components/foodlist';

export default function Favorites() {
  const [receipes, setReceipes] = useState([]);
  const isfocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getReceipes() {
      const results = await getFavorites('@appreceitas');
      if (isActive) {
        setReceipes(results);
      }
    }

    if (isActive) {
      getReceipes();
    }

    return () => {
      isActive = false;
    };
  }, [isfocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas favoritas</Text>

      {Array.isArray(receipes) && receipes.length > 1 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={receipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            if (item && typeof item === 'object') {
              return <RenderItens item={item} />;
            }
          }}
        />
      ) : (
        <Text style={{ fontSize: 15, marginLeft: 70 }}>
          Você não tem nada salvo...
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
    marginStart: 14,
    marginEnd:14,
    backgroundColor: '#f3f9ff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});
