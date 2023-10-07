import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import * as S from "./style";

export const StatusContents: React.FC = () => {
  return (
    <>
      <S.StatusContainer>
        <S.StatusContentsBox>
          <MdOutlineArrowBackIosNew size={37} color="gray" />
          <S.VoteStatus>
            <S.ColorCircle></S.ColorCircle>
            <S.VoteStatusText>투표 진행 중</S.VoteStatusText>
          </S.VoteStatus>
          <S.StatusText>
            학생 공연팀 <br />
            투표를 진행해주세요!
          </S.StatusText>
        </S.StatusContentsBox>
      </S.StatusContainer>
    </>
  );
};
