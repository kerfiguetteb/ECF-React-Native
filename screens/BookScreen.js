
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import {ListItem, Switch } from 'react-native-elements';


export default function BookScreen({route}) {
      const [Books, setBooks] = useState([]);

  // let [fontsLoaded] = useFonts({
  //   'Yellowtail': require('../assets/fonts/Yellowtail-Regular.ttf')
  // })

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyClBwnmMF2cf--LbXEfAPzf3mQCU4vAq9U')
    .then(res => {
      console.log(res.data.items);
      setBooks(res.data.items);
    })
  }, [])

  // // function goToNike(reso) {
  // //   navigation.reset({
  // //     index: 0,
  // //     routes: [
  // //       {
  // //         name: 'Nike', 
  // //         params: {
  // //             nameSocial: reso,
  // //             actionBadass: "roxer"
  // //           }
  // //       }
  // //     ]
  // //   })
  // // }
  // // {truc: 'twitter'} quand je cliquerai sur twitter
  // // {truc: 'facebook'} quand je cliquerai sur facebook

  // if(!fontsLoaded) {
  //     return <View>Loading...</View>
  // }
  // else {
  //   return (
  //     <View style={styles.container}>
  
  //       {/* <SocialIcon type='twitter' onPress={()=> goToNike('twitter')}/>
  //       <SocialIcon type='facebook' onPress={() => goToNike('facebook')}/>
  //  */}
  
  
  return(
       <View>
        <Text>
          livres
          </Text>
         <FlatList
          data={Books}
  
          renderItem={({item})=> (
            <ListItem bottomDivider 
              >
            <ListItem.Content>
              <ListItem.Title >{item.volumeInfo.title}</ListItem.Title>
            
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem>)
          }
  
          keyExtractor={item => item.id.toString()}
        />
      </View>
        )
  //   )
  // }

}
// const styles = StyleSheet.create({
//     books:{
//         padding:10
//     }
    
// })


{/* <View > 
<Text style={styles.books} > 
<AntDesign name="book" size={24} color="black" />
{name}
</Text>
</View> */}
