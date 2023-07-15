import { useCallback, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider, DefaultTheme } from 'react-native-ios-kit';
import { LinearGradient } from 'expo-linear-gradient';
import NavBar from './Components/NavBar';
import TabBarComponent from './Components/Tab';
import HomeScreen from './Screens/Home';
import AccountScreen from './Screens/AccountsScreen';
import SearchScreen from './Screens/SearchScreen';

SplashScreen.preventAutoHideAsync();
const theme = {
  ...DefaultTheme,
  primaryColor: 'rgb(1,1,1)',
  primaryLightColor: 'gray',
};


export default function App() {
  const [fontsLoaded] = useFonts({
    'Fasthand': require('../assets/fonts/Fasthand/Fasthand-Regular.ttf'),
    'ArialRoundedMTBold': require('../assets/fonts/Arial-Rounded-MT-Bold-Font/ARLRDBD.ttf'),
    'Dancing Script Regular': require('../assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [currentScreen,setCurrentScreen] = useState('home');
  const [activeId,setActiveId] = useState(0)

  if (!fontsLoaded) {
    return null;
  }
  changeTab=(i,v)=>{
    setActiveId(i);
    setCurrentScreen(
      v
    );
  }
  GetScreen=()=>{
    console.log(currentScreen);
      if (currentScreen=='home') return (<HomeScreen />);
      else if (currentScreen=='profile') return (<AccountScreen/>);
      else if(currentScreen=='search') return (<SearchScreen/>)
      return (<View></View>)
    }

  return (
    <ThemeProvider theme={theme}>
      <View
        style={styles.container}>
        <NavBar navigateAccount={()=>{setActiveId(-1);setCurrentScreen('profile')}} navigateHome={()=>{setCurrentScreen('home');setActiveId(0)}}/>
        
        <View style={{height: '79%'}}>
          <GetScreen/>
        </View>
            <TabBarComponent changeTab={changeTab} activeId={activeId}/>
      </View>
    </ThemeProvider>
  );
  }

const styles = StyleSheet.create({ 
    container:{
        flex: 1,
        backgroundColor: 'rgb(250,250,250)'
    }
 }); 