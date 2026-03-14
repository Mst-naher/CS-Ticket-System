import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar";
import CountBox from "./Components/CountBox";
import IssuesManagement from "./Components/IssuesManagement";
import { Suspense} from "react";



 const loadIssues = async() =>{
  const result = await fetch('/data.json');
  return result.json();
 }
  
function App() {
   const fetchPromise = loadIssues();
  //  console.log(fetchPromise)
  
   
  return (
    <>
      <header className="py-4">
        <Navbar> </Navbar>
      </header>

      {/* <CountBox ></CountBox> */}
      <section>
        <Suspense fallback={"Loading..."}>
          <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
        </Suspense>
      </section>
      
      <section>

      <Footer></Footer>
      </section>
    </>
  );
}

export default App;
