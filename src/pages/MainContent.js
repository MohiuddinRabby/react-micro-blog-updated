import React, { useContext, useEffect } from "react";
import { MainContentContext } from "../global/MainContentContext";
import MainContentPost from "./MainContentPost";

const MainContent = () => {
  const { state, dispatch } = useContext(MainContentContext);
  useEffect(() => {
    dispatch({ type: "GET_CONTENT_DATA" });
  }, [dispatch]);
  return (
    <div>
      {state?.contentData?.map((post) => (
        <MainContentPost key={post?.id} post={post} />
      ))}
    </div>
  );
};

export default MainContent;
