import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import styles from '../SampleStyling';

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
    <Text style={styles.textBold}>Hellow world bosq</Text>
    <ProfilAchmad />
    <TextInput style={{borderWidth: 1}} />
    <ProfileAchmad />
  </View>
);

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

function ProfilAchmad() {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/people'}}
      style={{width: 100, height: 100}}
    />
  );
}

export default SampleBasic;
