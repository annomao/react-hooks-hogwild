import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import ShowPorkers from "./ShowPorkers";

function App() {

  const [filterBy, setFilterBy] = useState("All");
	const [sortBy, setSortBy] = useState("name");

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
	function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  const filteredHogs = hogs.filter((hog) => {
    if (filterBy === "All") {
      return true;
    }else if (filterBy==="Yes"){
      return hog.greased === true
    }else{
      return hog.greased === false
    }
  });
	const hogsToDisplay = filteredHogs.sort((hog1,hog2)=>{
		if (sortBy==="weight"){
			return hog1.weight - hog2.weight
		}else{
			return hog1.name.localeCompare(hog2.name)
		}
	})

	return (
		<div className="App">
			<Nav />

			<div className="inline field">
				<div class="ui right pointing black basic label">
				Filter By :
				</div>
				<select className="ui dropdown" onChange={handleFilterChange}>
					<option value="All">All</option>
					<option value="Yes">Greased</option>
					<option value="No">Non-Greased</option>
				</select>
			</div>
			<br/>
			<div className="inline field">
				<div class="ui right pointing black basic label">
				Sort By :
				</div>
				<select className="ui dropdown" onChange={handleSortChange}>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>
			<br/>

			<ShowPorkers hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;
