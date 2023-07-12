"use client";
import React, { useState, useRef, useEffect } from "react";
import IconClose from "@/assets/svg/icon_close.svg";
import IconArrow from "@/assets/svg/icon_arrow.svg";
import { twMerge } from "tailwind-merge";

const Autocomplete = (props: any) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<any>(null);
  const searchSuggestionRef = useRef<any>(null);
  const [options, setOptions] = useState<any>([]);

  const items = [
    { title: "Python", value: "_PYTHON_" },
    { title: "Javascript", value: "_JAVASCRIPT_" },
    { title: "Node", value: "_NODE_" },
  ];

  const onFocusHandler = (e: any) => {
    if (e.type === "focus") setIsFocused(true);
  };

  const handleSearch = (val: string) => {
    if (val) {
      const filteredData = options.filter((item: any, i: any) => item.title.toLowerCase().includes(val) && item);
      setOptions(filteredData);
    } else {
      setOptions(items);
    }
  };

  const onChangeInputHandler = (e: any) => {
    const { value } = e.target;
    handleSearch(value);
    setValue(value);
  };

  const onBlurHandler = (e: any) => {
    if (
      searchSuggestionRef.current &&
      !searchSuggestionRef.current?.contains(e.target) &&
      e.target !== inputRef.current
    ) {
      setIsFocused(false);
    }
  };

  const onClickItem = (val: any) => {
    setIsFocused(false);
    setValue(val.title);
  };

  useEffect(() => {
    if (items) setOptions(items);

    document.addEventListener("click", onBlurHandler);
    return () => {
      document.removeEventListener("click", onBlurHandler);
    };
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-md mx-auto">
        <div className="relative">
          <div
            className={twMerge(
              ` bg-white flex border border-gray-200 rounded items-center pr-4 ${
                isFocused ? "ring-2 ring-blue-400" : ""
              }`
            )}
          >
            <input
              value={value}
              name="select"
              id="select"
              onFocus={onFocusHandler}
              onChange={onChangeInputHandler}
              className="px-4 appearance-none outline-none text-gray-800 w-full py-3"
              ref={inputRef}
              autoComplete="off"
            />

            <button
              onClick={() => setValue("")}
              className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
            >
              <IconClose />
            </button>
          </div>

          <input type="checkbox" name="show_more" id="show_more" className="hidden peer" checked />
          {isFocused ? (
            <div
              ref={searchSuggestionRef}
              className={`absolute rounded shadow bg-white overflow-hidden hidden flex-col w-full mt-1 border border-gray-200 ${
                isFocused ? "peer-checked:flex" : ""
              }`}
            >
              <ul>
                {options?.length ? (
                  options.map((item: any, index: any) => {
                    return (
                      <li
                        onClick={() => onClickItem(item)}
                        className="cursor-pointer block p-2 border-transparent border-l-4 hover:border-blue-600 hover:bg-gray-100"
                        key={index}
                      >
                        {item.title}
                      </li>
                    );
                  })
                ) : (
                  <div className="p-2 ">No item found!</div>
                )}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
