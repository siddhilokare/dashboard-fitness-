import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Paper,
  TextField,
  MenuItem,
} from "@material-ui/core";

function App1() {
  const [filter, setFilter] = useState("All");
  const data = [
    { title: "Item 1", category: "Category A" },
    { title: "Item 2", category: "Category B" },
    { title: "Item 3", category: "Category A" },
  ];

  const filteredData = filter === "All" ? data : data.filter(item => item.category === filter);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Paper style={{ padding: "16px" }}>
        <Typography variant="h6" gutterBottom>
          Filter Data
        </Typography>
        <TextField
          select
          label="Category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Category A">Category A</MenuItem>
          <MenuItem value="Category B">Category B</MenuItem>
        </TextField>

        <div>
          {filteredData.map((item, index) => (
            <div key={index}>
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="caption">{item.category}</Typography>
            </div>
          ))}
        </div>
      </Paper>

      <Button variant="contained" color="primary" style={{ marginTop: "16px" }}>
        Submit
      </Button>
    </Container>
  );
}

export default App1;
