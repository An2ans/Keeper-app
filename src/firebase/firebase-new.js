const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require("./path/to/serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// REPOSITORIES //

export const createUser = async (params) => {
  const { username, password, email } = params;
  const newUser = db.collection("users").doc;
  await newUser.set({
    username,
    password,
    email,
  });
};

export const authUser = async ({ username, password }) => {
  const snapshot = await db.collection("users").get();

  snapshot.forEach((doc) => {
    if (doc.username === username) {
      if (doc.password === password) {
        return { success: true, message: "user logged in" };
      }
    } else {
      return { success: false, message: "user not found" };
    }
  });
};

// read
// const snapshot = await db.collection("users").get();
// snapshot.forEach((doc) => {
//   console.log(doc.id, "=>", doc.data());
// });

// transactions

// try {
//   await db.runTransaction(async (t) => {
//     const doc = await t.get(cityRef);

//     // Add one person to the city population.
//     // Note: this could be done without a transaction
//     //       by updating the population using FieldValue.increment()
//     const newPopulation = doc.data().population + 1;
//     t.update(cityRef, { population: newPopulation });
//   });

//   console.log("Transaction success!");
// } catch (e) {
//   console.log("Transaction failure:", e);
// }
