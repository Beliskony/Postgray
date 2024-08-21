import React from "react";
import { Platform, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ProfilUsers } from "@/Data/ProfilUsers";


export default function People(){
    return(
        <View style={styles.container}>
           
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            {ProfilUsers.map((ProfilUsers) => (
                <TouchableOpacity key={ProfilUsers.id} style={styles.ranger}>
                    <Image source={ProfilUsers.image} style={styles.ImagePro} />
                    <View style={{flexDirection:"column"}}>
                      <Text style={styles.textposition}>{ProfilUsers.name}</Text>
                      <Text style={styles.messages}>{ProfilUsers.message}</Text>
                    </View>
                <View style={styles.gestion}>
                    <View style={styles.indicateurchiffre}>
                        <Text style={{alignSelf:"center", fontWeight:"bold", color:"#FFF"}}>{ProfilUsers.unread}</Text>
                    </View>
                    <View style={{height:20, marginTop:15}}>
                      <Text style={styles.textestyle}>{ProfilUsers.time}</Text>
                    </View> 
                </View>
                </TouchableOpacity> 
                  ))}

            </ScrollView>     
          </View>   
    );
}


const styles = StyleSheet.create({

    gestion:{
       width:80,
       flexDirection:"row",
       justifyContent:"space-between"
    },
    container: {
        minHeight:"100%",
        backgroundColor:"#FFFF",
        opacity:0.9,
        overflow:"hidden",
        flex:1,
        justifyContent:"space-evenly"
    },
    scrollView: {
      marginBottom: 40
    },

    indicateurchiffre: {
        height: 20,
        width:20,
        borderRadius:20,
        backgroundColor:"#453284",
        justifyContent:"center",
        marginRight:8,
        marginTop:14

    },

    textestyle: {
        fontSize:15,
        fontWeight:"bold",
        color:"Black"
    },

    messages:{
        marginHorizontal:12
    },

    textposition: {
       marginTop:5,
       marginHorizontal:10,
       fontSize:15,
       fontWeight:"bold"
    },

    ligneOne: {
        marginTop:12,
        marginRight:10,
        height:"100%",
        
    },

    ranger: {
        flexDirection:"row",
        width:"100%",
        marginVertical:5,
        marginHorizontal:5,
        alignContent:"space-between"
    },

    ImagePro: {
        height:50,
        width:50,
        borderWidth:2,
        borderRadius:30,
        resizeMode:"cover"
    }
})