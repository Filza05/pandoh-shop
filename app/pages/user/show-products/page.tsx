import React from 'react'
import ProductsSidebar from '@/app/components/ProductsSidebar';
import ProductCard from '@/app/components/ProductCard';
import useProduct from "@/app/hooks/useProducts"

function page() {


  return (
    <section className="mt-[70px] p-10 flex flex-row px-30 gap-5">
    <ProductsSidebar />
    <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row justify-between items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
            //   onChange={(event) => {
            //     setSearchText(event.target.value);
            //   }}
              type="search"
              id="default-search"
              className="block px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-full"
              placeholder="Search by Name"
              required
            />
          </div>
          <div className="relative mr-10">
            <select
            //   value={sortBy}
            //   onChange={(event) => {
            //     dispatch(
            //       setSortBy(event.target.value)
            //     );
            //   }}
              className="block appearance-none w-full py-2 px-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option disabled selected>
                Sort By
              </option>
              {/* {sortByConstants.map((obj) => {
                return <option>{obj}</option>;
              })} */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12l-6-6 1.5-1.5L10 9.8l4.5-4.3L16 6z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {/* {category !== "All"
            ? filterProducts(
                filterWithPrice(
                  sortProducts(products),
                  price
                ),
                searchText
              ).map((product) => {
                return (
                  product.category ===
                    category && (
                    <ProductCard
                      product={product}
                    />
                  )
                );
              })
            : filterProducts(
                filterWithPrice(
                  sortProducts(products),
                  price
                ),
                searchText
              ).map((product) => {
                return (
                  <ProductCard
                    product={product}
                  />
                );
              })} */}
        </div>
      </div>
      </section>
  )
}

export default page