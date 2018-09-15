import React from 'react';
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

    render() {

        const data = [
            {
                month: new Date(2015, 0, 1),
                apples: 3840,
                bananas: 1920,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 1, 1),
                apples: 1600,
                bananas: 1440,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 2, 1),
                apples: 640,
                bananas: 960,
                cherries: 3640,
                dates: 400,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 3320,
                bananas: 480,
                cherries: 640,
                dates: 400,
            },
        ]

        const colors = [ '#8800cc', '#aa00ff', '#cc66ff', '#eeccff' ]
        const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]
        const svgs = [
                    { onPress: () => console.log('apples') },
                    { onPress: () => console.log('bananas') },
                    { onPress: () => console.log('cherries') },
                    { onPress: () => console.log('dates') },
                ]

        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image
                        style={{height: 150, width: 150}}
                        source={require('./assets/heart-rate.png')}
                    />

                    <View style={styles.summary}>
                        <View style={{alignContent : 'center'}}>
                            <Text>90</Text>
                            <Text>total fuel</Text>
                        </View>

                    </View>


<<<<<<< HEAD
=======
        return (
          <View style={styles.container}>
              <View style={{paddingTop: 20}}/>
              <Text style={{fontSize:40, fontWeight: 'bold'}}>Hello Zefam,</Text>
                <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                    <YAxis
                        data={this.state.data}
                        style={{ marginBottom: this.state.xAxisHeight }}
                        contentInset={this.state.verticalContentInset}
                        svg={this.state.axesSvg}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={this.state.data}
                            contentInset={this.state.verticalContentInset}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                        >
                            <Grid/>
                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: this.state.xAxisHeight }}
                            data={this.state.data}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={this.state.axesSvg}
                        />
                    </View>
                </View>
                <View style={styles.analytics}>
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
                    <View style={styles.stat}>
                      <Image
                        style={{height: 50, width: 50}}
                        source={require('./assets/heart-rate.png')}
                      />
                      <Text style={{padding: 10}}>Current Heart Rate:</Text>
                    </View>
                    <View style={styles.stat}>
                      <Image
                        style={{height: 50, width: 50}}
                        source={require('./assets/heart-rate.png')}
                      />
                      <Text style={{padding: 10}}>Current Body Temperature:</Text>
                    </View>
                    <View style={styles.stat}>
                      <Image
                        style={{height: 50, width: 50}}
                        source={require('./assets/heart-rate.png')}
                      />
                      <Text style={{padding: 10}}>Humidity %:</Text>
                    </View>
>>>>>>> ebd04828d15b652d6f78fa81e008f52d1eaf97ea
                </View>
                <StackedAreaChart
                    style={styles.mainChart}
                    data={ data }
                    keys={ keys }
                    colors={ colors }
                    curve={ shape.curveNatural }
                    showGrid={ false }
                    svgs={ svgs }
                />
            </View>
            
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: 'flex-start',
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
  mainChart: {
    height: 250, 
    paddingVertical: 16,
  }

=======
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  graph: {
    backgroundColor: "#333",
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
>>>>>>> ebd04828d15b652d6f78fa81e008f52d1eaf97ea
});
