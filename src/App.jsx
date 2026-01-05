import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar";
import CountBox from "./Components/CountBox";
import IssuesManagement from "./Components/IssuesManagement";
import { Suspense } from "react";


 const fetchIssues = async() =>{
  const result = await fetch('/data.json');
  return result.json();
 }

  
function App() {
   const fetchPromise = fetchIssues();
   
   
  return (
    <>
      <Navbar> </Navbar>
      <CountBox></CountBox>
      <Suspense fallback={"Loading..."}>
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
