import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IItemFooter } from "./types";

export const ItemFooter: FC<IItemFooter> = ({ ownerName, repositoryName }) => {
  return (
    <footer>
      <Link to={`repositories/${ownerName}/${repositoryName}`}>
        Detailed page
      </Link>
    </footer>
  );
};
