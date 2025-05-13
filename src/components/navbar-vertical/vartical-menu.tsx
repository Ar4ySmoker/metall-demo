"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { asortimentWithSubcategories } from "../navbar-02/config";
import {  ChevronRight } from "lucide-react";

export const VerticalMenu = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const closeGroupTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeItemTimeout = useRef<NodeJS.Timeout | null>(null);

  const grouped = asortimentWithSubcategories.reduce<Record<string, any[]>>((acc, item) => {
    if (item.type === "group") {
      acc[item.title] = [];
    } else if (item.type === "item") {
      const lastGroup = Object.keys(acc).at(-1);
      if (lastGroup) acc[lastGroup].push(item);
    }
    return acc;
  }, {});

  const groupsWithImages = asortimentWithSubcategories.filter((item) => item.type === "group");

  return (
    <div className="relative w-full max-w-xs">
      <div className="border rounded shadow bg-gray-100">
        {groupsWithImages.map((group) => (
          <div
            key={group.title}
            className="relative"
            onMouseEnter={() => {
              if (closeGroupTimeout.current) clearTimeout(closeGroupTimeout.current);
              setActiveGroup(group.title);
            }}
            onMouseLeave={() => {
              closeGroupTimeout.current = setTimeout(() => {
                setActiveGroup(null);
                setActiveItem(null);
              }, 300);
            }}
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

            {activeGroup === group.title && grouped[group.title]?.length > 0 && (
              <div
                className="absolute left-full top-0 ml-1 z-10 bg-white border rounded shadow-md p-3 min-w-[200px]"
                onMouseEnter={() => {
                  if (closeGroupTimeout.current) clearTimeout(closeGroupTimeout.current);
                }}
                onMouseLeave={() => {
                  closeGroupTimeout.current = setTimeout(() => {
                    setActiveGroup(null);
                    setActiveItem(null);
                  }, 500);
                }}
              >
                {grouped[group.title].map((item) => (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => {
                      if (closeItemTimeout.current) clearTimeout(closeItemTimeout.current);
                      setActiveItem(item.title);
                    }}
                    onMouseLeave={() => {
                      closeItemTimeout.current = setTimeout(() => {
                        setActiveItem(null);
                      }, 500);
                    }}
                  >
                    {item.children ? (
                      <div className="flex justify-between items-center px-2 py-1 text-sm text-gray-700 hover:underline cursor-pointer">
                        <span>{item.title}</span>
                        <span className="text-gray-400 ml-2"><ChevronRight/></span>
                      </div>
                    ) : (
                      <Link
                        href={item.href || "/"}
                        className="block px-2 py-1 text-sm text-gray-700 hover:underline"
                      >
                        {item.title}
                      </Link>
                    )}

                    {/* Children submenu */}
                    {activeItem === item.title && item.children && (
                      <div
                        className="absolute top-0 left-full ml-1 z-20 bg-white border rounded shadow-md p-3 min-w-[200px]"
                        onMouseEnter={() => {
                          if (closeItemTimeout.current) clearTimeout(closeItemTimeout.current);
                        }}
                        onMouseLeave={() => {
                          closeItemTimeout.current = setTimeout(() => {
                            setActiveItem(null);
                          }, 300);
                        }}
                      >
                        {item.children.map((child: any) => (
                          <Link
                            key={child.title}
                            href={child.href || "/"}
                            className="block px-2 py-1 text-sm text-gray-700 hover:underline"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
