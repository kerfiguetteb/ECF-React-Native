import React, {useState, useEffect} from 'react';
import { FlatList, Button, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function SplashScreen({navigation}) {
  function goToBook(reso) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: reso, 
          params: {
              nameSocial: reso,
              actionBadass: "roxer"
            }
        }
      ]
    })
  }

return <View style={styles.container}>
<Text style={styles.title}>Book'app</Text>

<Button onPress={()=> goToBook('Book')}
  title="Commencer"
  color="gray"/>

</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontFamily: 'Yellowtail',
    textAlign: 'center'
  }
});