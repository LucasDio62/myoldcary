import React, {useRef, useState} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
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

const teste = () =>{
  console.log("hi");
}
teste()
const { width } = Dimensions.get('window');
const App = () => {
//Valores dos componentes, se for true e aparece se for false ele nao aparece
  const [lembrete, setLembrete] = useState(true);
  const [loja, setLoja] = useState(false);
  const [sininho, setSininho] = useState(false);
  const [engrenagem, setEngrenagem] = useState(false);
  const [mais, setMais] = useState(false);
//valores das imagens(seus caminhos)
const [imgLembrete, setImgLembrete] = useState(require('./assets/bt-lembretes.png'));
const [imgLoja, setImgLoja] = useState(require('./assets/bt-01-removebg-preview.png'));
const [imgSininho, setImgSininho] = useState(require('./assets/Screenshot_5-removebg-preview.png'));
const [imgEngrenagem, setImgEngrenagem] = useState(require('./assets/Screenshot_6-removebg-preview (1).png'));
  
  const esconderLembrete = () => {
    //setando o caminho novo dos componentes para trocar a imagem
    setImgLembrete(require('./assets/bt-lembretes.png'));
    setImgLoja(require('./assets/bt-01-removebg-preview.png'));
    setImgSininho(require('./assets/Screenshot_5-removebg-preview.png'));
    setImgEngrenagem(require('./assets/Screenshot_6-removebg-preview (1).png'));
    //setando os conponentes para verdadeiro ou falso
    setLembrete(true);
    setLoja(false);
    setSininho(false);
    setEngrenagem(false);
    setMais(false);
  };
  const esconderLoja = () => {
    //setando o caminho novo dos componentes para trocar a imagem
    setImgLembrete(require('./assets/Screenshot_2-removebg-preview.png'));
    setImgLoja(require('./assets/loja_dourada.png'));
    setImgSininho(require('./assets/Screenshot_5-removebg-preview.png'));
    setImgEngrenagem(require('./assets/Screenshot_6-removebg-preview (1).png'));
    //setando os conponentes para verdadeiro ou falso
    setLembrete(false);
    setLoja(true);
    setSininho(false);
    setEngrenagem(false);
    setMais(false);
  };
  const esconderSininho = () => {
    //setando o caminho novo dos componentes para trocar a imagem
    setImgLembrete(require('./assets/Screenshot_2-removebg-preview.png'));
    setImgLoja(require('./assets/bt-01-removebg-preview.png'));
    setImgSininho(require('./assets/Screenshot_6-removebg-preview.png'));
    setImgEngrenagem(require('./assets/Screenshot_6-removebg-preview (1).png'));
    //setando os conponentes para verdadeiro ou falso
    setLembrete(false);
    setLoja(false);
    setSininho(true);
    setEngrenagem(false);
    setMais(false);
  };
  const esconderEngrenagem = () => {
    //setando o caminho novo dos componentes para trocar a imagem
    setImgLembrete(require('./assets/Screenshot_2-removebg-preview.png'));
    setImgLoja(require('./assets/bt-01-removebg-preview.png'));
    setImgSininho(require('./assets/Screenshot_5-removebg-preview.png'));
    setImgEngrenagem(require('./assets/Screenshot_7-removebg-preview.png'));
    //setando os conponentes para verdadeiro ou falso
    setLembrete(false);
    setLoja(false);
    setSininho(false);
    setEngrenagem(true);
    setMais(false);
  };
  const esconderMais = () => {
    setLembrete(false);
    setLoja(false);
    setSininho(false);
    setEngrenagem(false);
    setMais(true);
  };

  return (
    <View style={styles.container}>
        {lembrete && (<View style={[styles.box, { width: width * 0.9 }]}>
          <Text style={[styles.boxText]}>Este é o componente lembretes</Text>
        </View>)}
        {loja && (<View style={[styles.box, { width: width * 0.9 }]}>
          <Text style={[styles.boxText]}>Este é o componente loja</Text>
        </View>)}
        {sininho && (<View style={[styles.box, { width: width * 0.9 }]}>
          <Text style={[styles.boxText]}>Este é o componente sininho</Text>
        </View>)}
        {/* componente engrenagem: */}
        {engrenagem && (<View style={[styles.box, { width: width * 0.9 }]}>
          <Pressable style={styles.button} onPress={() => handlePress('Notificações')}>
            <Text style={styles.buttonText}>Notificações</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => handlePress('Ajustes e Acessibilidade')}>
            <Text style={styles.buttonText}>Ajustes e Acessibilidade</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => handlePress('Idiomas')}>
            <Text style={styles.buttonText}>Idiomas</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => handlePress('Ajuda e Suporte')}>
            <Text style={styles.buttonText}>Ajuda e Suporte</Text>
          </Pressable>
        </View>)}
        {mais && (<View style={[styles.box, { width: width * 0.9 }]}>
          <Text style={[styles.boxText]}>Este é o componente mais</Text>
        </View>)}

        <View style={styles.navBar}>
          <Pressable style={styles.btSininho} onPress={esconderSininho}>
          <Image
              source={imgSininho}
              style={{width: 32, height: 42}}
              />
          </Pressable>
          <Pressable style={styles.btEngrenagem} onPress={esconderEngrenagem}>
          <Image
            source={imgEngrenagem}
            style={{width: 38, height: 38}}
            />
          </Pressable>
          <Pressable style={styles.btLembrete} onPress={esconderLembrete}>
          <Image
              source={imgLembrete}
              style={{width: 38, height: 38}}
              />
          </Pressable>
          
          <Pressable style={styles.btLoja} onPress={esconderLoja}>
          <Image
            source={imgLoja}
            style={{width: 38, height: 38}}
            />
          </Pressable>
          
          <Pressable style={styles.btAddLembrete} onPress={esconderMais}>
          <Image
            source={require('./assets/bt-add-lembrete.png')}
            style={{width: 60, height: 60}}
            />
          </Pressable>
          <Image
            source={require('./assets/nav-bar.png')}
            style={styles.imageNavBar}
            />
        </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5'
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  button: {
    backgroundColor: '#FF8066',
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginVertical: 10,
    borderRadius: 15,
    width: '100%', // Definindo a largura dos botões
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000', // Cor da sombra (preto)
    shadowOffset: { width: 0, height: 4 }, // Distância da sombra
    shadowOpacity: 0, // Opacidade da sombra
    shadowRadius: 10, // Raio da sombra
    // alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  box: {
    alignItems: 'center',
    flex: 0.8,
    // borderWidth: 3,
    borderColor: 'red',
    marginBottom: 50
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  navBar: {
    width: '100%',
    backgroundColor: '#E5E5E5', // Cor de fundo da navbar
    alignItems: 'center',
    position: 'absolute',
    bottom: 0, // Posiciona a navbar na parte inferior
    flexDirection: 'column',
  },
  imageNavBar: {
    position: 'absolute',
    bottom: -24,
    width: Dimensions.get('window').width, // Largura total da tela
    zIndex: 0,
  },
  btAddLembrete: {
    position: 'absolute',
    bottom: 40,
    zIndex: 1,
    width: 60,
    height: 60,
  },
  btLembrete: {
    position: 'absolute',
    left: 23,
    bottom: 20,
    zIndex: 1,
    width: 38,
    height: 38,
  },
  btLoja: {
    position: 'absolute',
    left: 80,
    bottom: 30,
    zIndex: 1,
    width: 38,
    height: 38,
  },
  btSininho: {
    position: 'absolute',
    right: 80,
    bottom: 28,
    zIndex: 1,
    width: 32,
    height: 42,
  },
  btEngrenagem: {
    position: 'absolute',
    right: 23,
    bottom: 20,
    zIndex: 1,
    width: 38,
    height: 38,
  }
});

export default App;