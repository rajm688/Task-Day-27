import './App.css';
import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
export default function App() {
  const [state,setstate]= useState(" ")
  const[list,setlist] = useState(["Create theme","Work on wordpress", "Organize office main department","Error solve in HTML template"])
  console.log(state)
  console.log(list)
  return (
    <div className="App">
      <Card sx={{ width:"80%", padding:"10px"}}>
        <div>
      <TextField style={{width:"60%",margin:"auto"}} onChange={(e)=>setstate(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
      <Button  style={{heigth:"100%",width:"30%",margin:"auto"}} onClick={()=>setlist([...list,state])}variant="contained">ADD</Button>
      </div>
  {list.map(item=><Tasks item={item}/>)}
  </Card>
    </div>
  );
}

function Tasks({item}){
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return(
    <div>
      <Card sx={{ width:"90%", padding:"10px", margin:"auto" }}>
      <Checkbox {...label} />{item}
  </Card>

    </div>
  )
}
