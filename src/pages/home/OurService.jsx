import React from "react";

const serviceList = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guest with our flavors and presentation",
    image: "/images/services/flowerVase.jpeg",
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "We deliver your order promptly to your door",
    image: "/images/services/cart.jpeg",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering",
    image: "/images/services/gifts.jpeg",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Mama P gift cards",
    image: "/images/services/gift.webp",
  },
];

const OurService = () => {
  return (
    <div className="section-container my-16 mx-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 ">
        <div className="md:w-1/2">
          <div className="text-left pb-60">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title text-purple-900">
              Our Culinary Journey and Services
            </h2>
            <p className="my-5 leading-[30px] text-white">
              Rooted in passion, we curate unforgettable dinning experience and
              offer exceptional services, blending culinary artistry with warm
              hospitality
            </p>

            <button className="btn bg-green-700 text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        <div className="md:w-1/2 pt-10">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 item-center">
            {serviceList.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border"
              >
                <div className="">
                  <img src={item.image} className="mx-auto h-[200px]" />
                </div>
                <h5 className="pt-3 font-semibold">{item.title}</h5>
                <p className="text-[#90BD95]">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
