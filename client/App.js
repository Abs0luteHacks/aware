import React from 'react';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

    update(){
        for (x in this.state.data){
            this.state.data[x] = this.state.data[x] * 100
        }
    }

    constructor() {
        super();
        this.state = {
            data: [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ],
            axesSvg: { fontSize: 10, fill: 'grey' },
            verticalContentInset : { top: 10, bottom: 10 },
            xAxisHeight : 30
          }
    }

  render() {

        this.update()

        // const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        // const axesSvg = { fontSize: 10, fill: 'grey' };
        // const verticalContentInset = { top: 10, bottom: 10 }
        // const xAxisHeight = 30

        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.



        return (
          <View>
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
                    <View style={styles.stat}>
                      <Image
                        style={{height: 50, width: 50}}
                        source={require('./assets/heart-rate.png')}
                      />
                      <Text style={{padding: 10}}>Current Heart Rate:</Text>
                    </View>
                    <View style={styles.stat}>
                      <Text style={{padding: 10}}>Current Body Temperature:</Text>
                    </View>
                    <View style={styles.stat}>
                      <Text style={{padding: 10}}>Humidity %:</Text>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#99bbff'

  },
  graph: {
    backgroundColor: "#333",
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    height: '15%'
  },
  stat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 100,
    borderWidth: 2,
    backgroundColor: '#e6eeff'
  },
});
