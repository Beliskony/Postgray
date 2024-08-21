import LigneDePoste from "@/components/baseUI/LigneDePoste";
import LigneOne from "@/components/baseUI/LigneOne";
import LigneTwo from "@/components/baseUI/LigneTwo";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

export default function SplashScreen(){
    return(
        <ScrollView style={{marginTop:20,paddingTop:30}}>
        <View style={styles.container}>
            <LigneOne></LigneOne>
            <LigneDePoste></LigneDePoste>
            <LigneTwo></LigneTwo>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container : {
        height: "97%",
        backgroundColor: "#FEDADA",
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"column"
    }
}
)
