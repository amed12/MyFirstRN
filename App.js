import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => (
  <View>
    <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
    <Text>Hellow world</Text>
    <ProfilAchmad />
    <TextInput style={{borderWidth: 1}} />
    <ProfileAchmad />
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
class ProfileAchmad extends Component {
  render() {
    return (
      <View>
        <ProfilAchmad />
        <Text>Ini Achmad Fathullah</Text>
      </View>
    );
  }
}

export default App;
