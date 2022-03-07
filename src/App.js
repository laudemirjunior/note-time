import { BrowserRouter } from "react-router-dom";
import Providers from "./context";
import Router from "./routes";
import { GlobalStyle } from "./styles";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
        <Toaster />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
