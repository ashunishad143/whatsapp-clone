import React, { useEffect, useMemo, useRef, useState } from "react";
import { countries } from "../../../constants/countries";
import { Constants } from "../../../constants/constants";

interface CountryDropdownProps {
  selectedCountry?: (typeof countries)[0];
  setSelectedCountry?: (country: (typeof countries)[0]) => void;
}

const CountryDropdown = ({
  selectedCountry = countries[0],
  setSelectedCountry = () => {},
}: CountryDropdownProps) => {
  // State to manage search input and dropdown visibility
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ref to focus the search box when dropdown is opened
  const searchBoxRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    return countries.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    // Focus the search box when dropdown is opened
    setTimeout(() => {
      searchBoxRef.current?.focus();
    }, 0);
  };

  //  To fetch country by IP (optional, can be used to set default country)
  useEffect(() => {
    const saved = localStorage.getItem("countryCode");

    if (saved) {
      const country = countries.find((c) => c.code === saved);
      if (country) {
        setSelectedCountry(country);
      }
    } else {
      // Fetch country by IP if not set in localStorage
      async function getCountryByIP() {
        try {
          const res = await fetch("https://ipwho.is/");
          const data = await res.json();
          console.log(data); // Check the structure of the response
          console.log(data.country_code, data.country_name); // "IN", "India"
          localStorage.setItem("countryCode", data.country_code);
          return data.country_code;
        } catch (error) {
          console.error("Error fetching country by IP:", error);
        }
      }

      getCountryByIP().then((countryCode) => {
        console.log("Country code from IP:", countryCode);
        const country = countries.find((c) => c.code === countryCode);
        if (country) {
          setSelectedCountry(country);
        }
      });
    }
  }, []);

  // Eventlistener to close dropdown when clicking outside
  useEffect(() => {
    console.log("ref:", dropdownRef.current);
    const handleClickOutside = (event: MouseEvent) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  console.log("Selected Country:", selectedCountry);
  return (
    <div className="relative w-64 mt-5" ref={dropdownRef}>
      {/* Input Button */}

      <button
        onClick={handleDropdownClick}
        className="w-full  border-black border-1 rounded-full px-4 py-2 flex items-center justify-between bg-white shadow-sm"
      >
        <span className="flex items-center gap-2">
          <img
            src={`${
              Constants.FLAG_CDN
            }${selectedCountry.code.toLowerCase()}.png`}
            alt={selectedCountry.code}
            className="w-5 h-4 rounded-sm"
          />
          <span>{selectedCountry.name}</span>
        </span>
        <span>▾</span>
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div
          className="
      absolute top-full mt-1 left-0 w-full
      rounded-xl border border-gray-300
      shadow-lg z-10 bg-white
      overflow-hidden
    "
        >
          {/* Search box */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="countrySearch"
            name="countrySearch"
            placeholder="Search"
            className="w-full px-4 py-2 border-b border-gray-200 outline-none"
            ref={searchBoxRef}
          />

          {/* Scrollable list */}
          <div className="max-h-60 overflow-y-auto">
            {filtered.map((c) => (
              <div
                key={c.code}
                onClick={() => {
                  setSelectedCountry(c);
                  setShowDropdown(false);
                  setSearch(""); // Clear search when a country is selected
                }}
                className="px-4 py-2 hover:bg-gray-100 flex items-center justify-between cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={`${Constants.FLAG_CDN}${c.code.toLowerCase()}.png`}
                    alt={c.code}
                    className="w-5 h-4 rounded-sm"
                  />
                  <div className="text-sm">{c.name}</div>
                </div>
                <span className="text-sm text-gray-500">{c.dial_code}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
