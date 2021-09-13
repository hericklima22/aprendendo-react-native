import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import ContadorBotoes from './contadorBotoes'
import ContadorDisplay from './contadorDisplay'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)
    
    return (
        <>
            <Text style={Estilo.fonteGrande}>
                Contador
            </Text>
            <ContadorDisplay num={num}></ContadorDisplay>
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
}