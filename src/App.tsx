import * as React from "react";

import Feed from "./containers/Feed";
import Header from "./containers/Header";
import RewardModal from "./containers/RewardModal";

import "./styles.scss";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <div className="main">
      <Header />
      <Feed handleOpenModal={handleOpenModal} />
      <RewardModal open={open} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default App;
