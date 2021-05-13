import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";

const App: React.VFC = () => {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          body: "Noto Sans JP",
        },
      })}
    >
      <CSSReset />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
