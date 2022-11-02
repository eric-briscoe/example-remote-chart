import React, { useEffect } from "react";
import FunnelGraph from "funnel-graph-js";
import "funnel-graph-js/dist/css/main.min.css";
import "funnel-graph-js/dist/css/theme.min.css";

const graph = new FunnelGraph({
  container: ".funnel",
  gradientDirection: "vertical",
  data: {
    labels: ["All Users", "Joined", "Started", "Watched"],
    // colors: ["#17A2B8", "#99CC99"],
    colors: ['#A0BBFF', '#EC77FF'],
    // color: '#FF5500',
    values: [300, 270, 240, 150],
  },
  displayPercent: true,
  direction: "vertical",
  // color: '#FF5500',
  // color: ['orange', 'blue'],
  width: 1080,
  height: 300,
  subLabelValue: "raw",
});

const FunnelChart = (props) => {

   // useEffect(()=>{
      setTimeout(() => graph.draw(), 10);
   //})
    
console.og()

  return (
    <>
      <h1>This is a funnel chart</h1>
      <div className="funnel" />
    </>
  );
};

export default FunnelChart;
