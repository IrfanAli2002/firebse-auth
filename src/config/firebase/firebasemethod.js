import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebaseconfig'
import { getDatabase, ref, set, onValue, } from "firebase/database";




const auth = getAuth(app);
const database = getDatabase(app);


// firebase Authentication methods


let signUpUser = (obj) => {

    return createUserWithEmailAndPassword(auth, obj.email, obj.password, obj.uid)

};

let logInUser = (obj) => {

    return signInWithEmailAndPassword(auth, obj.email, obj.password)


}
// firebase Authentication methods

// firebase Database methods

let sendData = (obj, nodeName, id) => {
    let refrence = ref(database, `${nodeName}/home${id ? id : ""} `)
    return set(refrence, obj)
}

let getData = (nodeName) => {

    const dbRef = ref(database, nodeName);


    return onValue(
        database, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                console.log(childData)
                // ...
            });
        },

        {

            onlyOnce: true
        });
}





// firebase Database methods


export { signUpUser, logInUser, sendData, getData }

