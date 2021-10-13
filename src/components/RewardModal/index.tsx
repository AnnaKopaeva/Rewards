import * as React from "react";
import { useSelector } from "react-redux";

import Modal from "../Modal";
import Autocomplete from "../Autocomplete";
import Input from "../Input";

import { getUsersDataSelector } from "../../store/users/selectors";

import "./RewardModal.scss";

interface RewardModalProps {
  open: boolean;
  handleCloseModal(): void;
}

const RewardModal: React.FC<RewardModalProps> = ({ open, handleCloseModal }) => {
  const [inputValue, setInputValue] = React.useState("");

  const users = useSelector(getUsersDataSelector);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Modal isOpen={open} successBtn="Reward" onClose={handleCloseModal}>
      <div className="modal_form">
        <div className="modal_field">
          <span className="modal_field__label">To</span>
          <Autocomplete data={users} />
        </div>
        <div className="modal_field">
          <span className="modal_field__label">Reward</span>
          <Input value={inputValue} placeholder="$" onChange={onChange} />
        </div>
        <div className="modal_field">
          <span className="modal_field__label">Why?</span>
          <textarea className="input" rows={4} />
        </div>
      </div>
    </Modal>
  );
};

export default RewardModal;
