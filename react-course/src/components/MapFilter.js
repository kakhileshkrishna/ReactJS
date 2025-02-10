import React from "react";

function MapFilter() {
  //const arr = ['react', 'angular', "express", "node"]
  const array = [
    {
      id: 1,
      title: "react",
    },
    {
      id: 2,
      title: "angular",
    },
    {
      id: 3,
      title: "javascript",
    },
  ];

  const arr_f = ["react", "angular", "express", "node"];
  const filtered = arr_f.filter((name) => name.includes("e")); // Filter

  return (
    <div>
      {
        // 1. MAP
        //arr.map((value, index) => <li key={index}>{value}</li>)
        // array.map((item) => (
        //   <li key={item.id}>{item.title}</li>
        // ))

        //  2. FILTER
        filtered.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </div>
  );
}

export default MapFilter;
