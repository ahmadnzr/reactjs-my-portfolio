import style from "./Intro.module.css";
import photo from "../../assets/images/photo.png";
import doubleQoutes from "../../assets/images/double-qoutes.png";
const Intro = () => {
  return (
    <div className={style.intro}>
      <div className={style.introLeft}>
        <p>
          Hi, <br /> Saya <span className={style.nama}>Nizar</span>
          <br />
          seorang <span className={style.title}>Fullstack Web Developer</span>
        </p>
        <div className={style.button}>
          <button className={style.contactMe}>Contact Me</button>
          <button className={style.download}>Download My CV</button>
        </div>
      </div>
      <div className={style.introRight}>
        <img src={doubleQoutes} alt="" className={style.qoutes} />
        <p className={style.desc}>
          BERADAB - BERILMU - BERMANFAAT. <br />
          Belajar dari kesalahan untuk untuk perbaikan dimasa yang akan datang.
          <br />
          Itu semua adalah motto saya untuk terus berkembang.
        </p>
        <span>- ahmad nizar -</span>
      </div>
      <div className={style.fotoWrapper}>
        <img src={photo} alt="" className={style.photo} />
        <div className={style.lingkaran} />
      </div>
    </div>
  );
};

export default Intro;
