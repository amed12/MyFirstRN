import React from 'react';
import {ScrollView, View} from 'react-native';
import FlexBoxExample from './pages/FlexBoxExample';
import Position from './pages/Position';
import SampleBasic from './pages/SampleComponent';
import SampleStylingBasic from './pages/SampleStyling';

const App = () => (
  <View>
    <ScrollView>
      <SampleBasic />
      <SampleStylingBasic />
      <FlexBoxExample />
      <Position />
    </ScrollView>
  </View>
);

export default App;
