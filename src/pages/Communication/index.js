import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PeopleItem from '../../component/PeopleItem';
import UnreadItem from '../../component/UnreadItem';

export const Communication = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}> Communication</Text>
      <UnreadItem unreadCount={unreadCount} />
      <PeopleItem onPressButton={() => setUnreadCount(unreadCount + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
