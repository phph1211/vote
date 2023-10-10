import React, { useState, useEffect } from "react";
import * as S from "./style";
import { color } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../index";

export const Timer: React.FC = () => {
  const [minute, setMinute] = useState(15);
  const [second, setSecond] = useState(0);

  const changeColorData = useSelector((state: RootState) => state.changeColor);
  const timeOverData = useSelector((state: RootState) => state.timeOver);
  const dispatch = useDispatch();

  useEffect(() => {
    const countDown = setTimeout(() => {
      setSecond(second - 1);
      if (second === 0) {
        setSecond(59);
        setMinute(minute - 1);
      }
      if (minute === 0 && second === 0) {
        dispatch({ type: "timeOver" });
      }

      if (minute === 5 && second === 0) {
        dispatch({ type: "turn" });
      }
    }, 1000);
  }, [minute, second]);

  return (
    <>
      <S.TimerContainer style={{ display: timeOverData ? "none" : "flex" }}>
        <S.TimerText>투표 종료까지</S.TimerText>
        <S.Timer style={{ color: changeColorData ? "red" : "black" }}>
          {minute}:{second}
        </S.Timer>
      </S.TimerContainer>
    </>
  );
};
