import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/boot/firebase';
import { v4 as uuidv4 } from 'uuid';

export async function uploadImage(file) {
  const filename = `images/${uuidv4()}.${getExtension(file.name)}`
  const storageRef = ref(storage, filename);
  const uploadResult = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(uploadResult.ref);
  return downloadURL;
}

function getExtension(filename) {
  return filename.split('.').pop();
}