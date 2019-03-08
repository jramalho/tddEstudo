/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Text, View, Input, Button} from "native-base";


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      length:0,
      width:0,
      area:0,
    }
  }

  calc(){
    const area = this.state.length * this.state.width;
    this.setState({area: area});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text testID={"finalValue"} style={styles.label}>{this.state.area}</Text>
         <Text style={styles.label} testID={'rectangleLengthText'}>Length</Text>
         <Input testID={"rectangleLengthInput"}  onChangeText={length => this.setState({length})}/>
         <Text style={styles.label} testID={'rectangleWidthText'}>Width</Text>
         <Input testID={"rectangleWidthInput"} onChangeText={width => this.setState({width})}/>
        <Button testID={"rectangleAreaButton"} onPress={() => this.calc()}>
        <Text>Calculate</Text>
      </Button>
      </View>
    );
  }
}

const styles ={
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#414f6f',
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
  },
  textButton: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#ffffff'
  },
  label: {
    fontSize: 17
  }
};
