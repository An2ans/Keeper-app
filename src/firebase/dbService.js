import {
  Timestamp,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "./firebase";

export const getAllDocuments = async (collectionRef) => {
  const q = query(collection(db, collectionRef), orderBy("created", "desc"));
  if (!q || !collectionRef) {
    throw new Error("Unable to query this collection: " + collectionRef);
  }
  onSnapshot(q, (querySnapshot) => {
    let docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
    }));
    if (docs.length < 1) {
      throw new Error("no documents found");
    }
    console.log(docs);
    return docs;
  });
};

// export const getAllDocuments = async (collection) => {
//   const snapshot = await db.collection(collection).get();
//   const docs = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     content: doc.data().content,
//     title: doc.data().title,
//     created: Timestamp.now(),
//   }));
//   return docs;
// };

// const getData = async () => {
//         const data = await query(collection(firestore, "test_data"));
//
//         onSnapshot(data, (querySnapshot) => {
//
//           querySnapshot.forEach((doc) => {
//             databaseInfo.push(doc.data().testData);
//             dataIds.push(doc.id)
//           });
//  }};

export async function getDocuments(collectionRef) {
  // const snapshot = await db.collection(collectionRef).get();
  // return snapshot.docs.map((doc) => ({
  //   id: doc.id,
  //   content: doc.data().content,
  //   title: doc.data().title,
  //   created: Timestamp.now(),
  // }));
}

export const addDocument = async (collectionRef, doc) => {
  // try {
  //   doc.created = Timestamp.now();
  //   await addDoc(collection(db, collectionRef), doc);
  // } catch (err) {
  //   console.log(err);
  // }
};

export const deleteDocument = async (id, collectionRef) => {
  // try {
  //   const docToDelete = await db.collection(collectionRef).doc(id);
  //   await docToDelete.delete();
  // } catch (error) {
  //   console.log(error);
  // }
};

export const updateDocument = async (collectionRef, id, editedDoc) => {
  // try {
  //   const docToUpdate = await db.collection(collectionRef).doc(id);
  //   await updateDoc(docToUpdate, editedDoc);
  // } catch (error) {
  //   console.log(error);
  // }
};
