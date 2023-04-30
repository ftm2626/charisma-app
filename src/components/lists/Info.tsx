import TextItem from "components/items/TextItem";
import UseInfo from "hooks/UseInfo";
import { useDispatch } from "react-redux";
import { DeleteList } from "store/list";


function Info() {
  const { searchedList, input, onSearch } = UseInfo();
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-white p-3 flex flex-col gap-3 justify-between  mb-5 lg:m-0 h-[30rem]">
      <form action="">
        <input
          type="text"
          value={input}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search..."
          className="border border-gray-300 rounded w-full p-2"
        />
      </form>
      <div className="overflow-y-scroll">
        {searchedList.map(({ id, name, info }) => (
          <TextItem key={id} name={name} val={info} type="text" />
        ))}
      </div>
      <button
        onClick={() => dispatch(DeleteList())}
        className=" bg-blue-500 rounded text-white p-2 shadow-sm shadow-gray-500"
      >
        CLEAR LIST
      </button>
    </div>
  );
}

export default Info;
