/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { forumData } from "../db/db";

const FeedContext = createContext();

export const FeedContextProvider = ({ children }) => {
  const [feed, setFeed] = useState(forumData.posts);
  const value = { feed, setFeed };
  return <FeedContext.Provider value={value}>{children}</FeedContext.Provider>;
};
export const useFeedContext = () => useContext(FeedContext);
