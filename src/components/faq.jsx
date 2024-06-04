import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";

const Item = ({ title, children, isOpen, onToggle }) => {
  const handleClick = () => {
    onToggle(title);
  };

  return (
    <article className="border-b border-grey hover:bg-icon">
      <button
        type="button"
        aria-label="Toggle item"
        title="Toggle item"
        className="flex items-center justify-between w-full p-4 focus:outline-none "
        onClick={handleClick}
      >
        <p className="text-lg font-medium text-label text-start">{title}</p>
        <div className="px-4">
          <BiCaretDown
            className={`w-5 h-5 text-grey ${isOpen && "rotate-180"}`}
          />
        </div>
      </button>
      {isOpen && (
        <section className="p-4 pt-0">
          <p className="text-info">{children}</p>
        </section>
      )}
    </article>
  );
};

const Faq = (props) => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (title) => {
    setOpenItem((prevItem) => (prevItem === title ? null : title));
  };

  return (
    <div className="space-y-4">
      <Item
        title={props.title}
        isOpen={openItem === props.title}
        onToggle={handleToggle}
      >
        {props.description}
      </Item>
    </div>
  );
};

export default Faq;
