import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { validateConnexion } from "@/Data/Authentifi";
import { utilisateurs, Connexion } from "@/Data/DonneeType";


export default function SignIn() {
    const [email, setmail] = useState('');
    const [passWord, setpassword] = useState('')
    const router = useRouter();

    const handleConnexion = () => {
        const donne: Connexion = { mail: email, password: passWord };

        if (validateConnexion(donne)) {
            // Trouver l'utilisateur correspondant à l'email saisi
            const user = utilisateurs.find(user => user.email === email);
            if (user) {
                // Redirection vers l'écran souhaité après la connexion
                router.replace('screen/UiInterface');
            }
        } else {
            alert("Erreur, Identifiants incorrects");
        }
    };

    return(
        <ScrollView style={{backgroundColor:"#6A49FA", flex:1, height:"95%"}}>
            <View style={styles.logo}>
                 <Image source={require("../../assets/images/postgray.png")} 
                 style={styles.imag} />
            </View>
            <View style={styles.corps}>
              <Text style={styles.texte}>CONNEXION</Text>
              <View style={styles.inputText}>
                  <TextInput placeholder="E-mail" value={email} onChangeText={setmail}
                  keyboardType="email-address" autoCorrect={false} placeholderTextColor={"#999"}
                  style={styles.enAvantText}>
                  </TextInput>
                  
              </View>
              <View style={styles.inputText}>
                  <TextInput placeholder="Password" value={passWord} onChangeText={setpassword}
                  secureTextEntry placeholderTextColor={"#999"}
                  style={styles.enAvantText}>
                  </TextInput>
              </View>
              <View style={styles.bouton}>
              <Button title="Se Connecter" onPress={() => {handleConnexion();
                       if (validateConnexion({ mail: email, password: passWord })) {
                             router.replace('(tabs)/UiInterface');
                            }
                          }}
                color={"black"}/>
              </View>

              <Text style={{alignSelf:"center",paddingVertical:5, color:"white",
                 fontWeight:"bold",}}
                 >OU
                 </Text>

              <View style={styles.boutonI}>
              <Button title="Inscription"color={"black"} onPress={() => router.replace('screen/Inscription')} />
              </View>

              <TouchableOpacity>
                <Text style={styles.mdp}>Mot de passe oublier ?</Text>
                </TouchableOpacity>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create ({
    corps: {
        height:"100%",
        width:"100%",
        alignContent: "center",
        backgroundColor: "#6A49FA",
        flexDirection: "column",
    },
    
    logo: {
        margin:30,
        justifyContent:"center"
    },

    imag: {
        height:80,
        width:80,
        borderRadius:20,
        alignSelf:"center"
    },

    texte: {
        fontSize: 25,
        color: "white",
        fontStyle: "normal",
        alignSelf: "center",
        textDecorationStyle: "solid",
        fontWeight:"bold"
    },

    mdp:{
        fontSize:15,
        color:"#ffff",
        paddingLeft:200,
        paddingTop:5,
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
        shadowColor:"#453284",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 1,
        elevation: 8
    },

    enAvantText:{
        alignSelf:"center",
        width:"100%",
        textAlign:"center"
    },

    bouton:{
        width: 150,
        borderWidth:1,
        alignSelf:'center',
        marginTop:20,
        borderRadius:50,
        overflow:"hidden",
        backgroundColor:"#FFFF",
        shadowColor:"#453284",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 1,
        elevation: 8
    },
    boutonI:{
        width: 150,
        borderWidth:1,
        alignSelf:'center',
        borderRadius:50,
        overflow:"hidden",
        backgroundColor:"#FFFF",
        shadowColor:"#453284",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 1,
        elevation: 8,
        justifyContent:"center",
        alignContent:"center"
    }
})