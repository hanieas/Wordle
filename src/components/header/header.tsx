import { APP_NAME, SVGICON } from "../../global/global";
import SvgIcon from "../svg-icons/svg-icons";
import { IHeaderProps } from "./header-interface";
import "./header.scss";

const Header = (props: IHeaderProps) => {
  const { handleShowModal } = props;
  return (
    <>
      <header>
        <div className="menu">
          <button className="icon" aria-label="help" onClick={handleShowModal}>
            <SvgIcon d={SVGICON.HELP} />
          </button>
        </div>
        <div className="title">{APP_NAME}</div>
      </header>
    </>
  );
};
export default Header;
