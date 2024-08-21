import { useState } from "react";
import React from "react";
import { View, TextInput,Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import { validateInscription } from "@/Data/Authentifi";
import { router} from "expo-router";


export default function Inscri(){
    
    const [email, setEmail] = useState('');
    const [name, setUtilisateur] = useState('');
    const [preNom, setPreNom] = useState('');
    const [password, setPassword] = useState('');

    const handleInscription = () => {
        const data = { mail: email, nom: name, prenom: preNom, password: password };
        if (validateInscription(data)) {
            alert("Inscription réussie");
            
        } else {
            alert("Échec de l'inscription");
        }
    };

    return(
        <View style={styles.corps}>
            <ScrollView style={{height:"auto"}}>
              <View style={styles.logo}>
                 <Image source={require("../../assets/images/postgray.png")} 
                 style={styles.imag}/>
              </View>

              <View>
                <Text style={styles.texte}>INSCRIVEZ-VOUS</Text>
                <View style={styles.inputText}>
                  <TextInput placeholder="E-mail" keyboardType="email-address" autoCorrect={false} 
                    placeholderTextColor={"#999"}
                    value={email} onChangeText={setEmail} style={styles.inputTes} />
                 
                </View>

                <View style={styles.inputText}>
                  <TextInput placeholder="Nom" 
                     autoCorrect={false} placeholderTextColor={"#999"}
                     value={name} onChangeText={setUtilisateur} style={styles.inputTes} />
                  
                </View>

                <View style={styles.inputText}>
                  <TextInput placeholder="Prenom" 
                      autoCorrect={false} placeholderTextColor={"#999"}
                      value={preNom} onChangeText={setPreNom} style={styles.inputTes} />
            
                </View>

                <View style={styles.inputText}>
                  <TextInput placeholder="Password" placeholderTextColor={"#999"}
                      secureTextEntry  value={password} onChangeText={setPassword} style={styles.inputTes} />
                  
              </View>
              </View>
              <View style={styles.bouton}>
            
              <Button title="S'inscrire" onPress={handleInscription => router.navigate('(tabs)/UiInterface')}
                color={"black"}/>
              </View>
              <Text style={styles.texteD}>AVEC</Text>

              <View style={styles.listIcones}>
                <TouchableOpacity>
                 <Image source={require("../../assets/images/gmail.png")}
                 style={styles.imgliste} /></TouchableOpacity>
                 <TouchableOpacity>
                 <Image source={require("../../assets/images/appleCloud.png")}
                 style={styles.imgliste} /></TouchableOpacity>
              </View>

              
              </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    corps: {
        backgroundColor:"#FFFF",
        height:"100%",
        flex:1
    },

    inputTes: {
        width:"100%",
        flex: 1,
        
    },

    imgliste: {
        height:40,
        width:40,
        borderRadius:10,
        marginHorizontal:15
    },

    listIcones: {
        flexDirection:"row",
        alignSelf:"center",
        width:200,
        justifyContent:"center"
    },

    bouton:{
        marginTop:10,
        width:150,
        alignSelf:"center",
        borderWidth:1,
        borderRadius:50,
        overflow:"hidden" 
    },

    logo: {
        margin:15,
        height:200,
        justifyContent:"center",
        shadowColor:"#453284"
    },

    imag: {
        height:120,
        width:120,
        borderWidth:1,
        borderRadius:20,
        alignSelf:"center",
        shadowColor:"#453284",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        elevation: 10
    },

    texte: {
        fontSize: 25,
        color: "black",
        alignSelf: "center",
        textDecorationStyle: "solid",
        fontWeight:"bold"
    },
    texteD: {
        fontSize: 15,
        color: "black",
        alignSelf: "center",
        textDecorationStyle: "solid",
        fontWeight:"bold"
    },

    inputText: {
        width: 300,
        height: 50,
        backgroundColor: "white",
        borderWidth:2,
        borderRadius:20,
        marginTop:10,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal:20,
        shadowColor:"#453284",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 0.8,
        elevation: 8
    },
})