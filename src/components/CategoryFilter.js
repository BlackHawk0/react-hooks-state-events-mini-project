import React from "react";

function CategoryFilter(props) {
  console.log(props);

  const buttons = props.categories.map((category) => {
    const cname = category === props.selectedCategory ? "selected" : null;
    return (
      <button key={category}  className={cname} onClick={() => props.onSelectCategory(category)}>
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttons}
    </div>
  );
}

export default CategoryFilter;
