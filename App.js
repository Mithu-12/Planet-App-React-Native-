import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import Text from './src/Components/text/text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/Details';

export default function App() {
  const [loaded] = useFonts({
    Antonio: require('./assets/fonts/Antonio-VariableFont_wght.ttf'),
    LeagueSpartan: require('./assets/fonts/LeagueSpartan-VariableFont_wght.ttf')

    
  });
  if(!loaded){
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
   <>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'></StatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // color: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 0,
  }
});
