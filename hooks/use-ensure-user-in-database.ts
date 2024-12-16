import { useEffect } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const useEnsureUserInDatabase = (
  user: KindeUser | null,
  isAuthenticated: boolean,
) => {
  useEffect(() => {
    const ensureUserInDatabase = async () => {
      if (!user || !user.email) return;

      try {
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            userId: user.id,
          }),
        });

        if (!response.ok) {
          console.error("Failed to upsert user:", await response.text());
        }
      } catch (error) {
        console.error("Error ensuring user in database:", error);
      }
    };

    if (isAuthenticated) {
      ensureUserInDatabase();
    }
  }, [isAuthenticated, user]);
};
