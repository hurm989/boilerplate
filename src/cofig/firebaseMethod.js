import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
    onChildAdded,
    get,
    child,
    remove,
} from "firebase/database";
import app from "./firebBaseCongi";

const database = getDatabase(app);

const auth = getAuth(app);
const dbRef = ref(database);

// --------------------------------------Password Authentication ---------------------------------------------------


let signUp = (obj) => {
    return createUserWithEmailAndPassword(auth, obj.email, obj.password)
}


let logIn = (obj) => {
    return signInWithEmailAndPassword(auth, obj.email, obj.password)
}

// ---------------------------------------------database--------------------------------------------------


let sendData = function (obj, nodeName, id) {

    if (!id) {
        console.log(obj)
        let postListRef = ref(database, nodeName)
        obj.id = push(postListRef).key
        console.log(obj.id)
    }
    let newpostListRef = ref(database, `${nodeName}/${obj.id ? obj.id : id ? id : ""}`)
    // newpostListRef=push(newpostListRef)
    return set(newpostListRef, obj)
}


let getData = async (nodeName, id) => {
    console.log(nodeName,id)
    return new Promise((resolve, reject) => {
        get(child(dbRef, `${nodeName}/${id ? id : ""}`))
            .then((snapshot) => {
                console.log(snapshot)
                console.log(snapshot.exists());
                if (snapshot.exists()) {
                    console.log(nodeName);
                    let arr;
                    if (id) {
                        arr = snapshot.val();
                        resolve(arr);
                    } else {
                        console.log(snapshot)
                        arr = Object.values(snapshot.val());
                        resolve(arr);
                    }
                } else {
                    reject("No Data");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    });
}

// let deleteData = (nodeName, id) => {
//   const refrence = ref(database, nodeName + "/" + id);
//   return remove(refrence);
// };
// -----------------------------export---------------------------------------
export { getData,signUp,sendData,logIn }