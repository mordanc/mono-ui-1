import React from "react";
import { MonoButton } from "./MonoButton";

export function MonoSidebar({
  buttons,
  additionalStyles,
}: {
  buttons: JSX.Element[];
  additionalStyles?: string;
}) {
  return (
    <div
      className={`h-full border-white border flex flex-col px-4 pt-6 ${additionalStyles}`}
      style={{ minWidth: "225px" }}
    >
      {buttons}
    </div>
  );
}
