import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '@/boot/firebase';

const DEFAULT_PHOTO_URL = 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed='

// 로그인 (구글)
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
}

export async function logout() {
  await signOut(auth);
}  

export async function signUpWithEmail({email, password, nickname}) {
 const { user } = await createUserWithEmailAndPassword(auth, email, password);
 await updateProfile(user, {
  displayName: nickname,
  photoURL: generateDefaultPhotoURL(user.uid)
 })
 console.log(`user: ${user}`);
}

export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}