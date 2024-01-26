import React from "react";

type DefaultContainerProps = {
  table: string;
  orderName: string;
  children: JSX.Element|JSX.Element[];
};

/**
 * A container that surrounds content with the page header used by most pages
 */
export default function DefaultContainer(props: DefaultContainerProps) {
  return (
    <>
      <header>&#127866; Code City Beer &#127866;</header>
      <div className="order-info">
        Table: {props.table}, Name: {props.orderName}
      </div>
      {props.children}
    </>
  );
}