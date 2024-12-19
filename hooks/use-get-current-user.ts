import { useState, useEffect } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { User } from "@prisma/client";

export const useGetCurrentUser = (user: KindeUser | null) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

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
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getCurrentUser();
  }, [user]);

  return currentUser;
};
