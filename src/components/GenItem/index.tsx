import React from "react";
import { NavLink } from "react-router-dom";
type genitem = {
  itemid: string;
  itemname: string;
  itemurl: String;
  ct?: String;
};
const GenItem = (item: genitem) => {
  const url = item.itemurl;
  return (
    <div key={item.itemid} className=" m-1 ">
      <NavLink
        className="btn btn-outline btn-primary w-56 "
        to={`/list/${url}/${item.itemid}`}
      >
        {item.itemname}
      </NavLink>
    </div>
  );
};

export default GenItem;
