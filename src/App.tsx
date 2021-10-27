import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import useToggleModal from "./hooks/useToggleModal";
import Feed from "./containers/Feed";
import Header from "./containers/Header";
import RewardModal from "./containers/RewardModal";
import Layout from "./components/Layout";

import { fetchUser } from "./store/users/actions";
import { selectProfileLoaded } from "./store/profile/selectors";

const App = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(selectProfileLoaded);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const { open, handleOpenModal, handleCloseModal } = useToggleModal();

  return (
    <Layout loading={!isLoaded}>
      <Header />
      <Feed onOpen={handleOpenModal} />
      <RewardModal open={open} onClose={handleCloseModal} />
    </Layout>
  );
};

export default App;
