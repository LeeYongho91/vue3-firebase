import { db } from 'boot/firebase';
import { addDoc, collection, getDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';

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

export async function getPosts(params) {
 
  // const querySnapshot = await getDocs(collection(db, "posts"));
  // const posts = querySnapshot.docs.map(docs => {
  //   const data = docs.data();
  //   return {
  //     ...data,
  //     id:docs.id,
  //     createdAt: data.createdAt?.toDate(),
  //   };
  // });
  // console.log(posts);
  // return posts;

  const conditions = [];
  if(params?.category) {
    conditions.push(where('category', '==', params?.category))
  }
  if(params?.tags && params?.tags.length > 0) {
    conditions.push(where('tags', 'array-contains-any', params?.tags))
  }

  const q = query(collection(db, 'posts'), ...conditions);
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(docs => {
    const data = docs.data();
    return {
      ...data,
      id: docs.id,
      createdAt: data.createdAt?.toDate(),
    };
  });
  return posts;
}