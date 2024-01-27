import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga
          sint sequi, distinctio expedita molestias quas repudiandae. Dolore
          rem, odit nostrum, recusandae molestias deleniti labore possimus, ea
          soluta nisi fugit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia
          iste repellat dolorem ab dignissimos impedit quibusdam esse eius, quos
          eum cumque vel accusamus perferendis deserunt corrupti, dolore
          similique! Architecto.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
