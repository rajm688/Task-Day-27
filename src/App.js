import React, { useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from "@mui/material";
import Typography from '@mui/material/Typography';
export default function App() {
  const originalList = [
    { name: "Create theme", active: false },
    { name: "Work on wordpress", active: false },
    { name: "Organize office main department", active: false },
    { name: "Error solve in HTML template", active: false }
  ];
  const [defaultList, setDefaultList] = useState(originalList);
  const [list, updateList] = useState(originalList);
  const [task, setTask] = useState("");

  const toggleTask = (e, index) => {
    const newTasks = [...defaultList];
    newTasks[index].active = e.target.checked === true ? true : false;
    setDefaultList(newTasks);
    updateList(newTasks);
  };

  const handleRemoveItem = (index) => {
    const newTasks = [...list];
    newTasks.splice(index, 1);
    updateList(newTasks);
  };

  return (
    <div className="task-list">
      <Card id="card">
        <CardContent>
          <div className="inputfield">
          <TextField
            label="New Task..."
            style={{
              width: "90%",
              height: "10%",
              margin: "0px 8px",
              paddingLeft: "5px"
            }}
            value={task}
            className="text"
            onChange={(event) => setTask(event.target.value)}
          />
          <Button
            className="btn"
            variant="outlined"
            onClick={() => {
              const newTask = { name: task, active: true };
              console.log(newTask);
              updateList([...list, newTask]);
            }}
          >
            Add Task
          </Button>
          </div>
          <CardActions>
            <div style={{width:"100%",display:"flex", gap:"10%", justifyContent:"space-evenly"}}>
            <Button variant="contained" onClick={() => {
    updateList(defaultList);
    console.log(defaultList);
  }}>
              All
            </Button>
            <Button variant="contained" onClick={ () => {
    updateList(defaultList.filter((todo) => !todo.active));
  }}>
              Active
            </Button>
            <Button variant="contained" onClick={ () => {
    updateList(defaultList.filter((todo) => todo.active));
  }}>
              Completed
            </Button>
            </div>

          </CardActions>
          {list.map((item, index) => {
            return (
              <div className="todo-item">
                <input
                  type="checkbox"
                  className="check"
                  checked = {item.active}
                  onChange={(event) => toggleTask(event, index)}
                />
                  <Typography style={{display:"inline", textDecoration: item.active===true ? "line-through":""}} variant="body1" gutterBottom component="div">
                  {item.name}
      </Typography>
              
                <IconButton
                  name={item.name}
                  onClick={() => handleRemoveItem(index)}
                >
                 <CancelIcon color="warning"/>
                 </IconButton>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
