import "./App.css";
import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
export default function App() {
  const [state, setstate] = useState(" ");
  const [list, setlist] = useState([
    "Create theme",
    "Work on wordpress",
    "Organize office main department",
    "Error solve in HTML template",
  ]);
  console.log(state);
  console.log(list);
  return (
    <div className="App">
      <Card sx={{ width: "80%", padding: "10px" }}>
        <div className="input">
          <TextField
            style={{ width: "60%" }}
            onChange={(e) => setstate(e.target.value)}
            id="outlined-basic"
            label="New Task"
            variant="outlined"
          />
          <Button
            style={{ width: "30%" }}
            onClick={() => setlist([...list, state])}
            variant="contained"
          >
            ADD
          </Button>
        </div>
        <div className="taks">
          {list.map((item) => (
            <Tasks item={item} />
          ))}
        </div>
      </Card>
    </div>
  );
}

function Tasks({ item }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [state, setstate] = useState("false");
  // console.log(state)
  return (
    <div>
      <Card sx={{ width: "90%", padding: "10px", margin: "auto" }}>
        <Checkbox
          onChange={() => setstate(state === "on" ? "off" : "on")}
          {...label}
        />
        <span
          style={{ textDecoration: state === "on" ? "line-through" : "none" }}
        >
          {item}
        </span>
      </Card>
      <br />
      <Archive item={item} state={state} />
    </div>
  );
}
function Archive(props) {
  console.log("inArchive", props);
  // const archiveditems = props.filter(({state})=> state== false)
  // console.log("archiveditems",archiveditems)
  return (
    <div>
      <Card sx={{ width: "90%", padding: "10px", margin: "auto" }}></Card>
      <br />
    </div>
  );
}
