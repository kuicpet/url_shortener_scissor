import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = (set: any) => ({
  userProfile: null,
  registerUser: (user: any) => set({ userProfile: user }),
  loginUser: (user: any) => set({ userProfile: user }),
  logoutUser: () => set({ userProfile: null }),
});

const useAuthStore = create(persist(authStore, { name: 'auth' }));

export default useAuthStore;
