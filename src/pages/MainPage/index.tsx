import { resolve } from "path";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetParams, getdata } from "../../apis/getdb";
import { Card, CardParam } from "../../components/Card";
import { postdata, PostParams } from "../../apis/getdb";
export const MainPage = () => {
  const params = useParams();

  const [items, setItems] = useState<CardParam[]>();
  const parm = { type: "sqldata" } as FetParams;
  useEffect(() => {
    // const parm = { type: "sqldata", paraStr1: "jq_vd001" } as FetParams;
    let arr: CardParam[] = [];
    const parm = {
      sqlid: "jq_vd001",
      paraArr: [{ paramid: "bibleid", paramval: params.bibleid }],
    } as PostParams;
    postdata(parm)
      .then((sysdata) => {
        //sysdata = JSON.parse(sysdata);

        for (let index = 0; index < sysdata.length; index++) {
          arr.push({
            type: "",
            vdgrp: sysdata[index]["vdgrp"],
            vdid: sysdata[index]["vdid"],
            title: sysdata[index]["vdname"],
            carddesc: sysdata[index]["nvdesc"],
            param1: sysdata[index]["youtubeurl"],
            param2: sysdata[index]["zoomurl"],
          });
        }
        return arr;
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <div>
      <div className="md:container md:mx-auto">
        <div className="">
          <Card items={items ? items : []}></Card>
        </div>
      </div>
    </div>
  );
};
