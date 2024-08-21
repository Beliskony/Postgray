import { UserSelect } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon";

// Supposez que ces types sont corrects pour InstaStory
export interface IUserStory {
    user_id: number;
    user_image: string;
    user_name: string;
    stories: Story[];
}

export type Story = {
    story_id: number,
    story_image: string,
    swipeText: string,
    finish: number, // 0: not watched, 1: watched
};

export interface Utilisateurs extends Partial<IUserStory> {
    userName: string;
    passWord: string;
    preNom?: string;
    email: string;
    storyUserId?: number; // Changez 'Number' en 'number' pour utiliser le type primitif TypeScript
    stories?: Story[];
}

export interface Connexion {
    mail: string,
    password: string
}

export interface Inscription {
    mail: string,
    nom: string,
    preNom?: string,
    password: string
}


 export const utilisateurs:Utilisateurs[]= [
    
    {userName:"Axel", passWord:"Axel123456", email:"nguessan@gmail.com", stories:[
        {
            story_id: 1,
            story_image: "https://i.pinimg.com/736x/79/96/3f/79963f23246cc89131d04b35667e1fb4.jpg",
            swipeText: 'Swipe Up',
            finish: 0,
        },
        {
            story_id: 2,
            story_image: "https://i.pinimg.com/564x/58/9a/0b/589a0bdeee9c4fc3bb66ca0abb4a00d1.jpg",
            swipeText: 'Swipe Up',
            finish: 0,
        },
    ],},
    { userName: 'Alice', passWord: 'password123', email: 'alice@example.com' },
    { userName: 'Bob', passWord: 'password456', email: 'bob@example.com' },
    { userName: 'Charlie', passWord: 'password789', email: 'charlie@example.com' },
    { userName: 'David', passWord: 'password101', email: 'david@example.com' },
    { userName: 'Eve', passWord: 'password202', email: 'eve@example.com' },
    { userName: 'Frank', passWord: 'password303', email: 'frank@example.com' },
    { userName: 'Grace', passWord: 'password404', email: 'grace@example.com' },
    { userName: 'Hannah', passWord: 'password505', email: 'hannah@example.com' },
    { userName: 'Ivy', passWord: 'password606', email: 'ivy@example.com' },
    { userName: 'Jack', passWord: 'password707', email: 'jack@example.com' },
    { userName: 'Karen', passWord: 'password808', email: 'karen@example.com' },
    { userName: 'Leo', passWord: 'password909', email: 'leo@example.com' },
    { userName: 'Mona', passWord: 'password010', email: 'mona@example.com' },
    { userName: 'Nathan', passWord: 'password111', email: 'nathan@example.com' },
    { userName: 'Olivia', passWord: 'password222', email: 'olivia@example.com' },
    { userName: 'Paul', passWord: 'password333', email: 'paul@example.com' },
    { userName: 'Quincy', passWord: 'password444', email: 'quincy@example.com' },
    { userName: 'Rachel', passWord: 'password555', email: 'rachel@example.com' },
    { userName: 'Sam', passWord: 'password666', email: 'sam@example.com' },
    { userName: 'Tina', passWord: 'password777', email: 'tina@example.com' },
    { userName: 'Uma', passWord: 'password888', email: 'uma@example.com' },
    { userName: 'Victor', passWord: 'password999', email: 'victor@example.com' },
    { userName: 'Wendy', passWord: 'password000', email: 'wendy@example.com' },
    { userName: 'Xander', passWord: 'passwordabc', email: 'xander@example.com' },
    { userName: 'Yara', passWord: 'passworddef', email: 'yara@example.com' },
    { userName: 'Zane', passWord: 'passwordghi', email: 'zane@example.com' },
    { userName: 'Amelia', passWord: 'passwordjkl', email: 'amelia@example.com' },
    { userName: 'Brandon', passWord: 'passwordmno', email: 'brandon@example.com' },
    { userName: 'Chloe', passWord: 'passwordpqr', email: 'chloe@example.com' },
    { userName: 'Dylan', passWord: 'passwordstu', email: 'dylan@example.com' },
 ]
