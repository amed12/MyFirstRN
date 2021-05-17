import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() =>
            this.setState({
              number: this.state.number + 1,
            })
          }
        />
      </View>
    );
  }
}

const StateDynamic = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Dynamic state with state</Text>
      <Counter />
      <Counter />
      <Text style={styles.titleSection}>Class component</Text>
      <CounterClass />
      <CounterClass />
      <CounterClass />
    </View>
  );
};

export default StateDynamic;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  titleSection: {
    marginTop: 20,
  },
});
