import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import useToggleModal from "./hooks/useToggleModal";
import Feed from "./containers/Feed";
import Header from "./containers/Header";
import RewardModal from "./containers/RewardModal";
import Preloader from "./components/Preloader";

import { getRewardsLoadingSelector } from "./store/rewards/selectors";
import { getUsers } from "./store/users/reducers";

import "./styles.scss";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { open, handleOpenModal, handleCloseModal } = useToggleModal();
  const isLoading = useSelector(getRewardsLoadingSelector);

  return (
    <>
      {!isLoading ? (
        <div className="main">
          <Header />
          <Feed handleOpenModal={handleOpenModal} />
          <RewardModal open={open} handleCloseModal={handleCloseModal} />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
