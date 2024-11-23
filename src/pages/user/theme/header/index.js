import { memo } from "react";
import "./style.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { formater } from "utils/formater";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const [isShowCategory, setIsShowCategory] = useState(true);
  const [isShowHumberger, setIsShowHumberger] = useState(false);
  const [menu] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        { name: "Sản phẩm", path: "" },
        { name: "Sản phẩm", path: "" },
        { name: "Sản phẩm", path: "" },
      ],
    },
    {
      name: "Bài viết",
      path: "",
    },
    {
      name: "Liên hệ",
      path: "",
    },
  ]);
  return (
    <>
      <div
        className={`humberger_menu_overlay${isShowHumberger ? "active" : ""}`}
      />
      <div className={`humberger_menu_wrapper${isShowHumberger ? "show" : ""}`}>
        <div className="header_logo">
          <h1>LONGSHOP</h1>
        </div>
        <div className="humberger_menu_cart">
          <ul>
            <li>
              <Link to={""}>
                <FaShoppingCart />
                <span>1</span>
              </Link>
            </li>
          </ul>
          <div className="header_cart_price">
            Giỏ hàng <span>{formater(200000)}</span>
          </div>
        </div>
        <div className="humberger_menu_widget">
          <div className="header_top_right_auth">
            <Link to={""}>
              <BiUser />
              Đăng nhập
            </Link>
          </div>
        </div>
        <div className="humberger_menu_nav">
          <ul>
            {menu.map((menu, menukey) => (
              <li key={menukey} to={menu.path}>
                <Link to={menu.path}>
                  {menu.name}
                  {menu.child &&
                    (menu.isShowSubmenu ? <AiOutlineDown /> : <AiOutlineUp />)}
                </Link>
                {menu.child && (
                  <ul>
                    {menu.child.map((child, childkey) => (
                      <li key={childkey}>
                        <Link to={child.path}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="header_top_right_social">
          <Link to={""}>
            <FaFacebook />
          </Link>
          <Link to={""}>
            <FaTwitter />
          </Link>
          <Link to={""}>
            <FaInstagram />
          </Link>
          <Link to={""}>
            <CiLinkedin />
          </Link>
        </div>
        <div className="humberger_menu_contact">
          <ul>
            <li>
              <i className="fa fa-envelope" /> longshop@gmail.com
            </li>
            <li>MIễn phí ship từ {formater(200000)}</li>
          </ul>
        </div>
      </div>

      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <IoIosMail />
                  hello@gmail.com
                </li>
                <li> Miễn phí ship từ {formater(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <CiLinkedin />
                </li>
                <li>
                  <FaUserCircle />
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="header_logo">
              <h1>LONGSHOP</h1>
            </div>
          </div>
          <div className="col-lg-6 ">
            <nav className="header_menu">
              <ul>
                {menu.map((menu, menukey) => (
                  <li key={menukey} className={menukey === 0 ? "active" : ""}>
                    <Link to={menu.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childkey) => (
                          <li key={`${menukey}-${childkey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 ">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{formater(150000)}</span>
              </div>
              <ul>
                <li>
                  <Link to={""}>
                    <FaShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="humberger_open">
              <MdOutlineMenu
                onClick={() => setIsShowHumberger(!isShowHumberger)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero-category-container">
          <div className="col-lg-3 col-sm-12 col-sx-12 col-md-12 hero-category">
            <div
              className="hero-category-all"
              onClick={() => setIsShowCategory(!isShowCategory)}
            >
              <MdOutlineMenu />
              Danh sách sản phẩm
            </div>
            {isShowCategory && (
              <ul className={isShowCategory ? "" : "hiden"}>
                <li>
                  <Link to={"#"}>Sản phẩm</Link>
                </li>
                <li>
                  <Link to={"#"}>Sản phẩm</Link>
                </li>
                <li>
                  <Link to={"#"}>Sản phẩm</Link>
                </li>
                <li>
                  <Link to={"#"}>Sản phẩm</Link>
                </li>
                <li>
                  <Link to={"#"}>Sản phẩm</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9 col-sm-12 col-sx-12 col-md-12 hero-search-container">
            <div className="hero-search">
              <div className="hero-search-form">
                <form>
                  <input type="text" placeholder="Bạn đang tìm gì?"></input>
                  <button type="submit">Tìm kiếm</button>
                </form>
              </div>
              <div className="hero-search-phone">
                <div className="hero-search-phone-icon">
                  <FaPhone />
                </div>
                <div className="hero-search-phone-text">
                  <p>01212522519</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero-item">
              <div className="hero-text">
                <span>Pokemon</span>
                <h2>
                  MẪU MỚI <br />
                  CHƠI LÀ CHẤT
                </h2>
                <p>Miẽn phí giao hàng tận nơi</p>
                <Link to={"#"} className="primary-button">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
