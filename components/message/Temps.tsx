import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Temps (){
    return (
        <View style={styles.container}>
            <Text style={styles.textestyle}>12:09 PM</Text>
            <Text style={styles.textestyle}>12:09 PM</Text>
            <Text style={styles.textestyle}>12:09 PM</Text>
            <Text style={styles.textestyle}>12:09 PM</Text>
            <Text style={styles.textestyle}>12:09 PM</Text>
            <Text style={styles.textestyle}>12:09 PM</Text>
            <Text style={styles.textestyle}>12:09 PM</Text>
            <Text style={styles.textestyle}>12:09 PM</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        flex:1,
        width:30,
        justifyContent:"center"
    },

    textestyle: {
        fontSize:14,
        fontWeight:"bold",
        color:"#0000"
    }
})