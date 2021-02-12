import React, { useState } from "react";
import { projects } from "./data";
import Title from "../common/Title";
import WorkItem from "./Item";
import WorksMenu from "./Menu";

const initalState = projects.filter((p) => p.type === "react");

const Works = () => {
  const [selectedProjects, setSelectedProjects] = useState(initalState);
  const [selectedType, setSelectedType] = useState("react");

  function handleMenuChange(type) {
    setSelectedProjects(projects.filter((p) => p.type === type));
    setSelectedType(type);
  }

  return (
    <div className="page" id="works">
      <Title icon={"fas fa-code"}>Master of "Hello World"</Title>

      <div className="row">
        {selectedProjects.map((item) => (
          <div key={item.sourceCodeLink}>
            <WorkItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
