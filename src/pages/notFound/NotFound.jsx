import style from "./Notfound.module.css";

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div>
        <h1 className={style.title}>Page Not Found !! 😥</h1>
        <p className={style.desc}>
          Periksa url anda, pastikan url benar. <br /> silahkan pilih menu yang
          ada di link yang disediakan
        </p>
      </div>
    </div>
  );
};

export default NotFound;
