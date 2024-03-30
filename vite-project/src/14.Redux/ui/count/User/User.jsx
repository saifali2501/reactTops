import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { loginApi } from "../../../redux/feature/myuser";

export default function User() {
  let [data, setData] = useState({});

  let [inpute, setInpute] = useState({
    email:"admin@admin",
    password:"123456"
  })

  const dispatch = useDispatch();

  const myuserSlice = useSelector((state) => state.myuserSlice);
  console.log("🚀 ++++++++++++++ myuserSlice:", myuserSlice)

  useEffect(() => {
    console.log(" myuserSlice:", myuserSlice);
    setData(myuserSlice.myuser)
  }, [myuserSlice]);
  return (
    <>
      {myuserSlice.pending ? (
        <h1>Loadin...</h1>
      ) : (
        <div>
          <h1>email:{data?.email}</h1>
          <Button onClick={() => dispatch(loginApi())}>Call Api</Button>
        </div>
      )}
    </>
  );
}
