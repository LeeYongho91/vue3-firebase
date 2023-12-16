import { db } from 'boot/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export async function createPost(data) {
  const baseCollection = collection(db, 'posts');
  const docRef = await addDoc(baseCollection, {
    ...data,
    readCount: 0,
    likeCount: 0,
    commentCount: 0,
    bookmarkCount: 0,
    createdAt: serverTimestamp()
  });
  return docRef.id; 
}