import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';


import SplashScreen from './screens/SplashScreen';
import BookScreen from './screens/BookScreen';
import LibraryScreen from './screens/LibraryScreen';


const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {
        backgroundColor: 'gray',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="Home" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Library" component={LibraryScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
   justifyContent:'center' 
  },
  // inputBtn:{
  //   flexDirection:'row',
  // },
  input :{
    border : 'solid',
    marginRight: 10,
  },
  h1:{
    fontSize: 26,
    margin: 50,
  },
  // form:{
  //   flexDirection: 'column',
  //   border:1,
  //   border : 'solid',
  //   padding: 20
  // },
});

{/* <ScrollView >
    <View style={styles.container}>
      <Text style={styles.h1}>Bibliothèque</Text>
      <View style={styles.form}>
        <View style={styles.inputBtn}>
            <TextInput style={styles.input} value={Input}
            onChangeText={(text) => {setInput(text)}} />
            <Button style={styles.btn} title="Go!" color="gray" onPress={getTitle} />
            </View>
       {bookJSX}
          </View>
    </View>
</ScrollView> */}


// const [Input, setInput] = useState("");
// const [title, setTitle] = useState([
//   {name:'lorem'},
//   {name:'ipsum'},
//   {name:'bar lorem'},
//   {name:'bar'},
//   {name:'bar'},
//   {name:'bar'},
//   {name:'ipsum'}
// ]);
// function getTitle (){
//   // e.preventDefault();
//   const newtitle = title.filter(title => title.name === Input);
//   setTitle(newtitle);
//   setInput("");

// }
// const bookJSX = title.map(title => {
//   return <BookScreen name={title.name} />
// })

