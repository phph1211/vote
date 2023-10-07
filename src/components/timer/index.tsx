import React, { useState } from "react";
import * as S from "./style";

export const Timer: React.FC = () => {
  const [time, SetTime] = useState(1111);

  return (
    <>
      <S.TimerContainer>
        <S.TimerText>투표 종료까지</S.TimerText>
        <S.Timer>{time}</S.Timer>
      </S.TimerContainer>
    </>
  );
};
