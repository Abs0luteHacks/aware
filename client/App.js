import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Graph from './components/graph';
import Analytics from './components/analytics';
import Profile from './components/profile';


export default class App extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                
                    <Profile />
                    <Graph />

                    <Analytics />

                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
  profile: {
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  summary: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    height: '15%'
  },
  analytics: {
    width: '100%'
  },
  stat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 100,
    borderWidth: 2,
  },
  importantStats: {
    justifyContent: 'center'
  },
  statColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  }

});
