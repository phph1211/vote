import React, { useState } from "react";
import * as S from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../index";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { color } from "framer-motion";

export const Vote: React.FC = () => {
  const timeOverData = useSelector((state: RootState) => state.timeOver);
  const [selectedBox, setSelectedBox] = useState<any>();

  const selectBoxList = ["1번 선택지", "2번 선택지", "3번 선택지"];

  const BoxClick = (index: number) => {
    setSelectedBox(index);
  };

  return (
    <>
      <S.VoteContainer>
        {selectBoxList.map((value, index) => {
          return (
            <S.SelectBox
              whileTap={{ scale: 0.95 }}
              onClick={() => BoxClick(index)}
              style={{
                border: selectedBox === index ? "3px solid #00BFFF" : "",
                display: timeOverData ? "none" : "flex",
              }}
              key={index}
            >
              {selectBoxList[index]}
              {selectedBox === index ? (
                <BsFillCheckCircleFill size={40} color="#00BFFF" />
              ) : (
                <BsFillCheckCircleFill size={40} />
              )}
            </S.SelectBox>
          );
        })}
      </S.VoteContainer>
    </>
  );
};
