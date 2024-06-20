import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, RecaptchaVerifier, signInWithPhoneNumber, setPersistence, browserLocalPersistence } from 'firebase/auth'
import firebaseConfigurations from '../firebaseConfigurations/firebaseConfigurations'

// Quality Code - Wrap functionalities inside a class.
class UserAuthenticationService {

    // Properties or Data Members of 'UserAuthenticationService' class.
    app;
    auth;
    database;

    // Behavior or Member Functions of 'UserAuthenticationService' class.
    // Constructor
    constructor() {
        // Initializes your Firebase application with the configuration object you provide.
        this.app = initializeApp(firebaseConfigurations);

        // Initialize Firebase Authentication and get a reference to the service
        this.auth = getAuth(this.app);

        // Initialize Cloud Firestore and get a reference to the service
        this.database = getFirestore(this.app);
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

    // Phone Number Authentication - Code Starts from here.

    //  reCAPTCHA Verifier
    reCaptchaVerifier(btnID) {

        this.auth.languageCode = 'it';

        // See, window is a global object and here we are creating a 'key' named as 'recaptchaVerifier'.
        window.recaptchaVerifier = new RecaptchaVerifier(this.auth, `${btnID}`, {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // console.log("reCAPTCHA solved, allow signInWithPhoneNumber");
                // console.log(response);
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // console.warn("reCAPTCHA expired. Please solve it again.");
            }
        })
    }

    // Send Verification Code (OTP) to user's phone number.
    async sendVerificationCode(phoneNumber) {

        try {
            const appVerifier = window.recaptchaVerifier;

            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = await signInWithPhoneNumber(this.auth, phoneNumber, appVerifier);

        } catch (error) {
            throw error;
        }
    }

    // Sign in the user with the verification code
    async signInWithVerificationCode(code) {
        try {
            const result = await window.confirmationResult.confirm(code);
            if (result) {
                // User signed in successfully.
                return result.user;
            }
        } catch (error) {
            // User couldn't sign in (bad verification code?)
            throw error;
        }
    }

    // Storing user authentication data in firebase firestore.
    async storeDataInFirestore(userName, phoneNumber, password = "") {
        try {
            // Add a new document in collection "UsersAuthenticationData"
            // Collection Name: "UsersAuthenticationData"
            await setDoc(doc(this.database, "UsersAuthenticationData", `${phoneNumber}`), {
                userName: `${userName}`,
                phoneNumber: `${phoneNumber}`,
                password: `${password}`
            })
        } catch (error) {
            throw error;
        }
    }

    // Getting user authentication data from firebase firestore.
    async getDataFromFirestore(phoneNumber) {
        try {
            const documentRef = doc(this.database, "UsersAuthenticationData", `${phoneNumber}`);
            const documentSnap = await getDoc(documentRef);

            if (documentSnap.exists()) {
                return documentSnap.data();
            }
            else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}

// Object Creation.
const userAuthService = new UserAuthenticationService();
export default userAuthService;

