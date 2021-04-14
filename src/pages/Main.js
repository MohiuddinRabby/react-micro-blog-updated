import React from "react";
import MainContent from "./MainContent";
import Textarea from "./Textarea";

const Main = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-4">
          <Textarea />
        </div>
        <div className="col-md-8">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Main;
