import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/boot/firebase';

// 로그인 (구글)
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log('user', result.user);
}