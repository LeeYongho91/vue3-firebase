import { db } from 'boot/firebase';
import { addDoc, collection, getDoc, serverTimestamp, getDocs, query, where, orderBy, doc, updateDoc, deleteDoc, startAt, startAfter, limit, endBefore, setDoc, increment } from 'firebase/firestore';

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
  if(params?.sort) {
    conditions.push(orderBy(params.sort, 'desc'))
  }
  if(params?.start) {
    conditions.push(startAfter(params.start));
  }
  if(params?.limit) {
    conditions.push(limit(params.limit));
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

  const latestDoc = querySnapshot.docs[querySnapshot.docs.length -1];

  return {
    items: posts,
    lastItem: latestDoc
  };
}

export async function getPost(id) {
  const docSnap = await getDoc(doc(db, 'posts', id));
  if(!docSnap.exists()) {
    throw new Error('No such document;');
  }

  const data = docSnap.data();

  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate()
  }
}


async function incrementReadCount(id) {
  await updateDoc(doc(db, 'posts', id), {readCount: increment(1)})
}

export async function getPostDetails(id) {
  await incrementReadCount(id);
  const post = await getPost(id);
  return {
    post,
  }
}



export async function updatePost(id, data) {
  await updateDoc(doc(db, 'posts', id), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function deletePost(id) {
  await deleteDoc(doc(db, 'posts', id));
}


/**
 * 1. 게시글 좋아요
 * 2. 개시글 좋아요 취소
 * 3. 게시글 좋아요 조회
 */

export async function addLike(uid, postId) {
  await setDoc(doc(db, 'post_likes', `${uid}_${postId}`), {
    uid,
    postId,
    createdAt: serverTimestamp()
  })
}

export async function removeLike(uid, postId) {
  await deleteDoc(doc(db, 'post_likes', `${uid}_${postId}`));
}


export async function hasLike(uid, postId) {
  const docSnap = await getDoc(doc(db, 'post_likes', `${uid}_${postId}`))
  return docSnap.exists();
}

/**
 * 1. 북마크 좋아요
 * 2. 북마크 좋아요 취소
 * 3. 북마크 좋아요 조회
 */

export async function addBookmark(uid, postId) {
  await setDoc(doc(db, 'users', uid, 'bookmarks', postId), {
    createdAt: serverTimestamp()
  })
}

export async function removeBookmark(uid, postId) {
  await deleteDoc(doc(db, 'users', uid, 'bookmarks', postId));
}


export async function hasBookmark(uid, postId) {
  const docSnap = await getDoc(doc(db, 'users', uid, 'bookmarks', postId))
  return docSnap.exists();
}

export async function getUserBookmarks(uid) {
  const q = query(
    collection(db, 'users', uid, 'bookmarks'),
    orderBy('createdAt', 'desc'),
    limit(6)
  );
  const querySnapshot = await getDocs(q);

  return Promise.all(querySnapshot.docs.map(bookmarkDoc => getPost(bookmarkDoc.id)));
}