import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  // /hotels is directed to this page
  return (
    <div>
      <Navbar />
      {/* we will pass a list prop as we do not want whole header so we will not display whose type is list */}
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            {/* Destination */}
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            {/* Date */}
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            {/* Options */}
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="isOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="isOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="isOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="isOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="isOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
