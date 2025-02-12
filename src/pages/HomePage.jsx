import React from "react";

import PageContent from "../layout/PageContent";
import NewCollection from "../components/NewCollection";
import ClassicCollection from "../components/ClassicCollection";  
import EditorsPick from "../components/EditorsPick";
import BestsellerProducts from "../components/BestsellerProducts";

export default function HomePage() {
  return (
    <div className="">
      <PageContent>
      <NewCollection></NewCollection>
      <EditorsPick></EditorsPick>
      <BestsellerProducts></BestsellerProducts>
      <ClassicCollection></ClassicCollection>
      </PageContent>
    </div>
  );
}