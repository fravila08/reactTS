import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ContextI } from "../utilities/interfaces";
import HomeDisplay from "./HomeDisplay";
import MyListDisplay from "./MyListDisplay";
const BrowsingPage: React.FC = () => {
  const { selectedGuest, selectedTab } = useOutletContext() as ContextI;
  

  const returnDisplay = () => {
    switch (selectedTab) {
      case "tv":
        return <HomeDisplay media="tv" />;
      case "list":
        return <MyListDisplay />;
      default:
        return <HomeDisplay media="movie" />;
    }
  };

  useEffect(() => {
    returnDisplay();
  }, [selectedTab]);

  return (
    <>
      {returnDisplay()}
    </>
  );
};

export default BrowsingPage;
