import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <>
            <Text style={Estilo.fonteGrande}>{props.a}</Text>
            <Text style={Estilo.fonteGrande}>{props.b}</Text>
        </>
    )
}