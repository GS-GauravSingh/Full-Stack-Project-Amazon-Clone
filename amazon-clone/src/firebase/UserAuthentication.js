import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import firebaseConfigurations from '../firebaseConfigurations/firebaseConfigurations'

// Quality Code - Wrap functionalities inside a class.
class UserAuthenticationService {

    // Properties or Data Members of 'UserAuthenticationService' class.
    app;
    auth;

    // Behavior or Member Functions of 'UserAuthenticationService' class.
    // Constructor
    constructor() {
        // Initializes your Firebase application with the configuration object you provide.
        this.app = initializeApp(firebaseConfigurations);

        // Initialize Firebase Authentication and get a reference to the service
        this.auth = getAuth(this.app);
    }

    // Sign up new users
    async createAccount({ userName, email, password }) {

        try {
            // 'createUserWithEmailAndPassword()' will return a promise.
            const newUser = await createUserWithEmailAndPassword(this.auth, email, password);

            // Set the name of the user when account is created successfully.
            await this.updateUserProfile(userName);

            // If account created successfully, we simply call the 'login' method, so that user directly logged in to our application.
            if (newUser) {
                // If newUser is not null, it means account created successfully.
                // Login
                return await this.signIn({ email, password });
            }
            else {
                return newUser;
            }
        } catch (error) {
            throw error;
        }
    }

    // Sign in existing users
    async signIn({ email, password }) {
        try {
            const existingUser = await signInWithEmailAndPassword(this.auth, email, password);
            return existingUser;
        } catch (error) {
            throw error;
        }
    }

    // Is user already logged in or not.
    async getCurrentUser() {
        try {
            return await new Promise((resolve, reject) => {
                onAuthStateChanged(this.auth, (user) => {
                    if (user) {
                        // User is signed in
                        resolve(user)
                    }
                    else {
                        // User is signed out
                        reject("User is Signed Out")
                    }
                })
            })
        } catch (error) {
            throw error
        }
    }

    // Update User Profile
    async updateUserProfile(userName) {
        try {
            await updateProfile(this.auth.currentUser, {
                displayName: userName
            })

        } catch (error) {
            throw error;
        }
    }

    // Sign Out or Log Out a user.
    async signOut() {
        try {
            // Sign-out successful.
            await signOut(this.auth);
        } catch (error) {
            // An error happened.
            throw error;
        }
    }

}

// Object Creation.
const userAuthService = new UserAuthenticationService();
export default userAuthService;

