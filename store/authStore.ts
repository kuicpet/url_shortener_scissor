import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = (set: any) => ({
  userProfile: null,
  loginUser: (user: any) => set({ userProfile: user }),
});

const useAuthStore = create(persist(authStore, { name: 'auth' }));

export default useAuthStore;
