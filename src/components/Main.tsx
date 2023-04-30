import Names from "components/lists/Names";
import Info from "components/lists/Info";
import EmptyList from "components/lists/EmptyList";

function MainComponent() {
  return (
    <div className=" p-12 lg:flex justify-center align-middle items-center h-full lg:flex-row gap-5 lg:gap-6 xl:px-32">
      <Names />
      <Info />
      <EmptyList />
    </div>
  );
}

export default MainComponent;
