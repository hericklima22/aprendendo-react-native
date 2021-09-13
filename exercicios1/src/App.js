import React from 'react' //sempre que usar um jsx eu preciso importar o React
import { StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// import MinMax from "./components/MinMax"
// import Primeiro from './components/Primeiro'
// import CompPadrao, {Comp1, Comp2} from './components/Multi'
// import Random from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/indireta/Pai'
// import Contadorv2 from './components/contador/contadorv2'
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';


export default () => (
  <SafeAreaView style={style.App}>
    
    <Familia>
      <Membro nome="Wesley" sobrenome="Vaz"></Membro>
      <Membro nome="Rosangela" sobrenome="Lima"></Membro>
      <Membro nome="Herick" sobrenome="Lima"></Membro>
      <Membro nome="Herica" sobrenome="Vaz"></Membro>
    </Familia>

    
    {/* <ParImpar num={2}/> */}
    {/* <Diferenciar /> */}

    {/* <Contadorv2></Contadorv2> */}
    
    
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
  </SafeAreaView>
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
