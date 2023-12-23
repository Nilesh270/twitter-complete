"use client";

import Feed from "@/components/Feed";
import Post from "@/components/Feed/Post";
import Sidebar from "@/components/Sidebar";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import Comments from "@/components/Comments";

const page = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "posts", id), (snapshot) => {
      setPost(snapshot);
    });
  }, [db, id]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  return (
    <main className="flex min-h-screen mx-auto">
      <Sidebar />

      <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[650px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex px-2 py-3 top-0 z-50 border-b border-gray-200 sticky bg-white">
          <div
            onClick={() => router.push("/")}
            className="text-lg sm:text-xl font-bold cursor-pointer flex items-center space-x-1"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Tweet
          </div>
          <div className="hoverEffect px-0 flex items-center justify-center ml-auto w-9 h-9"></div>
        </div>
        <Post post={post} id={id} />
        {comments.length > 0 && <div>
            {comments.map((comment)=> (
                <Comments key={comment.id} commentid={comment.id} comment={comment.data()} originalPostId={id}/>
            ))
            }
        </div>}
      </div>
    </main>
  );
};

export default page;
