import * as React from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";

import useToggleModal from "./hooks/useToggleModal";
import Feed from "./containers/Feed";
import Header from "./containers/Header";
import RewardModal from "./containers/RewardModal";

import { getUsers } from "./store/users/reducers";

const styles = {
  width: "60%",
  maxWidth: "960px",
  margin: "100px auto 0",
};

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { open, handleOpenModal, handleCloseModal } = useToggleModal();

  return (
    <>
      <Box sx={styles}>
        <Header />
        <Feed handleOpenModal={handleOpenModal} />
        <RewardModal open={open} handleCloseModal={handleCloseModal} />
      </Box>
    </>
  );
};

export default App;
