import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

const genNumber = (min, max) => {
    let number
    let delta = max - min + 1

    number = Math.floor(Math.random() * delta) + min

    return number
}

export default (props) => (
        <Text style={Estilo.fonteMedia}>
            O numero aleatorio gerado foi { genNumber(props.min, props.max) }
        </Text>
)
