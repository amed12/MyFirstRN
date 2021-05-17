import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../SampleStyling';
import me from '../../assets/me.jpg';

export default class FlexBoxExample extends Component {
  constructor(props) {
    super(props);
    console.log('-> constructor');
    this.state = {
      subscriber: 200,
    };
  }
  render() {
    console.log('-> render');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            borderStartColor: 'green',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
          <View style={{backgroundColor: 'grey', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            marginLeft: 16,
          }}>
          <Image
            source={me}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 8,
            }}
          />
          <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style={styles.textBold}>Achmad Fathullah</Text>
            <Text>{this.state.subscriber} Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    console.log('-> component did mount');
    setTimeout(() => {
      this.setState({
        subscriber: 400,
      });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('-> component did update');
  }

  componentWillUnmount() {
    console.log('-> component will unmount');
  }
}
