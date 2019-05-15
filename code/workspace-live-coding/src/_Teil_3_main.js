import React from "react";
import ReactDOM from "react-dom";

import { GreetingDetail, GreetingMaster } from "./GreetingDetail";

import { sampleGreetings } from "./_sample-greetings";

// Beispiel: DETAILS
ReactDOM.render(<GreetingDetail />, document.getElementById("mount"));

// Beispiel: MASTER
// ReactDOM.render(<GreetingMaster greetings={sampleGreetings} />, document.getElementById("mount"));
