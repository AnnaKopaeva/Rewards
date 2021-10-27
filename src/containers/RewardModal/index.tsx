import * as React from "react";
import { Formik, Field, FormikProps } from "formik";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Modal from "../../components/Modal";
import Autocomplete, { FormFieldProps } from "../../components/Autocomplete";

import { RewardSchema } from "./validation";
import { selectUsersData } from "../../store/users/selectors";
import { createRewards } from "../../store/rewards/reducers";
import { CreateRewardEntity } from "../../interfaces/RewardEntity";

import styles from "./RewardModal.styles";

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

  const users = useSelector(selectUsersData);

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
            <Box sx={styles.form}>
              <Field
                name="user"
                component={(props: FormFieldProps) => (
                  <Autocomplete
                    {...props}
                    options={users}
                    textFieldProps={{
                      label: "To",
                      placeholder: "Select User",
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
                InputProps={{ placeholder: "Enter rewards" }}
                fullWidth
                margin="normal"
                value={values.reward}
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
              />
              <Button color="primary" type="submit" variant="contained" sx={styles.btn}>
                Reward
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default RewardModal;
