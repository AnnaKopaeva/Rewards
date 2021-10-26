import * as React from "react";
import { Formik, Field, FormikProps } from "formik";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@mui/material/TextField";

import Modal from "../../components/Modal";
import Autocomplete, { FormFieldProps } from "../../components/Autocomplete";
import { CustomButton, CustomBox } from "./RewardModal.styles";

import { RewardSchema } from "./validation";
import { getUsersDataSelector } from "../../store/users/selectors";
import { createRewards } from "../../store/rewards/reducers";
import { CreateRewardEntity } from "../../interfaces/RewardEntity";

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
          touched,
          errors,
          handleChange,
          handleSubmit,
        }: FormikProps<CreateRewardEntity>) => (
          <form onSubmit={handleSubmit}>
            <CustomBox>
              <Field
                name="user"
                component={(props: FormFieldProps) => (
                  <Autocomplete
                    {...props}
                    options={users}
                    textFieldProps={{
                      label: "To",
                      helperText: touched.user && errors.user,
                      error: Boolean(touched.user && errors.user),
                    }}
                  />
                )}
              />
              <TextField
                name="reward"
                type="number"
                label="Reward"
                fullWidth
                margin="normal"
                value={values.reward}
                helperText={touched.reward && errors.reward}
                error={Boolean(touched.reward && errors.reward)}
                onChange={handleChange}
              />
              <TextField
                name="message"
                multiline
                rows={4}
                label="Why?"
                fullWidth
                margin="normal"
                value={values.message}
                onChange={handleChange}
              />
              <CustomButton color="primary" type="submit" variant="contained">
                Reward
              </CustomButton>
            </CustomBox>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default RewardModal;
