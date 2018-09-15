import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Profile extends React.Component{
  render () {
    return (
      <View style={[styles.stat, styles.importantStats]}>
        <View style={styles.statColumn}>
          <Text style={{paddingBottom: 10}}>90</Text>
          <Text>Total Fuel</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={{paddingBottom: 10}}>72 points/hr</Text>
          <Text>Total Fuel</Text>
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

export default Profile;

