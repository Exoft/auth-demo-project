import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter, AuthProvider } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
