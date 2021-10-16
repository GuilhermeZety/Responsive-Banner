import { Home } from "./Pages/Home";
import { Background } from "./Styles";
import { GlobalStyle } from "./styles/GlobalStyles";

export function App() {
  return (
    <Background>
      <Home />
      <GlobalStyle />
    </Background>
  );
}
