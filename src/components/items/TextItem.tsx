import React from "react";
import { useDispatch } from "react-redux";
import { AddToList } from "store/list";

function TextItem({
  name,
  val,
  type,
}: {
  name: string;
  val: string;
  type: "email" | "text";
}) {
  const dispatch = useDispatch();
  return (
    <div
      className=" flex-row p-2 hover:cursor-pointer flex items-center"
      onClick={() => dispatch(AddToList(name))}
    >
      {type === "email" && (
        <div className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-3 flex flex-col">
          {/*  we can use a package like "@svgr/webpack" to manage our icons but since this is only one icon i'm going to use the IMG tag */}
          <img src="/image.svg" alt="icon" />
        </div>
      )}
      <div className="flex flex-col justify-between w-auto">
        <p className=" capitalize">{name}</p>
        <span className=" text-gray-400 text-sm">{val}</span>
      </div>
    </div>
  );
}

export default TextItem;
