import React from "react";
import RelativeList from "./RelativeList ";
import PageLayout from "./PageLayout";
import SumCalculator from "./SumCalculator";
import './../styles/App.css';
import ButtonCounter from "./ButtonCounter";

const App = () => {
  const date = new Date().getFullYear();
  return (
    <div id="main">
      {/* {/* Do not remove the main div */}
      {/* <RelativeList /> */}
      {/* <PageLayout
        header={<h1>Welcome to my website</h1>}
        footer={<p>&copy; 2023 My Website.All rights reserved.</p>}
      >
        <p>This is the content of my website.</p>
      </PageLayout> */}
      {/* <SumCalculator/> */}
      <ButtonCounter/>
    </div>
  );
};

export default App;
