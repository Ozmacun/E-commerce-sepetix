import React from "react";

import PageContent from "../layout/PageContent";
import NewCollection from "../components/NewCollection";
import ClassicCollection from "../components/ClassicCollection";  
import EditorsPick from "../components/EditorsPick";
import BestsellerProducts from "../components/BestsellerProducts";
import FeaturedPosts from "../components/FeaturedPosts";
import FirstBanner from "../components/FirstBanner";

export default function HomePage() {
  return (
    <div className="">
      <PageContent>
      <NewCollection></NewCollection>
      <EditorsPick></EditorsPick>
      <BestsellerProducts></BestsellerProducts>
      <ClassicCollection></ClassicCollection>
      <FirstBanner></FirstBanner>
      <FeaturedPosts></FeaturedPosts>
      </PageContent>
    </div>
  );
}