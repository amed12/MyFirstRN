import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './StyleText';
import me from './me.jpg';

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

export default SampleStylingBasic;
