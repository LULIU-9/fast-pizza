import { useDispatch, useSelector } from "react-redux";
import { decreaseItem, getCurQuantity, increaseItem } from "./cartSlice";
import Button from "../../ui/Button";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurQuantity(id));
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItem(id))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItem(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
