import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from "bizcharts";
import "./index.less";
// 数据源
const data = [
  { genre: "Sports", sold: 275, income: 2300 },
  { genre: "Strategy", sold: 115, income: 667 },
  { genre: "Action", sold: 120, income: 982 },
  { genre: "Shooter", sold: 350, income: 5271 },
  { genre: "Other", sold: 150, income: 3710 }
];

// 定义度量
const cols = {
  sold: { alias: "销售量" },
  genre: { alias: "游戏种类" }
};
const About = () => {
  const error = (err: any) => {
    console.warn("ERROR(" + err.code + "): " + err.message);
  };
  const success = (pos: any) => {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log("Latitude : " + crd.latitude);
    console.log("Longitude: " + crd.longitude);
    console.log("More or less " + crd.accuracy + " meters.");
  };
  var options = {
    enableHighAccuracy: true,
    timeout: 500000,
    maximumAge: 0
  };

  window.navigator.geolocation.getCurrentPosition(success, error, options);
  return (
    <section>
      <article className="about-wrapper">
        <article className="item">
          <Chart forceFit height={400} data={data} scale={cols}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            <Legend position="bottom" />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
        </article>
        <article className="item">2</article>
        <article className="item">3</article>
        <article className="item">4</article>
        <article className="item">5</article>
        <article className="item">6</article>
        <article className="item">7</article>
        <article className="item">8</article>
        <article className="item">5</article>
        <article className="item">6</article>
        <article className="item">7</article>
        <article className="item">8</article>
        <article className="item">5</article>
        <article className="item">6</article>
        <article className="item">7</article>
        <article className="item">8</article>
      </article>
    </section>
  );
};
export default About;
