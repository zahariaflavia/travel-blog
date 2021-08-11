import * as React from "react";
import { picture, image, about, gallery } from "./layout.module.css";
const Team = ({ data }) => {
  return (
    <div className={about}>
      <h1>{data.allContentstackPage.nodes[0].modular_blocks[0].Team.header}</h1>
      <div className={gallery}>
        {data.allContentstackPage.nodes[0].modular_blocks.map((node, index) => {
          return (
            <div className={picture} key={node.Team.image.uid + index}>
              <img
                className={image}
                src={node.Team.image.url}
                alt="person-icon"
              />
              <h5>
                {node.Team.name} | {node.Team.job}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Team;
