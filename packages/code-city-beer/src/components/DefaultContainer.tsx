import React from "react";

type DefaultContainerProps = {
  table: string;
  orderName: string;
  children: JSX.Element[];
};

export default function DefaultContainer(props: DefaultContainerProps) {
  return (
    <>
      <header>&#127866; Code City Beer Tab &#127866;</header>
      <div className="tab-info">
        Table: {props.table}, Name: {props.orderName}
      </div>
      {props.children}
    </>
  );
}