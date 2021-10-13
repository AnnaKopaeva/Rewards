import { RewardEntity } from "../interfaces/RewardEntity";

const rewards: RewardEntity[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Leanne Graham",
    },
    userBy: {
      id: 2,
      name: "Ervin Howell",
    },
    reward: 100,
    time: "4 hrs ago",
    message: "Big thanks for your help in helping on the outage today!!!",
  },
  {
    id: 2,
    user: {
      id: 3,
      name: "Clementine Bauch",
    },
    userBy: {
      id: 4,
      name: "Patricia Lebsack",
    },
    reward: 150,
    time: "Feb 1, 2021",
    message:
      "Thanks for your help in creating the product overview deck. Your help to show cases those scenarios really helped in closing the loop on the story.",
  },
];

export default rewards;
