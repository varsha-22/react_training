import React from "react";

const TextField = props => {
  const { isError, style, ...rest } = props;
  return (
    <div>
      <input {...rest} style={style} />
      <p>{isError}</p>
    </div>
  );
};

export default TextField;
