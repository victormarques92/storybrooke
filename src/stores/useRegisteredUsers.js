import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useRegisteredUsers = create()(
  persist(
    (set, get) => ({
      registeredUsers: [],
      setNewUser: newUser => {
        const registeredUsers = get().registeredUsers;

        set({
          registeredUsers: [...registeredUsers, newUser],
        });
      },
      resetPassword: (email, newPassword) => {
        const registeredUsers = get().registeredUsers;

        const updatedUsers = registeredUsers.map(user =>
          user.email === email ? { ...user, password: newPassword } : user,
        );

        set({ registeredUsers: updatedUsers });
      },
    }),
    {
      name: '_storybrooke-registeredUsers',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
