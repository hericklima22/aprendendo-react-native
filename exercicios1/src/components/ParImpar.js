import React from 'react'
import { Text, Platform, View } from 'react-native'
import estilo from './estilo'
import Estilo from './estilo'

export default ({num}) => {
        return (
            <View>
                <Text style={Estilo.fonteGrande}>O resultado é:</Text>
                {num % 2 === 0
                    ? <Text style={Estilo.fonteGrande}>Par</Text>
                    : <Text style={Estilo.fonteGrande}>Ímpar</Text>
                }
            </View>
        )
}
