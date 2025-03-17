import React from "react";
import Header from "./Header";
import SkilledProfessionals from "./SkilledProfessionals";
import Footer from "./Footer";
import WhoWeServe from "./WhoWeServe";

const App: React.FC = () => {
  return (
    <div>
      <Header />
       <WhoWeServe/>
       <SkilledProfessionals/>
       <Footer/>
   
    </div>
  );
};

export default App;
