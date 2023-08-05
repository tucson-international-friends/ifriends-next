import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: "tucson-international-friends",
      private_key: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

export default admin.firestore();
