import React from "react";
import RelativeList from "./RelativeList ";
import PageLayout from "./PageLayout";

const App = () => {
  const date = new Date().getFullYear();
  return (
    <div id="main">
      Do not remove the main div
      <RelativeList />
      <PageLayout
        header={<h1>Welcome to my website</h1>}
        footer={<p>&copy; {date} My Website</p>}
      >
        <p>This is the content of my website.</p>
      </PageLayout>
    </div>
  );
};

export default App;
