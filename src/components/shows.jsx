import React from "react";
import Show from "./show";

export default function Shows() {
  const arr = [
    <Show
      name="Fiddler on the Roof"
      position="Backstage"
      company="LMP"
      year="2016"
    />,
    <Show name="Oliver!" position="Backstage" company="LMP" year="2017" />,
    <Show
      name="Guys & Dolls"
      position="Lighting (design & ops)"
      company="LMP"
      year="2017"
    />,
    <Show
      name="Once on This Island"
      position="Sound (design & ops)"
      company="LMP"
      year="2017"
    />,
    <Show
      name="Footloose"
      position={"Lighting (design & ops),\nSound (design & ops)"}
      company="LMP"
      year="2018"
    />,
    <Show
      name="Guys & Dolls"
      position="Lighting & sound design"
      company="Willows"
      year="2018"
    />,
    <Show
      name="Hair"
      position="Lighting design, Sound (design & ops) "
      company="LMP"
      year="2018"
    />,
    <Show
      name="Crazy for You"
      position="Lighting asst."
      company="LMP"
      year="2019"
    />,
    <Show
      name="Dance Production"
      position="Sound ops"
      company="Harvard-Westlake MS"
      year="2019"
    />,
    <Show
      name="Company"
      position="Lighting design, Sound (design & ops)"
      company="LMP"
      year="2019"
    />,
    <Show
      name="Into the Woods"
      position="Spot"
      company="Harvard-Westlake US"
      year="2019"
    />,
  ];
}
