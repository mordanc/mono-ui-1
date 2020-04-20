import React from "react";
import { MonoButton } from "./MonoButton";
import { MonoWindow } from "./MonoWindow";
// @ts-ignore
import { Scrollbars } from "react-custom-scrollbars";

export function MonoApp(props: any) {
  const { leftSidebar, rightSidebar, contentPanes, mainContentColumns } = props;

  const display = contentPanes.map((pane: any) => {
    return <MonoWindow content={pane.content} width={pane.width} />;
  });

  return (
    <div className="h-screen bg-greydark w-screen flex text-white">
      {leftSidebar && leftSidebar}
      <div className="flex flex-col w-full">
        <div
          className={`h-16 flex items-center border border-red-500 justify-between px-4`}
        >
          <h1>Topbar</h1>
          <MonoButton text="Test Button" disable={false} func={() => {}} />
        </div>

        <div
          className={`w-full h-full border border-blue-500 grid grid-cols-1 lg:grid-cols-${
            mainContentColumns
              ? mainContentColumns
              : contentPanes.length >= 4
              ? Math.floor(contentPanes.length / 2)
              : contentPanes.length
          } p-4 gap-4`}
        >
          {display}
        </div>
      </div>
      {rightSidebar && rightSidebar}
    </div>
  );
}
