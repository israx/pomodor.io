import React, { useEffect } from "react";
import { useUserStateValue } from "../../../state/user/index";
import actionTypes from "../../../state/user/actions";
import axios from "axios";
import rewardsJson from "../../../mockedData.json";

import RewardItem from "./RewardItem";

const RewardsList = () => {
  const [{ rewards }] = useUserStateValue();
  const [state, dispatch] = useUserStateValue();
  const baseURL = "https://pomodorio-api.herokuapp.com/api/get-rewards/";
  useEffect(() => {
    getRewards();
  }, []);

  const getRewards = async () => {
    let rewardsList;
    var formData = new FormData();
    var requestOptions = {
      method: "GET",
      body: formData,
      redirect: "follow",
    };

    try {
      rewardsList = await axios.get(baseURL, requestOptions);
      console.log(rewardsList);
    } catch (e) {
      console.log(e);
    }

    const mockedRewards = rewardsJson;

    dispatch({
      ...state,
      type: actionTypes.ADD_REWARD,
      rewards: mockedRewards.rewards,
    });
  };

  return (
    <div>
      {rewards.length === 0 ? (
        <h1>loading rewards</h1>
      ) : (
        rewards.map((reward) => (
          <RewardItem
            name={reward.name}
            description={reward.description}
            cost={reward.cost}
          />
        ))
      )}
    </div>
  );
};

export default RewardsList;
