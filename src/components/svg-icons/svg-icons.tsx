import { ISvgIcon } from "./svg-icons-interface";
import "./svg-icons.scss";
const SvgIcon = (props: ISvgIcon) => {
  const {
    xmlns = "http://www.w3.org/2000/svg",
    height = "24",
    viewBox = "0 0 24 24",
    width = "24",
    fill = "var(--color-tone-3)",
    d,
    handleClick,
  } = props;

  return (
    <svg
      onClick={handleClick}
      xmlns={xmlns}
      height={height}
      viewBox={viewBox}
      width={width}
    >
      <path fill={fill} d={d}></path>
    </svg>
  );
};
export default SvgIcon;
