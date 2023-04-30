import { useDispatch, useSelector } from "react-redux";
import { RemoveFromList, SelectListType } from "store/list";

function EmptyList() {
  const dispatch = useDispatch();
  const list = useSelector(SelectListType);
  return (
    <div className="w-full bg-white p-3 gap-3 h-[30rem]">
      {list.map(({ id, text }) => (
        <button
          className="rounded-full bg-blue-500 p-2 m-2 text-white text-xs"
          onClick={() => dispatch(RemoveFromList(id))}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default EmptyList;
