import EnTete from "@/components/message/EnTete";
import People from "@/components/message/People";

import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";


export default function MessagesUi(){
    return(
    <ImageBackground source={require("@/assets/images/messageWall.jpg")} style={styles.fondEcran}>
        <View>
           <EnTete></EnTete>
           <People></People>
        </View>
        
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    fondEcran:{
        height:"100%",
        width:"100%",
        flex:1,
        resizeMode:"cover",
        
    }
}
)