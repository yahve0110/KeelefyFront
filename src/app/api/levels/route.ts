import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

//todo move to env 
const firebaseConfig = {
  apiKey: "AIzaSyDSpUx9bLjlodDPVLswSYy505Sijl1WalI",
  authDomain: "keelefy.firebaseapp.com",
  databaseURL: "https://keelefy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "keelefy",
  storageBucket: "keelefy.appspot.com",
  messagingSenderId: "229961092211",
  appId: "1:229961092211:web:93e621d2dd8b013f10ee06",
  measurementId: "G-3EC80GNGYE"
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GET(req) {
  try {
    const querySnapshot = await getDocs(collection(db, 'levels'));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
