import { useAppDispatch } from "../hooks";
import { setChangeId } from "../Slices/productSlice";

const EditLine = (props: any) => {
    const dispatch = useAppDispatch()
  return (
    <>
      <span onClick={() => dispatch(setChangeId(props.id))} className="edit">Edit</span>
    </>
  );
};

export default EditLine;
