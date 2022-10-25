import React,{useState} from 'react'

import Paper from "@mui/material/Paper";
import { useEffect } from 'react';

const EmptaskEdit = ({infoDataTask,viewDataedit,edittrigger,viewtrigger,setviewtrigger}) => {
    const [viewData,setViewData]=useState(...viewDataedit)
    const [Updatingdata, setUpdatingdata] = useState(edittrigger);
  const [updateTaskData, setUpdateTaskData] = useState(viewData);
console.log(Updatingdata)
    const onChangeUpdate = (e) => {
        const { name, value } = e.target;
        setUpdateTaskData({ ...updateTaskData, [name]: value });
      };


      const ontaskUpdateSubmit = (e) => {
        e.preventDefault();
        console.log("emp task update ", updateTaskData);
      };
      useEffect(()=>{
        setViewData(...viewDataedit)

        setUpdatingdata(edittrigger)
      },[setViewData,setUpdatingdata,infoDataTask,viewDataedit,edittrigger])
  return (
    <div>
           <div className=" w-full ">
          <Paper elevation={8}>
            <div className="flex justify-center  px-4  ml-2">
              <div className="py-2 lg:min-w-[50%]">
                {Object.keys(viewData).map((item, index) => {
                  if (index === 0) {
                    return <div key={index}></div>;
                  }
                  if (index > 6) {
                    return <div key={index}></div>;
                  }
                  return (
                    <div key={index}>
                      <div className=" mb-1 min-h-[70px] ">
                        <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                          {infoDataTask[index]}
                        </p>
                        <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                          {Object.values(viewData)[index]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {Updatingdata ? (
                <div className="py-2 ">
                  {Object.keys(viewData).map((item, index) => {
                    if (index === 0) {
                      return <div key={index}></div>;
                    }
                    if (index < 7) {
                      return <div key={index}></div>;
                    }
                    return (
                      <div key={index}>
                        <div className=" mb-1 min-h-[70px]">
                          <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                            {infoDataTask[index]}
                          </p>
                          <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                            {Object.values(viewData)[index]}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                     <div >
          <button
                        className="inline-block   px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             onClick={()=>{setviewtrigger(!viewtrigger)}}  >
                        close
                      </button>
                    </div>
                </div>
              ) : (
                <div className="py-2 ">
                  <form
                    method="GET"
                    id="my_form2"
                    onSubmit={ontaskUpdateSubmit}
                  >
                    {Object.keys(viewData).map((item, index) => {
                      if (index === 0) {
                        return <div key={index}></div>;
                      }
                      if (index === 7) {
                        return (
                          <div key={index} className=" mb-1 min-h-[70px]">
                            <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                              {infoDataTask[index]}
                            </p>
                            <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                              <textarea
                                id="empremarks"
                                name="empremarks"
                                type="text"
                                rows="3"
                                cols="30"
                                defaultValue={Object.values(viewData)[index]}
                                form="my_form2"
                                placeholder={infoDataTask[index]}
                                onChange={(e) => {
                                  onChangeUpdate(e);
                                }}
                                className="resize-none border-amber-800 rounded-md border-2 max-w-[100px] lg:min-w-[200px] md:min-w-[200px]"
                                maxLength="70"
                              ></textarea>
                            </p>
                          </div>
                        );
                      }
                      if (index < 8) {
                        return <div key={index}></div>;
                      }

                      if (index === Object.keys(viewData).length - 1) {
                        return (
                          <div key={index} className=" mb-1 min-h-[70px]">
                            <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                              {infoDataTask[index]}
                            </p>
                            <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex  max-w-[300px] px-3 py-1">
                              {Object.values(viewData)[index]}
                            </p>
                          </div>
                        );
                      }
                      return (
                        <div key={index}>
                          <div className=" mb-1 min-h-[70px]">
                            <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                              {infoDataTask[index]}
                            </p>
                            <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                              <input
                                id={Object.keys(viewData)[index]}
                                type="text"
                                name={Object.keys(viewData)[index]}
                                defaultValue={Object.values(viewData)[index]}
                                form="my_form2"
                                placeholder={infoDataTask[index]}
                                size="12"
                                onChange={(e) => {
                                  onChangeUpdate(e);
                                }}
                                className="resize-none border-amber-800 rounded-md border-2 max-w-[100px] md:min-w-[200px] lg:min-w-[200px] p-2"
                              />
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    <div className='flex space-x-2 justify-start -ml-20' >
                      <button
                        type="submit"
                        form="my_form2"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    
                        onClick={()=>{setviewtrigger(!viewtrigger)}}>
                        Submit
                      </button>
                      
          <button
                        className="inline-block   px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             onClick={()=>{setviewtrigger(!viewtrigger)}}  >
                        close
                      </button>
                    </div>
                  
                  </form>
                </div>
              )}
            </div>
          </Paper>
        </div>
    </div>
  )
}

export default EmptaskEdit



