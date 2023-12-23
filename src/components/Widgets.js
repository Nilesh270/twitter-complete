"use client";
import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import News from "./Widgets/News";
import Follow from "./Widgets/Follow";
import { AnimatePresence, motion } from "framer-motion";
const Widgets = ({ newsdata, randomuser }) => {
  const [articleCnt, setarticleCnt] = useState(3);
  const [randomUserCnt, setrandomuserCnt] = useState(3);

  const UpdateNewsCnt = () => {
    setarticleCnt(articleCnt + 3);
  };

  const UpdateRandomUser = () => {
    setrandomuserCnt(randomUserCnt + 3);
  };
  return (
    <div className="xl:w-[500px] hidden lg:inline ml-8 space-y-5">
      {/* Search Bar */}
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      {/* News Section */}
      <div className="w-[90%] xl:w-[75%] bg-gray-100 rounded-xl text-gray-600 p-2 space-y-3">
        <h4 className="px-3 font-bold text-xl">What's happening...</h4>

        <AnimatePresence>
          {newsdata.slice(0, articleCnt).map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <News key={article.id} article={article} />
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          onClick={UpdateNewsCnt}
          className="text-blue-300 hover:text-blue-400 text-[16px] font-semibold px-4"
        >
          Show More
        </button>
      </div>

      {/* Follow Section */}
      <div className="w-[90%] xl:w-[75%] bg-gray-100 rounded-xl text-gray-600 p-2 space-y-3 sticky top-16">
        <h4 className="px-3 font-bold text-xl">Whom to Follow</h4>
        <AnimatePresence>
          {randomuser.slice(0, randomUserCnt).map((user) => (
            <motion.div
              key={user.login.username}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Follow user={user} />
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          onClick={UpdateRandomUser}
          className="text-blue-300 hover:text-blue-400 text-[16px] font-semibold px-4"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Widgets;
