import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

function partitionedData(data, size) {
  const result = [];

  for (let i = 0; i < data.length; i += size) {
    console.log({ data }, "checking");
    const chunk = data.slice(i, i + size);
    result.push(chunk);
  }
  // return result;
  console.log({ result });
  return result;
}

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(8);

  const [paginateData, setPaginateData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/menu.json");
      const data = await res.json();
      setMenu(data);
      setSelectedCategory(data);
      setCurrentPage(1);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
    showAll();
  }, []);

  useEffect(() => {
    const partitioned = partitionedData(filteredItems, 10);
    console.log(partitioned, "useeffect");
    setPaginateData(partitioned);
  }, []);

  console.log({ filteredItems, paginateData });

  console.log({ paginateData }, "hhhhhh");
  const updateFilteredItems = () => {
    if (selectedCategory === "salad") {
      setFilteredItems(menu.filter((item) => item.category === "salad"));
    } else if (selectedCategory === "pizza") {
      setFilteredItems(menu.filter((item) => item.category === "pizza"));
    } else if (selectedCategory === "soup") {
      setFilteredItems(menu.filter((item) => item.category === "soup"));
    } else if (selectedCategory === "dessert") {
      setFilteredItems(menu.filter((item) => item.category === "dessert"));
    } else if (selectedCategory === "drinks") {
      setFilteredItems(menu.filter((item) => item.category === "drinks"));
    } else {
      setFilteredItems(menu);
    }
  };

  useEffect(() => {
    updateFilteredItems();
  }, [selectedCategory]);

  const handleTab = (tab) => {
    setSelectedCategory(tab);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleNext = () =>
    setCurrentPage((prev) => (prev + 1) % paginateData.length);
  const handlePrevious = () =>
    setCurrentPage((prev) => (prev - 1) % paginateData.length);

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem * itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% py-40 ">
        <div className="py-2 flex flex-col items-center justify-center gap-8">
          <div className="text-center space-y-7 pl-10">
            <h2 className="md:text-5xl text-black text-4xl font-bold md:leading-snug leading-snug ">
              For the Love of Delicious{" "}
              <span className="text-orange-400">Food</span>.
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Where each Plate waves a story of Culinary Mastery and Passionate
              Craftmanship
            </p>
            <button className="btn bg-orange-400 px-8 py-3 text-white font-semibold rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="section-container bg-white pl-10 ">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button
              onClick={() => handleTab("all")}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => handleTab("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >
              Salad
            </button>
            <button
              onClick={() => handleTab("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => handleTab("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => handleTab("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => handleTab("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>

            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text=-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10">
        {/* {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1
                ? "bg-green-700 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))} */}

        {paginateData[currentPage]?.map((item) => (
          <Cards key={item.id} item={item} />   
        ))}

        <div className="w-full flex justify-between items-center">
          <button
            type="button"
            className="bg-red-500 text-white text-lg p-5 rounde-md"
            onClick={handlePrevious}
          >
            Prev
          </button>
          <button
            type="button"
            className="bg-green-500 text-white text-lg p-5 rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
