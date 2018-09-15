import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Analytics extends React.PureComponent {
  
  render() {
    return (
     <View>
       <View style={styles.stat}>
          <Image
            style={{height: 50, width: 50}}
            source={require('./../assets/heart-rate.png')}
          />
          <Text style={{padding: 10}}>Current Heart Rate</Text>
        </View>
        <View style={styles.stat}>
          <Image
            style={{height: 50, width: 50}}
            source={require('./../assets/heart-rate.png')}
          />
          <Text style={{padding: 10}}>Current Body Temperature</Text>
        </View>
        <View style={styles.stat}>
          <Image
            style={{height: 50, width: 50}}
            source={require('./../assets/heart-rate.png')}
          />
          <Text style={{padding: 10}}>Humidity %</Text>
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  stat: {
    
  },
  importantStats: {

  },
  statColumn: {
    
  }
});

export default Analytics;
 