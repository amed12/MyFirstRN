import React from 'react';
import {ScrollView, View} from 'react-native';
import FlexBox from './FlexBox';
import SampleBasic from './SampleBasic';
import SampleStylingBasic from './SampleStylingBasic';

const App = () => (
  <View>
    <ScrollView>
      <SampleBasic />
      <SampleStylingBasic />
      <FlexBox />
    </ScrollView>
  </View>
);

export default App;
