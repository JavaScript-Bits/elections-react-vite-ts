import { useCallback, useEffect, useState } from "react";
import { Results } from "../types/types";
import axios from "../utils/axios";

export function useGetElections() {
  const [results, setResults] = useState<Results[] | []>([]);
  const [loading, setLoading] = useState(true);

  const getElectionData = useCallback(
    () =>
      axios.get("/elections").then((response) => {
        console.log({ response });
        setResults(response.data.data);
        setLoading(false);
      }),
    []
  );

  useEffect(() => {
    getElectionData();
  }, []);

  return {
    results,
    loading,
  };
}
