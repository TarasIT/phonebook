import React, { FC } from "react";
import { RotatingLines } from "react-loader-spinner";

export const Loader: FC = (): JSX.Element => {
  return (
    <div>
      <RotatingLines strokeColor="grey" width="25" />
    </div>
  );
};
