import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../index";

export const StatusContents: React.FC = () => {
  const timeOverData = useSelector((state: RootState) => state.timeOver);
  const text1 = timeOverData ? "투표 종료" : "투표 진행 중";

  const text2 = timeOverData ? "투표가 종료되었어요" : "투표를 진행해주세요";
  return (
    <>
      <S.StatusContainer>
        <S.StatusContentsBox>
          <MdOutlineArrowBackIosNew size={37} color="gray" />
          <S.VoteStatus>
            <S.ColorCircle
              style={{ backgroundColor: timeOverData ? "yellow" : "#00ff00" }}
            ></S.ColorCircle>
            <S.VoteStatusText>{text1}</S.VoteStatusText>
          </S.VoteStatus>
          <S.StatusText>
            <p style={{ marginBottom: "10px" }}>학생 공연팀</p>
            {text2}
          </S.StatusText>
        </S.StatusContentsBox>
      </S.StatusContainer>
    </>
  );
};
