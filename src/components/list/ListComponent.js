import React, { useEffect, useState } from "react";
import "./ListComponent.css";
import SearchComponent from "../search/SearchComponent";

const ListComponent = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getList() {
      const resp = await fetch('/get-list');
      const data = await resp.json();
      setList(data.results);
    }
    getList();
  }, []);

  const handleSearch = async (event) => {
    const { value } = event.target;
    const resp = await fetch(`/search-list/${value}`);
    const data = await resp.json();
    setList(data);
  };

  return (
    <div className="list-component">
      <SearchComponent onSearch={handleSearch} />
      <ul className="list-group">
        {list.map((obj, index) => (
          <li className="list-group-item" key={index}>
            <h2>{obj.name}</h2>
            <p>{obj.specialty}</p>
          </li>
        ))}
        {list.length === 0 && (
          <li className="list-group-item danger">
            <p>No results found</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ListComponent;
