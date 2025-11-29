import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./ProductsPage.css";

const FilterDropdown = () => {
  const sections = {
    "IDEAL FOR": ["Men", "Women", "Baby & Kids"],
    OCCASION: ["Casual", "Festive", "Work", "Party"],
    WORK: ["Embroidered", "Printed", "Woven"],
    FABRIC: ["Cotton", "Silk", "Linen", "Polyester"],
    SEGMENT: ["Fashion", "Essentials", "Premium"],
    "SUITABLE FOR": ["Men", "Women", "Kids"],
    "RAW MATERIAL": ["Cotton", "Silk", "Synthetic", "Blended", "Wool"],
    PATTERN: ["Solid", "Striped", "Checked", "Printed", "Floral"],
  };

  // Manages open/close
  const [openSection, setOpenSection] = useState("IDEAL FOR");

  const toggleSection = (name) => {
    setOpenSection(openSection === name ? null : name);
  };

  // Manage selected checkboxes for each section
  const initialState = {};
  Object.keys(sections).forEach((key) => {
    initialState[key] = sections[key].reduce((acc, item) => {
      acc[item] = false;
      return acc;
    }, {});
  });

  const [selected, setSelected] = useState(initialState);

  // Toggle individual checkbox
  const handleCheckbox = (section, item) => {
    setSelected({
      ...selected,
      [section]: {
        ...selected[section],
        [item]: !selected[section][item],
      },
    });
  };

  // Unselect all inside a section
  const unselectAll = (section) => {
    const reset = {};
    sections[section].forEach((item) => (reset[item] = false));

    setSelected({
      ...selected,
      [section]: reset,
    });
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-item">
        <label className="filter-checkbox">
          <input type="checkbox" />
          CUSTOMIZABLE
        </label>
      </div>

      {Object.keys(sections).map((section) => (
        <div key={section} className="filter-section1">
          <div className="filter-header" onClick={() => toggleSection(section)}>
            <span>{section}</span>
            {openSection === section ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </div>

          <span className="filter-subtitle">All</span>

          {openSection === section && (
            <div className="filter-content">
              <p className="unselect-btn" onClick={() => unselectAll(section)}>
                Unselect all
              </p>

              {sections[section].map((item) => (
                <label className="filter-checkbox" key={item}>
                  <input
                    type="checkbox"
                    checked={selected[section][item]}
                    onChange={() => handleCheckbox(section, item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterDropdown;
