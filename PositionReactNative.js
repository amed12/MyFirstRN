import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import me from './me.jpg';

export default function PositionReactNative() {
  return (
    <View style={styles.viewWrapper}>
      <View style={styles.viewBorder}>
        <Image source={me} style={styles.iconProfile} />
        <Text style={styles.unreadText}>10</Text>
      </View>
      <Text>Pilih partner anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    padding: 12,
    alignItems: 'center',
    position: 'relative',
  },
  viewBorder: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconProfile: {width: 50, height: 50, borderRadius: 50 / 2},
  textProfile: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 16,
  },
  unreadText: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf92',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
