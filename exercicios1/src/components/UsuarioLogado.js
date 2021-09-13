import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";
import If from "./If";

export default ({ usuario = {} }) => {
    return (
        <>
        <If teste={true && Object.keys(usuario).length}>
            <Text style={Estilo.fonteGrande}>Usuário logado:</Text>
            <Text style={Estilo.fonteMedia}>
                {usuario.nome} - {usuario.email}
            </Text>
        </If>
        </>
    )
}