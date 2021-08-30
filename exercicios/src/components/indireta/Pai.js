import React, { useState } from 'react'
import Filho from './Filho'
import Estilo from '../estilo'
import { Text } from 'react-native'

export default props => {
    const [num, setRandom] = useState(0)

    function exibirValor(numero) {
        setRandom(numero)
    }


    return (
        <>
            <Text style={Estilo.fonteGrande}>{num}</Text>
            <Filho 
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}