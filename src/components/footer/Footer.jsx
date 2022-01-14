import style from "./Footer.module.css";
import { BsInstagram, BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.contact}>
        <h1 className={style.title}>Contact</h1>
        <p className={style.desc}>Hubungi saya,</p>
        <div className={style.content}>
          <a
            href="mailto:ahmad.rpl001@gmail.com"
            target="_blank"
            className={style.link}
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <span className={style.item}>
              <MdEmail className={style.icon} />
            </span>
            ahmad.rpl001@gmail.com
          </a>
        </div>
      </div>
      <div className={style.menu}>
        <h1 className={style.title}>Links</h1>
        <p className={style.desc}>Jelajahi lebih jauh :</p>
        <div className={style.content}>
          <Link to={`/`} className={style.link}>
            - Home
          </Link>
          <Link to={`/portfolio`} className={style.link}>
            - Portfolio
          </Link>
          <Link to={`/timeline`} className={style.link}>
            - Timeline
          </Link>
        </div>
      </div>
      <div className={style.media}>
        <h1 className={style.title}>Social</h1>
        <p className={style.desc}>
          Ingin terhubung dengan saya, ikuti saya di :
        </p>
        <div className={style.content}>
          <div className={style.social}>
            <span className={style.item}>
              <BsInstagram className={style.icon} />
            </span>
            <span className={style.item}>
              <BsFacebook className={style.icon} />
            </span>
            <span className={style.item}>
              <BsYoutube className={style.icon} />
            </span>
            <span className={style.item}>
              <BsLinkedin className={style.icon} />
            </span>
          </div>
          <div className={style.copyright}>
            <span>© 2022 ahmad nizar</span>
            <span>develop with ❤️ using reactjs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
