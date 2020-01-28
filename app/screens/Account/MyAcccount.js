import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as firebase from 'firebase'

export default function MyAccount() {
    const [login, setLogin] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            !user ? setLogin(false) : setLogin(true)
        })
    }, [])

    if (login === null) {
        return (
            <View><Text>Cargando</Text></View>
        )
    }

    if (login) {
        return (
            <View><Text>Usuario logeado</Text></View>
        )
    }

    return (
        <View>
            <Text>Usuario no logeado</Text>
        </View>
    )
}