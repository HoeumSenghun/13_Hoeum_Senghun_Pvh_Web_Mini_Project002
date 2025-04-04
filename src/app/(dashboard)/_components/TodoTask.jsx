"use client"

import CardComponent from "@/components/card"
import { Star } from "lucide-react"


function TodoTaskComponent({datas}) {
  console.log("dataBosNh",datas)
 
    
  return (
    <div className='container min-h-[600px]'>
      <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{}</h1>
        <button className="rounded-full p-1 hover:bg-gray-100">
          <Star className="h-6 w-6 text-gray-400 hover:text-yellow-400" />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Not Started Column */}
        <div>
          <div className="border-b-2 border-[#F96666] pb-2">
            <h2 className="text-lg font-medium text-[#F96666]">Not Started</h2>
          </div>
          <div className="mt-4 space-y-4">
            {/* {notStartedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))} */}
            <CardComponent datas={datas}/>
          </div>
        </div>

        {/* In Progress Column */}
        <div>
          <div className="border-b-2 border-[#4379F2] pb-2">
            <h2 className="text-lg font-medium text-[#4379F2]">In Progress</h2>
          </div>
          <div className="mt-4 space-y-4 ">
            {/* {inProgressTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))} */}
            <CardComponent datas={datas}/>
          </div>
        </div>

        {/* Finished Column */}
        <div>
          <div className="border-b-2 border-[#009990] pb-2">
            <h2 className="text-lg font-medium text-[#009990]">Finished</h2>
          </div>
          <div className="mt-4 space-y-4 ">
            {/* {finishedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))} */}
            <CardComponent datas={datas}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TodoTaskComponent
