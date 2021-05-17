import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import me from '../../assets/me.jpg';

const PeopleItem = props => {
  return (
    <View style={styles.container}>
      <Image source={me} style={styles.profileImage} />
      <Text style={styles.textBold}>Achmad Fathullah</Text>
      <TouchableOpacity onPress={props.onPressButton}>
        <View style={styles.containerButton}>
          <Text style={styles.textButton}>Add Friend</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default PeopleItem;
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'grey',
    padding: 12,
    width: 212,
    alignSelf: 'center',
  },
  containerButton: {
    backgroundColor: 'green',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 16,
  },
  profileImage: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  textButton: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
