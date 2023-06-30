import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FetParams, getdata, PostParams } from "../../apis/getdb";
import BibleItem from "../../components/BibleItem";
import GenItem from "../../components/GenItem";
import { MainPage } from "../MainPage";
export const IndexPage = () => {
  const [value, setValue] = useState(0);
  const [biblieList, setBiblelist] = useState([]);
  useEffect(() => {
    const parm = { type: "sqldata", paraStr1: "jq_biblelist" } as FetParams;
    getdata(parm).then((sysdata) => {
      setBiblelist(sysdata);
    });
  }, []);
  return (
    <div>
      <div className="tabs tabs-boxed">
        <a
          className={`${value === 0 ? "tab tab-active" : "tab"}`}
          onClick={() => setValue(0)}
        >
          旧约
        </a>
        <a
          className={`${value === 1 ? "tab tab-active" : "tab"}`}
          onClick={() => setValue(1)}
        >
          新约
        </a>
        <div
          className={`${value === 2 ? "tab tab-active" : "tab"}`}
          onClick={() => setValue(2)}
        >
          讲座
          {/* <NavLink to={`/list/${"jz"}`}>讲座</NavLink> */}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="col-span-2">
          <div className="tabpanels">
            {value === 0 && (
              <div className="tab-panel-item ">
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                  {biblieList.map((item, index) => {
                    if (item["ltype"] === "t") {
                      return (
                        <BibleItem
                          key={item["bibleid"]}
                          itemid={item["bibleid"]}
                          itemname={item["sname"]}
                          ct={item["ct"]}
                          itemurl={"jz"}
                        ></BibleItem>
                      );
                    }
                  })}{" "}
                </div>
              </div>
            )}
            {value === 1 && (
              <div className="tab-panel-item ">
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                  {biblieList.map((item, index) => {
                    if (item["ltype"] === "a") {
                      return (
                        <BibleItem
                          key={item["bibleid"]}
                          itemid={item["bibleid"]}
                          itemname={item["sname"]}
                          ct={item["ct"]}
                          itemurl={"jz"}
                        ></BibleItem>
                      );
                    }
                  })}{" "}
                </div>
              </div>
            )}
            {value === 2 && (
              <div className="tab-panel-item ">
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                  {biblieList.map((item, index) => {
                    if (item["ltype"] === "j") {
                      return (
                        <GenItem
                          key={item["bibleid"]}
                          itemid={item["bibleid"]}
                          itemname={item["sname"]}
                          ct={item["ct"]}
                          itemurl={"jz"}
                        ></GenItem>
                      );
                    }
                  })}{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
