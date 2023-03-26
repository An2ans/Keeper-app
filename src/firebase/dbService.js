import {
  Timestamp,
  collection,
  onSnapshot,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebase";

// export const getAllDocuments = (collectionRef) => {
//   const q = query(collection(db, collectionRef), orderBy("created", "desc"));
//   const response = { success: null, docs: [], message: "" };
//   if (!q || !collectionRef) {
//     throw new Error("Unable to query this collection: " + collectionRef);
//   }
//   onSnapshot(q, (querySnapshot) => {
//     let docs = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       title: doc.data().title,
//       content: doc.data().content,
//     }));
//     if (docs.length < 1) {
//       throw new Error("no documents found");
//     }
//     console.log(docs);

//     response.docs = docs;
//     response.success = true;
//     response.message = "notes successfully fetched";

//     console.log({ response });
//   });

//   return response;
// };

export const getAllDocuments = (collectionRef) => {
  const q = query(collection(db, collectionRef), orderBy("created", "desc"));

  onSnapshot(q, (querySnapshot) => {
    let docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
    }));
    return docs;
  });
};

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
  try {
    const docToDelete = await collection(db, collectionRef).doc(id);
    await docToDelete.delete();
  } catch (error) {
    console.log(error);
  }
};

export const updateDocument = async (collectionRef, id, editedDoc) => {
  // try {
  //   const docToUpdate = await db.collection(collectionRef).doc(id);
  //   await updateDoc(docToUpdate, editedDoc);
  // } catch (error) {
  //   console.log(error);
  // }
};
