import { DataStructure } from "@/lib/types";
import { useEffect, useState } from "react";

export const useGetAllDataStructures = () => {
  const [dataStructures, setDataStructures] = useState<DataStructure[]>([]);
  const [loadingDataStructure, setLoadingDataStructure] =
    useState<boolean>(true);
  useEffect(() => {
    const getAllDataStructures = async () => {
      setLoadingDataStructure(true);
      try {
        const response = await fetch("/api/data-structure", {
          method: "POST",
        });

        if (!response.ok) {
          console.error(
            "Failed to fetch data structures:",
            await response.text()
          );
          return;
        }
        const dataStructure: DataStructure[] = await response.json();
        setDataStructures(dataStructure);
      } catch (error) {
        console.error("Error fetching data structures:", error);
      } finally {
        setLoadingDataStructure(false);
      }
    };
    getAllDataStructures();
  }, []);
  return { dataStructures, loadingDataStructure };
};
