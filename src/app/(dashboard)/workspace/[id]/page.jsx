import React from "react";
import TodoTaskComponent from "../../_components/TodoTask";
import { getTasksByWorkspaceId } from "@/service/task-service";

export default async function workspacepage({ params }) {
  console.log("paramss", await params.id);
  const id = await params.id;


  const data = await getTasksByWorkspaceId(id);


  console.log("datadata",data)


  return (
    <div className="bg-white">
      <TodoTaskComponent datas={data}/>
    </div>
  );
}
