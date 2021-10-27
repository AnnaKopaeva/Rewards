import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";

import { RewardEntity } from "../../interfaces/RewardEntity";
import { selectProfileData } from "../../store/profile/selectors";
import { createReward } from "../../store/rewards/reducers";

const useRewardModal = () => {
  const dispatch = useDispatch();

  const profile = useSelector(selectProfileData);

  const onSubmit = (values: RewardEntity) => dispatch(createReward(values));

  const initialReward: RewardEntity = {
    id: Date.now(),
    user: null,
    rewardCount: "",
    rewardCurrency: "$",
    message: "",
    time: dayjs().unix(),
    userBy: profile,
  };

  return {
    initialReward,
    onSubmit,
  };
};

export default useRewardModal;
