import React from "react";
import { Grid } from "@material-ui/core";
import HighlightCard from "./HighlightCard";

function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Số ca Khỏi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "Số ca Tử vong",
      count: data.Deaths,
      type: "deaths",
    },
  ];
  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
