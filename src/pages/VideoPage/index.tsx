import React from "react";
import Iframe from "react-iframe";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
const VideoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <Iframe
        url="https://us02web.zoom.us/rec/share/_W8TR5fi8h3uuG2J9TZU1kn_lBVI9PTlEnT09vaXLqiaFzHOTv3PZ_qxpA2CBZne.TLUBIjyaXVjFgkfg"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </div>
  );
};

export default VideoPage;
