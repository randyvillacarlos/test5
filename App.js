/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import CodePush from 'react-native-code-push';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };
export default class App extends Component<Props> {

 codePushDownloadDidProgress(progress) {
       console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
 }

 componentWillMount() {
 		CodePush.disallowRestart();//页面加载的禁止重启，在加载完了可以允许重启
 	}

 	componentDidMount(){
 		CodePush.allowRestart();//允许重启，否则热更新不会生效
 		CodePush.sync({
 			installMode: CodePush.InstallMode.IMMEDIATE,
 			updateDialog: false,
 		})
 	}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          shit me baby fuck off Welcome to React Native! Aegis!!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
         `Hit Me` 
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

App = CodePush(codePushOptions) (App);
const styles = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    paddingVertical:  9,
    paddingHorizontal: 15,
    overflow: "hidden",
    backgroundColor: "blue"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400"
  }
});
