import React from 'react'
import { Text } from 'react-native'

import Filho from './Filho'

export default props => {
    let x = 13
    let y = 100
    return (
        <>
            <Filho a={x} b={y} />
            <Filho a={11} b={14} />
        </>
    )
}