import Header from "./components/header/Header";
import ListCard from "./components/listCard/ListCard";
import Search from "./components/search/Search";
import { JobsProvider } from "./context/JobsContext";
import StylesGlobal from "./helpers/getStylesGlobales";

function App() {
  return (
    
    <>
      <StylesGlobal/>
      <Header/>
      <JobsProvider>
        <Search/>
      <ListCard/>
      </JobsProvider>
    </>
  );
}

export default App;
