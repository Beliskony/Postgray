import { useState } from "react";
import { View, StyleSheet, Text, Image, Button, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';



//interface pour texte et image ensemble ou optionnel
interface PostDouble {
    text?: string; // text optionnelle
    image?: {uri:string}; //image optionnelle
}

function postcontent(post:PostDouble):void {
    const {text, image} = post;

    if (text && image) {
        //gerer les 2 a la foie
        if (text.trim() === '') {
            console.error("il ne peut etre vide");
            return;
        }
        if (!image.uri) {
            console.error("il manque l'image");
            return;
        }
        console.log('Poste avec texte et image:');
        console.log('Texte:', text);
        console.log('Image URL:', image.uri);
        // Ajouter le texte et l'image au flux de posts
    } else if (text) {
        // Gérer le poste avec uniquement du texte
        if (text.trim() === '') {
          console.error('Le texte ne peut pas être vide.');
          return;
        }
        console.log('Poste de texte:', text);
        // Ajouter uniquement le texte au flux de posts
      } else if (image) {
        // Gérer le poste avec uniquement une image
        if (!image.uri) {
          console.error('L\'URL de l\'image est manquante.');
          return;
        }
        console.log('Poste d\'image:', image.uri);
        // Ajouter uniquement l'image au flux de posts
      } else {
        console.error('Aucun contenu à poster.');
      }
}

export default function LigneDePoste() {

    const [text, setText] = useState<string>('');
    const [image, setImage] = useState<{ uri: string } | undefined>(undefined);

    // Fonction pour choisir une image depuis la galerie
    const pickImageAsync = async () => {
        // Demander la permission d'accès à la galerie
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission refusée', 'Vous devez donner la permission pour accéder à la galerie.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage({ uri: result.assets[0].uri });
        } else {
            Alert.alert('Aucune image sélectionnée', 'Vous n\'avez sélectionné aucune image.');
        }
    };

    // Fonction de gestion pour poster
    const handlePost = () => {
        postcontent({ text, image });
    };

    return(
        <View style={styles.container}>
            <View style={styles.lignable}>
                <Image source={require("@/assets/images/sukuna.jpg")} style={styles.imageProfile} />
                <TextInput placeholder="Quoi de neuf ?" placeholderTextColor={"#999"} style={styles.placeholdersizes}
                 value={text} onChangeText={setText}>

                </TextInput>
                <TouchableOpacity style={styles.posteImage} 
                onPress={pickImageAsync}> 
                    <Ionicons name="images-outline" color={"#453284"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePost} style={styles.poster}>
                  <Text style={{color:"#453284", fontSize:15, fontWeight:"bold", alignSelf:"center"}}>Poste</Text>
                    </TouchableOpacity> 
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        backgroundColor:"#FFFF",
        width:"100%"
    },

    poster:{
        borderLeftWidth:1,
        justifyContent:"center",
        width:50,
        overflow:"hidden",
        
    },

    placeholdersizes:{
        width:"100%",
        flex:1,
        marginHorizontal:10
    },

    posteImage: {
        alignSelf:"center",
        justifyContent:"center",
        paddingRight:5
    },

    lignable: {
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10,
        borderWidth:1,
        borderRadius:15,
        width:"95%"
    },


    imageProfile: {
        height:40,
        width:40,
        resizeMode:"cover",
        marginHorizontal:25,
        borderRadius:20,
        marginBottom:4,
        marginTop:4
    }
})
