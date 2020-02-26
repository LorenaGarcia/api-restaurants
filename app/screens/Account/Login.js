import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export default function Login(props) {
    const { navigation } = props
    return (
        <ScrollView>
            <Image
                source={require("../../../assets/img/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewContainer}>
                <Text>Form Login...</Text>
                {/* <Text>Create Account...</Text> */}
                <CreateAccount navigation={navigation} />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.viewContainer}>
                <Text>Login Facebook...</Text>
            </View>
        </ScrollView>
    )
}

function CreateAccount(props) {
    const { navigation } = props;

    return (
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta?{" "}
            <Text style={styles.btnRegister}
                onPress={() => navigation.navigate("Register")}>
                Registrarte
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20,
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    btnRegister: {
        color: "#008080",
        fontWeight: "bold"
    },
    divider: {
        backgroundColor: "#008080",
        margin: 40,
    }
})