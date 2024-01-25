import React from "react";

type DefaultContainerProps = {
  table: string;
  orderName: string;
  children: JSX.Element[];
};

/**
 * Container with the default app header used for most views
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