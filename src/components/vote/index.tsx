import React, { useState } from "react";
import * as S from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../index";

export const Vote: React.FC = () => {
  const timeOverData = useSelector((state: RootState) => state.timeOver);
  const [selectedBox, setSelectedBox] = useState<any>();

  const selectBoxList = ["1번 선택지", "2번 선택지", "3번 선택지"];

  const handleBoxClick = (index: number) => {
    setSelectedBox(index);
  };

  return (
    <>
      <S.VoteContainer>
        {selectBoxList.map((value, index) => {
          return (
            <S.SelectBox
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBoxClick(index)}
              style={{
                border: selectedBox === index ? "3px solid blue" : "",
                display: timeOverData ? "none" : "flex",
              }}
              key={index}
            >
              {selectBoxList[index]}
            </S.SelectBox>
          );
        })}
      </S.VoteContainer>
    </>
  );
};
