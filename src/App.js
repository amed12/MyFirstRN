import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import FlexBoxExample from './pages/FlexBoxExample';
import Position from './pages/Position';
import PropDynamic from './pages/PropsDynamic';
import SampleBasic from './pages/SampleComponent';
import SampleStylingBasic from './pages/SampleStyling';

const App = () => {
  /*
  for learn lifecycle will unmount purpose
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  */
  return (
    <View>
      <ScrollView>
        {/* <SampleBasic /> */}
        {/* <SampleStylingBasic /> */}
        {/* {<FlexBoxExample />} */}
        {/* <Position /> */}
        <PropDynamic />
      </ScrollView>
    </View>
  );
};

export default App;
