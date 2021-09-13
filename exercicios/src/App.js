import React from 'react' //sempre que usar um jsx eu preciso importar o React
import {View, StyleSheet} from 'react-native'

// import MinMax from "./components/MinMax"
// import Primeiro from './components/Primeiro'
// import CompPadrao, {Comp1, Comp2} from './components/Multi'
// import Random from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/indireta/Pai'
import Contadorv2 from './components/contador/contadorv2'


export default () => (
  <View style={style.App}>

    <Contadorv2></Contadorv2>
    
    
    {/* <Pai /> */}



    {/* <Botao /> */}

    {/* <Contador inicial={100} passo={10} />
    <Contador /> */}

    {/* <Titulo principal="Cadastro de produto" secundario="Tela de Cadastro" /> */}


    {/* <Random min={1} max={60} />
    <Random min={1} max={60} />
    <Random min={1} max={60} />
    <Random min={1} max={60} />
    <Random min={1} max={60} />
    <Random min={1} max={60} />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View>
)

const style = StyleSheet.create({
  App: {
    backgroundColor: '#c4c4c4',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
});
