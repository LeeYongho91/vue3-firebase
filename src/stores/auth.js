import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useLocalStorage, StorageSerializers } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
  const user = useLocalStorage('auth/user', null, {
    serializer: StorageSerializers.object
  })
  const isAuthenticated = computed(() => !!user.value);
  const uid = computed(() =>  user.value?.uid || null );

  const setUser = userData => {
    if(userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified
      }
    } else {
      user.value = null;
    }
  };

  const hasOwnContent = (contentUid) => {
    if(!isAuthenticated.value) return false;
    return contentUid === uid.value;
  }

  return {
    user,
    uid,
    isAuthenticated,
    setUser,
    hasOwnContent
  }
})