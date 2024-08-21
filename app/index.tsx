import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Text style={styles.titre}>BIENVENUE</Text>
         <Image source={require("@/assets/images/postgray.png")} style={styles.imga}/>
          
        <TouchableOpacity style={styles.ban}>
          <Link href={"/screen/Inscription"}>
          <Text style={styles.texte}>Inscrivez-vous</Text></Link>
        </TouchableOpacity>
         
         <View style={styles.containerD}>
        <Text style={styles.texteD}>Vous avez un compte ?</Text>
        <TouchableOpacity>
          <Link href={"/screen/SignIn"}>
          <Text style={styles.texteZ}>Login</Text></Link>
        </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:"#6A49FA",
    height:"95%",
    justifyContent:"flex-start",
    padding:30,
    flexDirection:"column"
  },

  containerD :{
    flexDirection:"row",
    margin:10
  },

  ban: {
    borderWidth:1,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    backgroundColor:"black",
    justifyContent:"center",
    marginTop:150

  },

  imga: {
    height:200,
    width:200,
    borderRadius:20,
    alignSelf:"center"
  },

  titre: {
    fontSize:40,
    fontWeight:"bold",
    color:"#FFFF",
    alignSelf:"center",
    marginBottom:50,
    paddingTop:20
  },

  texte: {
    fontSize:40,
    fontWeight:"bold",
    color:"#FFFF",
    alignSelf:"center",
    textAlign:"center"
  },
  
  texteD: {
     color:"#FFFF",
     marginHorizontal:35,
     fontSize:15
  },

  texteZ: {
    fontSize:15,
     textDecorationLine:"underline",
     fontWeight:"bold"
  }


})

