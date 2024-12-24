import { useProfileStore } from "@/lib/store";
import { useEffect } from "react";

export const useRehydrate = () => {
  useEffect(() => {
    useProfileStore.persist.rehydrate();
  }, []);
};
