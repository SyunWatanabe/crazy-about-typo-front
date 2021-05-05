import React, { memo, VFC, ReactNode } from "react";

import Header from "../../organisms/Header";

type Props = {
  children: ReactNode;
};

const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
});

export default HeaderLayout;
