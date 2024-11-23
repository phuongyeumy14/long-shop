import { memo } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-sx-12">
            <div className="footer-about">
              <h1 className="footer-about-logo">LONG SHOP</h1>
              <ul>
                <li>Địa chỉ: C14 Bắc Hà, Hà Nội</li>
                <li>Phone: 0123456789</li>
                <li>Email: 6sVzT@example.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
            <div className="footer-widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to={""}>Liên hệ</Link>
                </li>
                <li>
                  <Link to={""}>Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to={""}>Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={""}>Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to={""}>Giỏ hàng</Link>
                </li>
                <li>
                  <Link to={""}>Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-sx-12">
            <div className="footer-widget">
              <h6>Khuyến mãi & ưu đãi</h6>
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="nhập email" />
                  <button type="submit" className="button-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer-widget-social">
                  <div>
                    <FaFacebook />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <CiLinkedin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
