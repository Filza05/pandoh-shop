/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  useDispatch,
  useSelector,
} from "react-redux";

function ProductsSidebar() {
    return (
        <aside className="w-full p-6 sm:w-60">
          <nav className="space-y-8 text-sm font-poppins">
            <h2 className="font-semibold text-[24px] opacity-80">
              Categories
            </h2>
            {/* <div className="text-[18px] flex flex-col gap-1">
              {categories.map((category) => {
                return (
                  <>
                    <p
                      onClick={() => {
                        dispatch(
                          setCategory(category)
                        );
                      }}
                      className={`flex flex-row gap-2 cursor-pointer ${
                        categoryFromStore ==
                          category &&
                        "text-orange-600 font-semibold"
                      }`}
                    >
                      <ArrowRightIcon className="w-6 h-4" />
                      {category}
                    </p>
                    <hr />
                  </>
                );
              })}
            </div> */}
            <h4 className="font-semibold text-[24px] opacity-80">
              Price
            </h4>
            <p className="text-black opacity-75">
              {/* ${price} */}
            </p>
            <input
              type="range"
              min="0"
            //   max={findMaxPrice(products)}
              step="1"
            //   value={price}
              className="appearance-none h-2 w-full bg-blue-500 rounded-lg outline-none"
            //   onChange={(event) => {
            //     dispatch(
            //       setPrice(event.target.value)
            //     );
            //   }}
            />
            <button
            //   onClick={() => {
            //     dispatch(clearFilters());
            //     dispatch(
            //       setPrice(findMaxPrice(products))
            //     );
            //   }}
              className="py-2 px-4 bg-orange-600 text-white font-normal rounded-sm"
            >
              Clear filters
            </button>
          </nav>
        </aside>
      );
    };

export default ProductsSidebar;
