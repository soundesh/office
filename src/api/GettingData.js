import { useState, useEffect } from "react";
function GettingData() {
  const [Data, setData] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    // const getData = async () =>{
    //     const res = await axios.get('/api/')
    //     setData(res.data)
    // }
    // getData()
  }, [callback]);
  return {
    Data: [Data, setData],
    callback: [callback, setCallback],
  };
}

export default GettingData;
