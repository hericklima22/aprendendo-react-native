import React from 'react'; //sempre que usar um jsx eu preciso importar o React
import {View, StyleSheet} from 'react-native';

import MinMax from "./components/MinMax";
import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';

export default () => (
  <View style={style.App}>
    <MinMax min={3} max={20} />
    <MinMax min={5} max={94} />
    {/* <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    backgroundColor: '#c4c4c4',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
});
