import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import me from '../../assets/me.jpg';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 16}}>
      <Image
        source={me}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text>{props.judul}</Text>
    </View>
  );
};

const PropDynamic = () => {
  return (
    <View>
      <Text style={{alignSelf: 'center'}}> Dynamic Component with props </Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row', marginTop:16}}>
          <Story judul="Achmad1" />
          <Story judul="Achmad2" />
          <Story judul="Achmad3" />
          <Story judul="Achmad4" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropDynamic;
