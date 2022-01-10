import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getFirestore, collection, addDoc, doc,  updateDoc, deleteDoc, Timestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Note from "../types/note";

const firebaseConfig = {
  apiKey: "AIzaSyBLbRJXRVsFTW-CfE_ta3CH0qYLX1wV3Rg",
  authDomain: "keeper-db.firebaseapp.com",
  projectId: "keeper-db",
  storageBucket: "keeper-db.appspot.com",
  messagingSenderId: "168798363944",
  appId: "1:168798363944:web:a9be39677e7901f9a3701d"
};

const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db};


export const addDocument = async (collectionRef, doc) => {
  try {
    doc.created = Timestamp.now();
    await addDoc(collection(db, collectionRef),doc);
   } catch (err) {
       console.log(err);
   }
};

export const deleteDocument = async (id, collectionRef) => {
  try{
    const docToDelete = await app.firestore().collection(collectionRef).doc(id);
    await docToDelete.delete();
  }catch (error){
    console.log(error);
  }

};



export async function getDocuments(collectionRef){
  const snapshot = await firebase.firestore().collection(collectionRef).get();
  return snapshot.docs.map(doc => ({
          id: doc.id,
          content: doc.data().content,
          title: doc.data().title,
          created: Timestamp.now()
        }));
}

// export const getDocuments = async (collectionRef) => {
//   try{
//     const q = await query(collection(db, collectionRef), orderBy('created', 'desc'));
//     await onSnapshot(q, (querySnapshot) => {
//        querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         content: doc.data().content,
//         title: doc.data().title,
//         created: Timestamp.now()
//       }));
//     });
//
//   }catch (error){
//     console.log(error);
//   }
//
// }


export const updateDocument = async (collectionRef, id, editedDoc) => {
  const docToEdit = doc(db, collectionRef, id);

  try{
    await updateDoc(docToEdit, editedDoc);
}catch (error){
  console.log(error);
}

}




// // export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;
//
//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//
//   const snapShot = await userRef.get();
//
//   if (!snapShot.exist) {
//     const {displayName, email } = userAuth;
//     const createdAt = new Date();
//
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       })
//     } catch (e) {
//     console.log("error creating user", e.message);
//
//     }
//   }
//
//   return userRef;
// };


// export const addNote = async (newNote) => {
//   const {title, content} = newNote;
//   try {
//        await addDoc(collection(db, 'main'), {
//          title: title,
//          content: content,
//          created: Timestamp.now()
//        })
//      } catch (err) {
//        console.log(err);
//      }
// };

// export const deleteNote
//
// export const fetchSavedNotes



// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);
//
//   const batch = firestore.batch();
//   objectsToAdd.forEach( obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };


// export const convertCollectionsSnapshotToMap = (collections) => {
//   const transformedCollection = collections.docs.map(doc => {
//     const {title, items} = doc.data();
//
//     return {
//       routeName: encodeURI(title.toLowerCase()),
//       id: doc.id,
//       title,
//       items
//     };
//   });
//
//   return transformedCollection.reduce((accumulator, collection) => {
//     accumulator[collection.title.toLowerCase()] = collection;
//     return accumulator;
//   }, {});
// };

// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged(userAuth => {
//       unsubscribe();
//       resolve(userAuth)
//     }, reject);
//   });
// }


// (new Note(
//  doc.id,
//  doc.data().title,
//  doc.data().content,
//  doc.data().created
// ))


export default firebase;
