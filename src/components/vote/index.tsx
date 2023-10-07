import React from "react";
import * as S from "./style";

export interface VoteTextProps {
  text: string;
}

export const SelectBox: React.FC<VoteTextProps> = (props) => {
  return <S.SelectBoxContainer>{props.text}</S.SelectBoxContainer>;
};

export const Vote: React.FC = () => {
  return (
    <>
      <S.VoteContainer>
        <SelectBox text="1번"></SelectBox>
        <SelectBox text="2번"></SelectBox>
        <SelectBox text="3번"></SelectBox>
      </S.VoteContainer>
    </>
  );
};
