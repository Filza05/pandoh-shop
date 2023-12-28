import React from "react";
import { Carousel } from "primereact/carousel";

const ImagesPreviewSideBar = () => {
  const itemTemplate = (item) => (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );

  const items = [
    {
      image: "/images/sign-in.jpg",
      name: "Scenic Landscape",
      description:
        "A breathtaking view of mountains and valleys, painted in vibrant hues.",
    },
    {
      image: "/images/sign-in.jpg",
      name: "Cosy Coffee Shop",
      description:
        "A warm and inviting space filled with the aroma of freshly brewed coffee and delicious pastries.",
    },
    {
      image: "/images/sign-in.jpg",
      name: "Starry Night Sky",
      description:
        "A mesmerizing display of countless stars twinkling against a velvety backdrop, inspiring dreams and wonder.",
    },
  ];

  return (
    <Carousel
      value={items}
      itemTemplate={itemTemplate}
      orientation="vertical"
      numVisible={3}
      numScroll={1}
      autoplayInterval={3000}
      circular={true}
    />
  );
};

export default ImagesPreviewSideBar;
