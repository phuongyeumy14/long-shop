import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Category1 from "assets/users/images/category/Category1.jpg";
import Category2 from "assets/users/images/category/Category2.jpg";
import Category3 from "assets/users/images/category/Category3.jpg";
import Category4 from "assets/users/images/category/Category4.jpg";
import Category5 from "assets/users/images/category/Category5.jpg";
import Category6 from "assets/users/images/category/Category6.jpg";
import Category7 from "assets/users/images/category/Category7.jpg";
import Featured1 from "assets/users/images/featured/featured1.jpg";
import Featured2 from "assets/users/images/featured/featured2.jpg";
import Featured3 from "assets/users/images/featured/featured3.jpg";
import Featured4 from "assets/users/images/featured/featured4.jpg";
import Featured5 from "assets/users/images/featured/featured5.jpg";
import Featured6 from "assets/users/images/featured/featured6.jpg";
import Featured7 from "assets/users/images/featured/featured7.jpg";
import Featured8 from "assets/users/images/featured/featured8.jpg";
import Featured9 from "assets/users/images/featured/featured9.jpg";

import { formater } from "utils/formater";

import "./style.scss";
const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const sliderItems = [
    {
      bgImg: Category1,
      name: "Gumdam1",
    },
    {
      bgImg: Category2,
      name: "Gumdam2",
    },
    {
      bgImg: Category3,
      name: "Gumdam3",
    },
    {
      bgImg: Category4,
      name: "Gumdam4",
    },
    {
      bgImg: Category5,
      name: "Gumdam5",
    },
    {
      bgImg: Category6,
      name: "Gumdam5",
    },
    {
      bgImg: Category7,
      name: "Gumdam5",
    },
  ];

  const featProdfucts = {
    all: {
      title: "toàn bộ",
      products: [
        {
          img: Featured1,
          name: "gundam1",
          price: "100000",
        },
        {
          img: Featured2,
          name: "gundam2",
          price: "100000",
        },
        {
          img: Featured3,
          name: "gundam3",
          price: "100000",
        },
        {
          img: Featured4,
          name: "gundam4",
          price: "100000",
        },
        {
          img: Featured5,
          name: "gundam4",
          price: "100000",
        },
        {
          img: Featured6,
          name: "gundam4",
          price: "100000",
        },
        {
          img: Featured7,
          name: "gundam4",
          price: "100000",
        },
        {
          img: Featured8,
          name: "gundam4",
          price: "100000",
        },
      ],
    },
    new: {
      title: "sản phẩm",
      products: [
        {
          img: Featured1,
          name: "gundam1",
          price: "100000",
        },
        {
          img: Featured2,
          name: "gundam2",
          price: "100000",
        },
      ],
    },
    top: {
      title: "sản phẩm",
      products: [
        {
          img: Featured3,
          name: "gundam3",
          price: "100000",
        },
        {
          img: Featured4,
          name: "gundam4",
          price: "100000",
        },
      ],
    },
    sale: {
      title: "sản phẩm",
      products: [
        {
          img: Featured5,
          name: "gundam5",
          price: "100000",
        },
        {
          img: Featured6,
          name: "gundam6",
          price: "100000",
        },
        {
          img: Featured7,
          name: "gundam7",
          price: "100000",
        },
        {
          img: Featured8,
          name: "gundam8",
          price: "100000",
        },
      ],
    },
  };
  const renderFeaturedProduct = (data) => {
    const tablist = [];
    const TabPanels = [];
    Object.keys(data).forEach((key, index) => {
      tablist.push(<Tab key={index}> {data[key].title} </Tab>);

      const TabPanel = [];
      data[key].products.forEach((item, j) => {
        TabPanel.push(
          <div className="col-lg-3 col-md-4" key={j}>
            <div className="featured-item pl-pr-10">
              <div
                className="featured-item-img"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <ul className="featured-item-img-hover">
                  <li>
                    <FaEye />
                  </li>
                  <li>
                    <FaShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="featured-item-text">
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{formater(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      TabPanels.push(TabPanel);
    });

    return (
      <Tabs>
        <TabList>{tablist}</TabList>
        {TabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
      </Tabs>
    );
  };
  return (
    <>
      <div className="container container-category-slider">
        <Carousel responsive={responsive} className="category-slider">
          {sliderItems.map((item, key) => (
            <div
              className="category-slider-item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProduct(featProdfucts)}
        </div>
      </div>
      <div className="container">
        <div className="banner">
          <div className="babner-img">
            <img src={Featured9} alt="banner" />
          </div>
          <div className="babner-img">
            <img src={Featured9} alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
