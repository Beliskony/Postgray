import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, TextInput,TouchableOpacity,Image, ScrollView } from "react-native";



export default function EnTete (){
    return(
        <View style={styles.headerMess}>
            <View>
                <Text style={styles.titre}>Discussions</Text>
            </View>
            <View style={styles.barRecherche}>
               <Ionicons name="search-outline" size={20} style={{marginHorizontal:10,marginTop:12, color:"#999"}}/>
                <TextInput placeholder="Recherche" placeholderTextColor={"#999"} style={styles.textEntree}>
                </TextInput>
                 
                 <TouchableOpacity>
                    <Ionicons name="create-outline" size={25} style={{marginHorizontal:10,marginTop:12, color:"#999"}} />
                 </TouchableOpacity>
                
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    headerMess: {
        backgroundColor:"#6A49FA",
        height:200,
        justifyContent:"center",
        paddingTop:20
        
    },

    textEntree:{
        width:"100%",
        flex:1,
        marginHorizontal:15
        
    },

    barRecherche:{
        
        flexDirection:"row",
        alignSelf:"center",
        height:50,
        width:"80%",
        backgroundColor:"#FFFF",
        borderWidth:1.5,
        borderRadius:20,
        alignContent:"center",
        justifyContent:"center",
        verticalAlign:"middle"
    },

    titre: {
        fontWeight:"bold",
        alignSelf:"center",
        fontSize:25,
        color:"white",
        marginTop:10
    },
})