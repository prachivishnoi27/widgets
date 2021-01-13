import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        console.log('Title Clicked at ', index);
        setActiveIndex(index);
    }
  const renderedList = items.map((item, index) => {
      const active = activeIndex === index? 'active': '';

    return (
    <React.Fragment key={item.title}>
      <div className={`title ${active}`} onClick={() => onTitleClick(index)} >
          <i className="dropdown icon"></i>
          {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.description}</p>
      </div>
    </React.Fragment>
    );
  });

  return (
    <div className="ui styled fluid accordion">
        {renderedList}
        <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
