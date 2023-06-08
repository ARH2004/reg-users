import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDxLwtBmMSNJ92HM3BdU3yyw_DDeblq86A",
  authDomain: "vue-register-e146c.firebaseapp.com",
  projectId: "vue-register-e146c",
  storageBucket: "vue-register-e146c.appspot.com",
  messagingSenderId: "679294892181",
  appId: "1:679294892181:web:4799c18212ccc65860439c",
  measurementId: "G-4HLV7D4H88"
};

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        throw error
      }
    }
  }
}