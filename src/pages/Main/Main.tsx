import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./Main.module.css";
import repositoriesStore from "@common/stores/repositories";
import { RepositoriesList } from "@widgets/RepositoriesList";
import { RepositorySearchForm } from "@widgets/RepositoriesSearchForm";

export const Main = observer(() => {
  return (
    <main className={styles["main"]}>
      <RepositorySearchForm />
      <div className={styles["lists__container"]}>
        <RepositoriesList
          repositories={repositoriesStore.repositories}
          listName="Repositories list"
          onRepositoryClick={repositoriesStore.addFavorite}
        />
        <RepositoriesList
          repositories={[...repositoriesStore.favorites]}
          listName="Favorites repositories list"
        />
      </div>
    </main>
  );
});
