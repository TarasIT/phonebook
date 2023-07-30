import React, { FC } from "react";

const NotFoundPage: FC = (): JSX.Element => {
  return (
    <main>
      <b style={{ fontSize: 64 }}>404</b>
      <p>Sorry, we couldn't find that page :(</p>
    </main>
  );
};

export default NotFoundPage;
