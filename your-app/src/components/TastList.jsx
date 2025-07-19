import React from "react";
import { useSelector } from "react-redux";

const TastList = () => {
  const { items, filters } = useSelector((state) => state.task);
  console.log("tasks", items, filters);

  return <div></div>;
};

export default TastList;
