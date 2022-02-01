// import sprite from "/sprite.svg";
import s from "./GetIcon.module.css";
const GetIcon = ({ name, width, height, className }) => {
  return (
    <svg width={width} height={height} className={s[className]}>
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
};
export default GetIcon;
