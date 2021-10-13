import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal";
import Autocomplete from "../Autocomplete";
import Input from "../Input";

import { getUsersDataSelector } from "../../store/users/selectors";
import { createRewards } from "../../store/rewards/reducers";
import { CreateRewardEntity } from "../../interfaces/RewardEntity";
import { UserEntity } from "../../interfaces/UserEntity";

import "./RewardModal.scss";

interface RewardModalProps {
  open: boolean;
  handleCloseModal(): void;
}

export const initialReward: CreateRewardEntity = {
  user: null,
  reward: "",
  message: "",
};

const RewardModal: React.FC<RewardModalProps> = ({ open, handleCloseModal }) => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState(initialReward);

  const users = useSelector(getUsersDataSelector);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    name: string
  ) => {
    const { value } = event.target;
    setData({ ...data, [name]: value });
  };

  const onClose = () => {
    setData(initialReward);
    handleCloseModal();
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(createRewards(data));
    onClose();
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <form onSubmit={handleSubmit} className="modal_form">
        <div className="modal_field">
          <span className="modal_field__label">To</span>
          <Autocomplete<UserEntity>
            data={users}
            value={data.user}
            onChange={(value) => setData({ ...data, user: value })}
          />
        </div>
        <div className="modal_field">
          <span className="modal_field__label">Reward</span>
          <Input value={data.reward} placeholder="$" onChange={(e) => onChange(e, "reward")} />
        </div>
        <div className="modal_field">
          <span className="modal_field__label">Why?</span>
          <textarea
            value={data.message}
            onChange={(e) => onChange(e, "message")}
            className="input"
            rows={4}
          />
        </div>
        <button type="submit" className="modal__btn">
          Reward
        </button>
      </form>
    </Modal>
  );
};

export default RewardModal;
