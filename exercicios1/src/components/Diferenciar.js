import React from 'react'
import { Text, Platform } from 'react-native'
import Estilo from './estilo'

export default _ => {
    if(Platform.OS === 'android') {
        return <Text>Android</Text>
    } else if(Platform.OS === 'ios') {
        return <Text>iOS</Text>
    } else {
        return <Text>Eita</Text>
    }
    
    
}
