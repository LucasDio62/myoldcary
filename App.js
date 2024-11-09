import React, {useRef, useState} from 'react';
import {
  Button,
  Pressable,
  DrawerLayoutAndroid,
  StatusBar,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native';
// import { Button } from "native-base";

const teste = () =>{
  console.log("hi");
}

const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Text>Open up App.js to start working on your app!</Text>
            <Pressable style={styles.Pressable} onPress={teste}>
              <Text>hi click me</Text>
            </Pressable>
            <StatusBar style="auto"/>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
        <View style={styles.navBar}>
          <Image
            source={require('../myoldcare/assets/bt-add-lembrete.png')}
            style={styles.btAddLembrete}
          />
          <Image
            source={require('../myoldcare/assets/nav-bar.png')}
            style={styles.imageNavBar}
          />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 16,
    // backgroundColor: 'black'
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  navBar: {
    width: '100%',
    backgroundColor: '#fff', // Cor de fundo da navbar
    // padding: 10,
    alignItems: 'center',
    position: 'absolute',
    // backgroundColor: 'black',
    bottom: 0, // Posiciona a navbar na parte inferior
    flexDirection: 'column',
  },
  imageNavBar: {
    position: 'absolute',
    bottom: -24,
    // backgroundColor: 'black',
    width: Dimensions.get('window').width, // Largura total da tela
    // height: 100, // Altura da imagem
    zIndex: 0,
    // resizeMode: 'contain', // Ajusta a imagem
  },
  btAddLembrete: {
    position: 'absolute',
    bottom: 40,
    zIndex: 1,
    width: 60,
    height: 60,
  }
});

export default App;