import BoardList from "../../components/Board/BoardList";
// import Categories from "../../components/Board/Categories";
// import { useState, useCallback } from "react";

const BoardListPage = () => {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      {/* <Categories category={category} onSelect={onSelect} /> */}
      <BoardList />
    </>
  );
};

export default BoardListPage;
