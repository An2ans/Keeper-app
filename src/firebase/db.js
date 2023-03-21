import { app } from "./firebase";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const db = getFirestore(app);

export { db };

export const getAllDocuments = async (collection) => {
  // const collectionRef = db.collection(collection);
  // const data = await db.query(collection(db, collectionRef));
  let documents = [];

  const snapshot = await db.collection(collection).onSnapshot((docs) => {
    docs.forEach((doc) => {
      documents.push({
        id: doc.id,
        content: doc.data().content,
        title: doc.data().title,
        created: Timestamp.now(),
      });
    });
    return documents;
  });
};

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
