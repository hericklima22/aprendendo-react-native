import React from "react"
import Membro from "./Membro"
import { Text } from "react-native"

export default props => {
    return (
        <>
            <Text>Membros da familia</Text>
            {props.children}
        </>
    )
}