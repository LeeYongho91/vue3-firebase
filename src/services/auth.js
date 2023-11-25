import { GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import { auth } from '@/boot/firebase';

const DEFAULT_PHOTO_URL = 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed='

// 로그인 (구글)
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  return user;
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
 sendVerificationEmail();
}

export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}

export async function signInWithEmail({email, password}) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

export async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

export async function updateUserPassword(newPassword) {
  await updatePassword(auth.currentUser, newPassword);
}

export async function sendVerificationEmail() {
  await sendEmailVerification(auth.currentUser);
}