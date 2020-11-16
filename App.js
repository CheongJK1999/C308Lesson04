/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  console.log("Listing semester modules and recommended eats");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <Text></Text>
              <Text>My Modules this semester:</Text>
              <SemModule day = {"Monday"} module = {"C348"} />
              <SemModule day = {"Tuesday"} module = {"C273"} />
              <SemModule day = {"Friday"} module = {"C308"} />
              <Text></Text>
              <Text>Recommended Eats @RP</Text>
              <Eats name={"Sweet Tooth Waffles"} location={"W6 Level 1, E-canteen"} />
              <Text>{"\n"}</Text>
              <Eats name={"Crowded Bowl"} location={"W4/W6 Lawn Canteen"} />
              <Text>{"\n"}</Text>
              <Eats name={"Western Cuisine"} location={"E1 Level 1, Koufu"} />
              <Text>{"\n"}</Text>
              <Eats name={"Ayam Penyet"} location={"W4/W6 Lawn Canteen"} />
              <Text></Text>
              <Text>World Clock</Text>
              <WorldClock moment.tz("Asia/Singapore", Clock").format(); />
            <WorldClock moment.tz("Europe/London", Clock").format(); />
          <WorldClock moment.tz("America/New York", Clock").format(); />
        <WorldClock moment.tz("Europe/Oslo", Clock").format(); />

        </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

//Exercise 1
const Welcome = () => {
  return <Text>Welcome to C308 Web framework</Text>;
};

//Exercise 2
class MyFirstApp extends React.Component {
  render() {
    return <Text>My First React Native app</Text>;
  }
}

//Exercise 3
const SemModule = (props) => {
  return (
      <Text>
        {props.day} - {props.module}
      </Text>
  );
};

//Exercise 4
class Eats extends React.Component {
  render() {
    return (
        <Text>
          {this.props.name}{"\n"}
          {this.props.location}
        </Text>
    );
  }
}

//Project
class Clock extends React.Component {
  render(){
    <Text>
      {this.props.Text}
    </Text>
  };
}

const WorldClock = (props) => {
  return (
      <Text>
        {props.moment.tz} - {props.format}
      </Text>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
