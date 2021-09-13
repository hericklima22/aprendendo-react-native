import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    <>
        <Text style={Estilo.fonteMedia}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
)