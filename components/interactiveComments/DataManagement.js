// this is going to be focused on  interactiveComments

import { initializeApp } from "firebase/app";
import {
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  collection,
  getFirestore,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { useQuery } from "react-query";

const firebaseConfig = process.env.FIREBASE_COMMENTS;

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//  we have multiple collections so we might need to export this
export const getCollection = (value) => {
  return collection(db, value);
};

//  make a react query hook to fetch  the comments

const createComment = () => {};

// need to get post and comments for the particular project

export const firebaseQuery = () => {
  //  need to use the where function
  // so find the prject id then make a query for all the comments and post witht he porject id?
  // lets test todoapp
};

export const getComments = async () => {
  const response = await getDocs(collectionRef);
  const data = response.docs.map((doc) => {
    return {
      docId: doc.id,
      ...doc.data(),
    };
  });

  return data;
};
