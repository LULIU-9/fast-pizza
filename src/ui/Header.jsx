import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <h1 className="text-center text-3xl font-bold underline ">
        Hello world!
      </h1>
      <Link to="/">Fast Pizza Co.</Link>
      <p>Jonas</p>
      <SearchOrder />
    </header>
  );
};

export default Header;
