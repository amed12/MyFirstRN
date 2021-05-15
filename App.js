import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => (
  <View>
    <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
    <Text>Hellow world</Text>
    <ProfilAchmad />
    <TextInput style={{borderWidth: 1}} />
  </View>
);

function ProfilAchmad() {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/people'}}
      style={{width: 100, height: 100}}
    />
  );
}

export default App;