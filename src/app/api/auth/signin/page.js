"use client"
import { XIcon } from '@heroicons/react/solid';
import { getProviders,signIn } from 'next-auth/react'
import React from 'react'

async function  page ()  {
    const provider =  await getProviders();
  return (
    <div className="flex justify-center mt-32 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
        alt="twitter image inside a phone"
        className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex"
      />
      <div className="">
        <div className="flex flex-col items-center">
          <img
            className="w-36 object-cover"
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
            alt="twitter logo"
          />
          <p className="text-center text-sm italic my-10">
            This app is created for learning purposes
          </p>
          <button
            onClick={()=> {signIn('google',{callbackUrl:'/'})}}
            className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default page
{
  /* <button
        onClick={() => signIn('google',{ callbackUrl: "/" })}
        className="border bg-blue-600 flex items-center justify-center"
      >
        Login
      </button> */
}