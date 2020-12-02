import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Montserrat', sans-serif;
  }
  h1,h2,h3{
      font-family: 'Open Sans', sans-serif;

    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>yoooo</h1>
      <div>heyyyyy</div>
    </>
  );
}

export default App;
