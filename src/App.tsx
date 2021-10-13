import * as React from "react";

import Feed from "./components/Feed";
import Header from "./components/Header";
import RewardModal from "./components/RewardModal";

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
