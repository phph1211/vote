import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

export const TimerText = styled.div`
  font-size: 23px;
  font-weight: 900;
  letter-spacing: -2px;
`;

export const Timer = styled.div`
  font-size: 70px;
  font-weight: 900;
  color: black;
`;
