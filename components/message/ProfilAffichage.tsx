import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";
import { ProfilUsers } from "@/Data/ProfilUsers";

export default function ProfilAffichage(){
    return(
        <View style={styles.container}>
                {ProfilUsers.map((ProfilUsers) =>(
                    <TouchableOpacity key={ProfilUsers.id}>
                    <Image source={ProfilUsers.image} />
                    </TouchableOpacity>
                
                
                ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60
    }
})