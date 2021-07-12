
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import {ListItem, SearchBar } from 'react-native-elements';


export default function LibraryScreen({navigation}) {
 
  useFonts({
    'Yellowtail': require('../assets/fonts/Yellowtail-Regular.ttf')
  })

  const [Books, setBooks] = useState([]);
  const [Search, setSearch] = useState("");  
  function goToBook(reso) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Book', 
          params: {
              nameSocial: reso,
            }
        }
      ]
    })
  }

useEffect(() => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${Search}&keyAIzaSyDmaWMfUYhg5YBT80KtYcuqNahl_t9O00s`)
  .then(res => {
    setBooks(res.data.items);
  })
}, [Search])

  return(
       <View>
          <SearchBar
        placeholder="Rechercher un livre"
        onChangeText={(text) => {setSearch(text)}}
        value={Search}
      />           

         <FlatList
          data={Books}
          renderItem={({item})=> (
            <ListItem bottomDivider 
            onPress={() => navigation.navigate('Book',{
              book: item
            })}>

            <ListItem.Content>
              <ListItem.Title style={styles.title} onPress={()=>goToBook('Book')} >{item.volumeInfo.title}</ListItem.Title>
            
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem>)
          }
  
          keyExtractor={item => item.id.toString()}
        />
      </View>
        )
        }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    title: {
      fontFamily: 'Yellowtail'
    }
  });

