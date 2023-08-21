import React from "react";
import Heading from "@shared/Heading";
import { DetailedHeader } from "./components/DetailedHeader";
import { useDetailedRepository } from "./hooks";
import styles from "./Detailed.module.css";
import { DetailedMetrics } from "./components/DetailedMetrics";

export const Detailed = () => {
  const { loading, error, repository } = useDetailedRepository();

  if (loading) {
    return <Heading.H1>Loading...</Heading.H1>;
  }

  if (error) {
    return <Heading.H1>{error}</Heading.H1>;
  }

  if (!repository) {
    return <Heading.H1>Not found</Heading.H1>;
  }

  return (
    <main>
      <DetailedHeader
        logo={repository.logo}
        title={repository.fullName}
        url={repository.githubUrl}
      />
      <p className={styles["item__description"]}>{repository.description}</p>
      <DetailedMetrics stars={repository.stars} forks={repository.forks} />
    </main>
  );
};
