import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import InstaStory, { Story } from "react-native-insta-story/src/Story";
import { utilisateurs, Utilisateurs } from "@/Data/DonneeType"; // Assurez-vous que cela est correct
import { IUserStory } from "@/Data/DonneeType";

export default function LigneOne() {
    const router = useRouter();
    
    const userStories: IUserStory[] = utilisateurs.map((user, index) => ({
        user_id: index + 1, // Vous pouvez générer un ID unique ou en utiliser un existant
        user_image: "assets/images/Gojo.jpg", // Remplacez par l'image réelle de l'utilisateur
        user_name: user.userName,
        stories: user.stories || [], // Si l'utilisateur n'a pas de stories, on met un tableau vide
    }));
    
    // Ensuite, utilisez 'userStories' où c'était nécessaire

    // Gestion des stories vues
    const [seenStories, setSeenStories] = useState<Set<number>>(new Set());

    const updateSeenStories = ({ story: { story_id } }: { story: { story_id: number } }) => {
        setSeenStories((prevSet) => {
            const newSet = new Set(prevSet);
            newSet.add(story_id);
            return newSet;
        });
    };

    const handleSeenStories = async () => {
        const storyIds: number[] = Array.from(seenStories);
        if (storyIds.length > 0) {
            try {
                await fetch('myApi', {
                    method: 'POST',
                    body: JSON.stringify({ storyIds }),
                });
                setSeenStories(new Set()); // Réinitialiser les stories vues après envoi
            } catch (error) {
                console.error("Erreur lors de l'envoi des stories vues:", error);
            }
        }
    };

    return (
        <View style={{ width: "100%", backgroundColor: "#FFFF" }}>
            <View style={styles.container}>
                <View style={styles.containerLone}>
                    <TouchableOpacity style={styles.iconesO} onPress={() => router.push('screen/Discussion')}>
                        <Ionicons name="chatbubble" size={25} />
                    </TouchableOpacity>
                    <View style={styles.icones}>
                        <Ionicons name="search" size={25} />
                    </View>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.containerLtwo}>
                        {utilisateurs.map((user: Utilisateurs, index: number) =>
                            user.stories && user.stories.length > 0 && (
                                <TouchableOpacity key={index} style={{ justifyContent: "center", alignContent: "center", marginLeft: 10 }}>
                                    <View style={styles.stories}>
                                        <Image source={{ uri: user.stories[0].story_image }} style={styles.storyIma} />
                                    </View>
                                    <Text style={styles.storyText}>{user.userName}</Text>
                                </TouchableOpacity>
                            )
                        )}
                    </View>
                </ScrollView>
            </View>

            {/* Composant InstaStory */}
            <InstaStory
                data={userStories}
                duration={10}
                onStart={(item) => console.log(item)}
                onClose={handleSeenStories}
                onStorySeen={updateSeenStories}
                renderCloseComponent={({ item, onPress }) => (
                    <View style={{ flexDirection: 'row' }}>
                        <Button title="Share" onPress={() => console.log("Share Story")} />
                        <Button title="X" onPress={onPress} />
                    </View>
                )}
                renderTextComponent={({ item, profileName }) => (
                    <View>
                        <Text>{profileName}</Text>
                        <Text>{item.customProps?.yourCustomProp}</Text>
                    </View>
                )}
                style={{ marginTop: 30 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        marginHorizontal: 5,
        flexDirection: "column",
        overflow: "hidden"
    },
    storyIma: {
        height: 60,
        width: 60,
        resizeMode: "cover",
        borderRadius: 70
    },
    containerLone: {
        flexDirection: "row-reverse",
        alignContent: "flex-end",
        alignItems: "center",
        paddingTop: 10,
        marginBottom: 10
    },
    storyText: {
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 10
    },
    containerLtwo: {
        flexDirection: "row"
    },
    stories: {
        backgroundColor: "grey",
        borderRadius: 70
    },
    icones: {
        resizeMode: "contain",
        backgroundColor: "#FEDADA",
        height: 30,
        width: 30,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5
    },
    iconesO: {
        resizeMode: "contain",
        backgroundColor: "#FEDADA",
        height: 30,
        width: 30,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    }
});
