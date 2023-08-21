import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMappedRepository } from "@common/types";
import { mapRepositories } from "@common/helpers";

export const useDetailedRepository = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [repository, setRepository] = useState<IMappedRepository | null>(null);
  const { owner, repo } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((response) => response.json())
      .then((data) => {
        const mappedData = mapRepositories([data])[0];
        setRepository(mappedData);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [owner, repo]);

  return { loading, error, repository };
};
