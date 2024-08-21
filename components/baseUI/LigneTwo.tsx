import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput, Button, Share } from "react-native";

// Classe pour les commentaires
class Comment {
  constructor(public user: string, public content: string) {}
}

// Classe pour les photos avec gestion des commentaires
class Photo {
  private comments: Comment[] = [];

  constructor(public id: string, public url: string) {}

  addComment(user: string, content: string): void {
    const newComment = new Comment(user, content);
    this.comments.push(newComment);
  }

  getCommentCount(): number {
    return this.comments.length;
  }

  getComments(): Comment[] {
    return this.comments;
  }
}

export default function LigneTwo() {
  // pour les likes
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    console.log(likeCount); // Affiche le nombre de likes dans la console
  };

  // pour les commentaires
  const [photo] = useState(new Photo('1', 'https://example.com/photo.jpg'));
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(photo.getComments());
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = () => {
    photo.addComment('User1', newComment);
    setComments(photo.getComments());
    setNewComment('');
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  //pour partager les post
  const handleShare = async () =>{
    try{
        const result = await Share.share({
            message:"publication pargtager"
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                //partager avec une activite specifique
                console.log(result.activityType);
              
            } else{
                    console.log("publication bien partagee");
                }
            }
         else if (result.action === Share.dismissedAction) {
            console.log("partage avorte");
            
         }
            
        } catch(error){
            console.error("erreur");
            
        }

  };

  return (
    <View>
      {[...Array(3)].map((_, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.sectionProf}>
            <Image source={require("@/assets/images/profile.jpg")} style={styles.imageProfile} />
            <TouchableOpacity>
              <Text style={styles.userName}>Christian Dior</Text>
              <Text>@christiandior23</Text>
            </TouchableOpacity>
          </View>
          <Text>Aujourd'hui, on se fait plaisir avec ce délice fait maison. Rien ne vaut la satisfaction de déguster
            un plat préparé avec amour et passion. La cuisine, c'est plus qu'une simple nourriture, c'est un voyage
            gustatif. 🍛❤️</Text>
          <Text style={{ color: "blue" }}>#BonAppétit</Text>
          <View>
            <Image source={require("@/assets/images/food1.jpg")} style={styles.imges} />
          </View>
          <View style={styles.reactionSection}>
            <TouchableOpacity style={styles.reactionIcones} onPress={handleLike}>
              <View style={styles.iconWithCount}>
                <Ionicons name={liked ? "heart" : "heart-outline"} size={30}
                  color={liked ? "red" : "black"} />
                <Text style={styles.likeCount}>{likeCount}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reactionIcones} onPress={handleShare}>
              <Ionicons name="git-compare-outline" size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleComments}>
              <View style={styles.iconWithCount}>
                <Ionicons name="reader-outline" size={30} />
                <Text style={styles.likeComment}>{photo.getCommentCount()}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {showComments && (
            <View>
              <View style={styles.commentSection}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Ajouter un commentaire..."
                  value={newComment}
                  onChangeText={setNewComment}
                />
                <Button title="Envoyer" onPress={handleAddComment} />
              </View>

              <View style={styles.commentList}>
                {comments.map((comment, commentIndex) => (
                  <View key={commentIndex} style={styles.comment}>
                    <Text style={styles.commentUser}>{comment.user}</Text>
                    <Text>{comment.content}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 300,
    maxHeight: 800,
    width: "100%",
    marginHorizontal: 5,
    marginVertical: 3,
    paddingTop: 5,
    marginBottom: 8,
    backgroundColor: "#FFFF",
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 15,
    alignContent: "space-around",
    alignSelf: "center"
  },
  sectionProf: {
    flexDirection: "row",
    width: 300,
    height: 50
  },
  iconWithCount: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeCount: {
    marginLeft: 5,
    fontSize: 16,
    color: "black"
  },
  likeComment: {
    flexDirection: "row",
    fontSize: 16,
    color: "black"
  },
  reactionIcones: {
    marginRight: 60,
  },
  reactionSection: {
    flexDirection: "row",
    alignContent: "space-between",
    marginHorizontal: 20,
    justifyContent: "center",
    alignSelf: "center"
  },
  userName: {
    justifyContent: "center",
    fontWeight: "bold",
    flexDirection: "column"
  },
  imageProfile: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 15,
    resizeMode: "cover"
  },
  imges: {
    height: 300,
    width: 400,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    height:30
  },
  commentList: {
    marginTop: 10,
    alignSelf:"center"
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  commentUser: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});
