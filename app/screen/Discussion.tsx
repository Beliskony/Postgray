import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";
import { Utilisateurs } from "@/Data/DonneeType";
import ProfilAffichage from "@/components/message/ProfilAffichage";
import People from "@/components/message/People";

export default function Discussion(){
    return(
        <View>
            <ProfilAffichage></ProfilAffichage>
            <People></People>
        </View>
    )
}