import React from "react";

const Container = ({children}) => {
  return (
    <div className="p-6">
      {children}
    </div>
  );
}

export default Container;