import { useState, useEffect } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { User } from "@prisma/client";
import { useProfileStore } from "@/lib/store";

export const useGetCurrentUser = (user: KindeUser | null) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const setProfileData = useProfileStore((state) => state.setProfileData);
  useEffect(() => {
    const getCurrentUser = async () => {
      if (!user || !user.email) return;

      try {
        const response = await fetch(`/api/user/${user.email}`);

        if (!response.ok) {
          console.error("Failed to fetch user:", await response.text());
          return;
        }

        const userData = await response.json();
        setCurrentUser(userData);
        setProfileData(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getCurrentUser();
  }, [user]);
};
