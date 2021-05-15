import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleBasic from './SampleBasic';
import SampleStylingBasic from './SampleStylingBasic';

const App = () => (
  <View>
    <ScrollView>
      <SampleBasic />
      <SampleStylingBasic />
    </ScrollView>
  </View>
);

export default App;
