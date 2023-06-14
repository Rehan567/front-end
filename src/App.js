import { Route, Routes } from "react-router-dom"
import Rapper from "./componets/outlet/Rapper";

import Mission from "./componets/mission/Mission";
import All from "./componets/all/All.js";
import { useState } from "react";
// import LoadingBar from 'react-top-loading-bar'
import data from "./data/Data.js"
import ADDTOPICS from "./componets/addTopics/ADDTOPICS";
import Custom from "./componets/custom/Custom";
import Icp from "./componets/icp/Icp";
import Product from "./componets/product/Product";
import SelectTone from "./componets/selecttone/SelectTone";
function App() {
  const [topics, setTopics] = useState(data)
  console.log(data);
  return (
    <div className="App">

      <Routes>
        <Route element={<Rapper></Rapper>}>
          <Route path="/" element={<All topics={topics} setTopics={setTopics}></All>} />
          <Route path="/mission" element={<Mission topics={topics} setTopics={setTopics}></Mission>} />
          <Route path="/product" element={<Product topics={topics} setTopics={setTopics}></Product>} />
          <Route path="/icp" element={<Icp topics={topics} setTopics={setTopics}></Icp>} />
          <Route path="/custom" element={<Custom topics={topics} setTopics={setTopics}></Custom>} />
          <Route path="/addtopicform" element={<ADDTOPICS setTopics={setTopics}></ADDTOPICS>} />
        </Route>
        <Route path="/write/:id" element={<SelectTone topics={topics} setTopics={setTopics}></SelectTone>} />
      </Routes>
    </div>
  );
}

export default App;
