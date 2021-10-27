import * as React from "react";
import { useDispatch } from "react-redux";

import useToggleModal from "./hooks/useToggleModal";
import Feed from "./containers/Feed";
import Header from "./containers/Header";
import RewardModal from "./containers/RewardModal";
import Layout from "./components/Layout";

import { getUsers } from "./store/users/reducers";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { open, handleOpenModal, handleCloseModal } = useToggleModal();

  return (
    <Layout>
      <Header />
      <Feed handleOpenModal={handleOpenModal} />
      <RewardModal open={open} handleCloseModal={handleCloseModal} />
    </Layout>
  );
};

export default App;
