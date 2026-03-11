import { Suspense } from "react";
import "./App.css";
import NavBar from "./componets/Navbar/NavBar";
import PricingOptions from "./componets/PricingOptions/PricingOptions";

const pricingPromise = fetch('pricingData.json')
.then(res => res.json());

function App() {
  return (
    <>
    <hader>
      <NavBar></NavBar>
    </hader>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </main>
    <footer></footer>
      
      
      {/* <h1 className="text-7xl underline">Vite + React</h1> */}
    </>
  );
}

export default App;
