import React, { useState } from "react";
import play from "../../img/play.png";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
export type CardParam = {
  type: string;
  vdgrp?: string;
  vdid?: string;
  title?: string;
  carddesc?: string;
  param1?: string;
  param2?: string;
};
interface ListProps {
  items: CardParam[];
}
export const Card = ({ items }: ListProps) => {
  return (
    <div className="  ">
      {items.map((item, index) => {
        return (
          <div key={index} className="m-5 shadow-md">
            <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 ">
              <div className="flex items-start sm:gap-8">
                <a
                  className=" hover:cursor-pointer hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                  aria-hidden="true"
                  href={item.param2}
                >
                  <img src={play} className="w-10"></img>
                </a>
                <div className=" ">
                  <div className=" m-2 w-56 rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 font-medium text-white">
                    {item.vdgrp}
                  </div>
                  <div className="m-3">
                    <a
                      className="hover:cursor-pointer font-medium sm:text-xl text-left text-blue-600 underline underline-offset-auto"
                      aria-hidden="true"
                      href={item.param2}
                    >
                      {item.title}
                    </a>
                    {/* <NavLink to={`/vd/`}>{item.title}</NavLink> */}
                  </div>

                  <div className="collapse  ">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-medium text-left bottom-3">
                      {"摘要..."}
                    </div>
                    <div className="collapse-content">
                      <p>{item.carddesc} </p>
                    </div>
                  </div>

                  {/* <h5 className="flex  font-medium sm:text-xl text-blue-800">
                    <a href={item.param1} className="hover:underline m-4 ">
                      {" "}
                      {"YouTube视频"}{" "}
                    </a>
                    <a href={item.param2} className="hover:underline  m-4">
                      {" "}
                      {item.param2 ? "Zoom视频" : ""}{" "}
                    </a>
                  </h5> */}
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};
