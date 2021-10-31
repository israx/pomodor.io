import React, { useEffect } from "react";
import { useUserStateValue } from "../../../state/user/index";
import actionTypes from "../../../state/user/actions";
import axios from "axios";

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
      const { data } = rewardsList;
      dispatch({
        ...state,
        type: actionTypes.ADD_REWARD,
        rewards: data.rewards,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {rewards.length === 0 ? (
        <h1>loading rewards</h1>
      ) : (
        rewards.map((reward, index) => (
          <RewardItem
            key={index}
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
