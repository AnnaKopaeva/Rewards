import * as React from "react";
import { Formik, FormikProps, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../components/Modal";
import Autocomplete from "../../components/Autocomplete";
import Input from "../../components/Input";

import { RewardSchema } from "./validation";
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

  const users = useSelector(getUsersDataSelector);

  const onSubmit = (values: CreateRewardEntity) => {
    dispatch(createRewards(values));
    handleCloseModal();
  };

  return (
    <Modal isOpen={open} onClose={handleCloseModal}>
      <Formik
        initialValues={initialReward}
        validationSchema={RewardSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({
          values,
          setFieldValue,
          handleChange,
          handleSubmit,
        }: FormikProps<CreateRewardEntity>) => (
          <form onSubmit={handleSubmit} className="modal_form">
            <div className="modal_field">
              <span className="modal_field__label">To</span>
              <Autocomplete<UserEntity>
                name="user"
                data={users}
                value={values.user}
                onChange={(value) => {
                  console.log("value", value);
                  return setFieldValue("user", value);
                }}
              />
              <ErrorMessage name="user" component="span" className="modal_field__error" />
            </div>
            <div className="modal_field">
              <span className="modal_field__label">Reward</span>
              <Input
                name="reward"
                type="number"
                value={values.reward}
                placeholder="$"
                onChange={handleChange}
              />
              <ErrorMessage name="reward" component="span" className="modal_field__error" />
            </div>
            <div className="modal_field">
              <span className="modal_field__label">Why?</span>
              <textarea
                name="message"
                rows={4}
                value={values.message}
                className="input"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="modal__btn">
              Reward
            </button>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default RewardModal;
