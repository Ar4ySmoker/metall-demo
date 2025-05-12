"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { asortiment } from "../navbar-03/config";

export const VerticalMenu = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const grouped = asortiment.reduce<Record<string, any[]>>((acc, item) => {
    if (item.type === "group") {
      acc[item.title] = [];
    } else if (item.type === "item") {
      const lastGroup = Object.keys(acc).at(-1);
      if (lastGroup) acc[lastGroup].push(item);
    }
    return acc;
  }, {});

  const groupsWithImages = asortiment.filter((item) => item.type === "group");

  return (
    <div className="relative w-full max-w-xs">
      <div className="border rounded shadow bg-gray-100">
        {groupsWithImages.map((group) => (
          <div
            key={group.title}
            className="relative"
            onMouseEnter={() => setActiveGroup(group.title)}
            onMouseLeave={() => setActiveGroup(null)}
          >
            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200">
              {group.image && (
                <Image
                  src={group.image}
                  alt={group.title}
                  width={32}
                  height={32}
                  className="rounded"
                />
              )}
              <span className="text-sm">{group.title}</span>
            </div>

            {/* Всплывающее меню */}
            {activeGroup === group.title && grouped[group.title]?.length > 0 && (
              <div className="absolute left-full top-0 ml-1 z-10 bg-white border rounded shadow-md p-3 min-w-[200px]">
                {grouped[group.title].map((item) => (
                  <Link
                    key={item.title}
                    href="/"
                    className="block px-2 py-1 text-sm text-gray-700 hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
