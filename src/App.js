import Header from "./components/header/Header";
import ListCard from "./components/listCard/ListCard";
import { JobsProvider } from "./context/JobsContext";
import StylesGlobal from "./helpers/getStylesGlobales";

function App() {
  return (
    
    <>
      <StylesGlobal/>
      <Header/>
      <JobsProvider>
        
      <ListCard/>
      </JobsProvider>
    </>
  );
}

export default App;
