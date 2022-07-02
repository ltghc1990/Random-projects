// this is going to be focused on  interactiveComments
import { initializeApp } from "firebase/app";
import {
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  collection,
  getFirestore,
} from "firebase/firestore";

import { useQuery } from "react-query";

const firebaseConfig = process.env.FIREBASE_CONFIG;

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const collectionRef = collection(db, "InteractiveComments");

console.log(collectionRef);

//  make a react query hook to fetch  the comments

const createComment = () => {};
