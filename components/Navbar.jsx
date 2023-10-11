"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [filter, setFilter] = useState("");

  const handlePostClick = () => {
    setFilter("");
  };

  const filteredPosts = filter
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className="bg-[#DCD5DC] text-[#769ABE] h-[64px] w-full fixed  flex justify-between items-center px-10 shadow">
      <div className="flex items-center gap-6 max-md:gap-3 ">
        <div className="flex items-center gap-1">
          <Image
            src="/globe.png"
            className="bg-white rounded-2xl"
            width={30}
            height={30}
            alt="globe"
          />
          <p className="text-xl font-bold font-clashDisplay">Tripster</p>
        </div>

        <ul className="flex list-none items-center gap-6 max-md:hidden">
          <Link href="/">
            <li className="text-base font-medium font-satoshi">Home</li>
          </Link>

          <Link href="/blog">
            <li className="text-base font-medium font-satoshi">Blog</li>
          </Link>

          <Link href="/about">
            <li className="text-base font-medium font-satoshi">About</li>
          </Link>

          <Link href="/explore">
            <li className="text-base font-medium font-satoshi">Explore</li>
          </Link>
        </ul>
      </div>

      <div className="relative mx-auto md:mx-0">
        <input
          type="text"
          className="rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-600 transition duration-300 ease-in-out px-4 py-2"
          placeholder="Blog Search"
          aria-label="Search"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />

        {filteredPosts.length > 0 && (
          <div
            className="flex flex-col absolute bg-white border border-gray-200 rounded-lg mx-auto md:mx:0 mt-2"
            style={{ width: "100%" }}
          >
            {filteredPosts.map((post) => (
              <Link
                href={`/post/${post.number}`}
                key={post.id}
                className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out px-4 py-2"
                onClick={handlePostClick}
              >
                {post.title}
              </Link>
            ))}
          </div>
        )}


        <div className="flex items-center bg-red-100">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

