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
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.label} testID={'rectangleLengthText'}>Length</Text>
         <Input testID={"rectangleLengthInput"} />
         <Text style={styles.label} testID={'rectangleWidthText'}>Width</Text>
         <Input testID={"rectangleWidthInput"}/>
        <Button testID={"rectangleAreaButton"}>
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
