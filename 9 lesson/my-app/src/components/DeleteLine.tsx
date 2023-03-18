import { useAppDispatch } from "../hooks";
import { deleteProduct } from "../Slices/productSlice";

const DeleteLine = (props: any) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <span onClick={() => dispatch(deleteProduct(props.id))} className="del">Delete</span>
    </>
  );
};

export default DeleteLine;
