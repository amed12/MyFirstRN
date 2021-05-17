import React from 'react';
import {Text, View} from 'react-native';
import MyIllustration from '../../assets/my_apps.svg';

const ReactNativeSvg = () => {
  return (
    <View>
      <Text style={{textAlign: 'center'}}>ini svg</Text>
      <MyIllustration width={244} height={100} />
    </View>
  );
};

export default ReactNativeSvg;
