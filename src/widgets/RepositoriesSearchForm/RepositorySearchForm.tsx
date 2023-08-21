import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import repositoriesStore from "@common/stores/repositories";
import { useDebounce } from "@common/hooks";
import styles from "./RepositorySearchForm.module.css";

export const RepositorySearchForm = observer(() => {
  const [repositoryName, setRepositoryName] = useState("");
  const debouncedFetchRepositories = useDebounce(
    repositoriesStore.fetchRepositories,
    1000
  );

  const handleRepositoryNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepositoryName(e.target.value);
    debouncedFetchRepositories(e.target.value);
  };

  const handleCopyButtonClick = () => {
    try {
      navigator.clipboard.writeText(repositoryName);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <form className={styles["search-form"]}>
      <input
        className={styles["search-form__input"]}
        onChange={handleRepositoryNameChange}
        value={repositoryName}
        placeholder="Type your repository here"
      />
      <button
        className={styles["search-form__button"]}
        type="button"
        onClick={handleCopyButtonClick}
      >
        Copy
      </button>
    </form>
  );
});
