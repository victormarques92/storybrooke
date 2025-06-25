import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useUser = create()(
  persist(
    set => ({
      user: undefined,
      setUser: data => set({ user: data }),
      logout: () => set({ user: undefined }),
    }),
    {
      name: '_storybrooke-user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
