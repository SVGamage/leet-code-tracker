import { User, Role } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProfileData = {
  id: number;
  role: Role;
  email: string;
  userId: string;
};

export type State = {
  profile: ProfileData | null;
};

export type Action = {
  setProfileData: (user: User) => void;
};
export const useProfileStore = create<State & Action>()(
  persist(
    (set) => ({
      profile: null,
      setProfileData: (user: User) =>
        set((state) => ({
          profile: { ...user },
        })),
    }),
    { name: "profile-store", skipHydration: true }
  )
);
