import React from "react";
import { NavLink } from "react-router-dom";
type bibleitem = {
  itemid: string;
  itemname: string;
  itemurl: String;
  ct?: Number;
};
function BibleItem(item: bibleitem) {
  const url = item.itemurl;
  console.log(item);
  return (
    <div key={item.itemid} className=" m-1">
      <NavLink
        className={[
          " btn btn-outline  w-16",
          item.ct === 0 ? "btn-disabled" : "btn-primary",
        ].join(" ")}
        to={`/list/${url}/${item.itemid}`}
      >
        <div className="">
          <div className=" ">{item.itemname} </div>
        </div>
        {/* <div className={[" top-11 ", item.ct === 0 ? "w-0" : " w-2"].join(" ")}>
          {item.ct?.toString()}
        </div> */}
      </NavLink>
    </div>
  );
}

export default BibleItem;
