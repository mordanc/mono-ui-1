import React from "react";

export function MonoCard(props: any) {
  return (
    <div className="bg-greylight flex flex-col items-center p-2">
      {props.children}
    </div>
  );
}
