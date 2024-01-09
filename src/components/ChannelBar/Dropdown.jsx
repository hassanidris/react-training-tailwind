import { useState } from "react"
import ChevronIcon from "./ChevronIcon";
import TopicSelection from "./TopicSelection";
import { FaPlus } from "react-icons/fa";


const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);
  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded
              ? 'dropdown-header-text-selected'
              : 'dropdown-header-text'
          }
        >
          {header}
        </h5>
        <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection key={selection} selection={selection} />)}
    </div>
  )
}

export default Dropdown