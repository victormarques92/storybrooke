import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { useUser } from './useUser';

export const useWishList = create()(
  persist(
    (set, get) => ({
      wishLists: {},

      addToWishList: book => {
        const userId = useUser.getState().user?.id;
        if (!userId) return;

        const current = get().wishLists[userId] || [];

        if (!current.find(b => b.id === book.id)) {
          set(state => ({
            wishLists: {
              ...state.wishLists,
              [userId]: [...current, book],
            },
          }));
        }
      },

      removeFromWishList: bookId => {
        const userId = useUser.getState().user?.id;
        if (!userId) return;

        const current = get().wishLists[userId] || [];

        set(state => ({
          wishLists: {
            ...state.wishLists,
            [userId]: current.filter(b => b.id !== bookId),
          },
        }));
      },

      isInWishList: bookId => {
        const userId = useUser.getState().user?.id;
        if (!userId) return false;

        const list = get().wishLists[userId] || [];

        return list.some(book => book.id === bookId);
      },

      getWishList: () => {
        const userId = useUser.getState().user?.id;
        if (!userId) return [];

        return get().wishLists[userId] || [];
      },
    }),
    {
      name: '_storybrooke-wishlist',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
