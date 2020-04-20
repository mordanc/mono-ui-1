import React from "react";
// @ts-ignore
import { Scrollbars } from "react-custom-scrollbars";

export function MonoWindow({
  content,
  width,
}: {
  content: any;
  width?: number;
}) {
  return (
    <div className={`col-span-${width || 1} border border-white p-4`}>
      <Scrollbars
        style={{ width: "100%", height: "100%" }}
        autohide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        {content}
      </Scrollbars>
    </div>
  );
}
