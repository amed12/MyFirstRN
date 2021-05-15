import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import me from './me.jpg';

const App = () => (
  <ScrollView>
    <SampleBasic />
    <SampleStylingBasic />
  </ScrollView>
);

const SampleBasic = () => (
  <View>
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 2,
        margin: 20,
      }}
    />
    <Text style={styles.textBold}>Hellow world</Text>
    <ProfilAchmad />
    <TextInput style={{borderWidth: 1}} />
    <ProfileAchmad />
  </View>
);

const SampleStylingBasic = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: 'grey',
        padding: 12,
        width: 212,
      }}>
      <Image source={me} style={{width: 188, height: 107, borderRadius: 8}} />
      <Text style={styles.textBold}>Achmad Fathullah</Text>
      <ButtonSave />
    </View>
  );
};

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

const ButtonSave = () => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        paddingVertical: 6,
        borderRadius: 25,
        marginTop: 16,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '600',
          color: 'white',
          textAlign: 'center',
        }}>
        Add Friend
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
