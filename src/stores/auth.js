import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  const setUser = userData => {
    console.log('userData:', userData);
    user.value = userData
  };

  return {
    user,
    setUser
  }
})