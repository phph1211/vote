import styled from "styled-components";

export const StatusContainer = styled.div`
  width: 100%;
  height: 250px;
`;
export const StatusContentsBox = styled.div``;

export const VoteStatus = styled.div`
  padding: 5px;
  width: 170px;
  height: 45px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const VoteStatusText = styled.p`
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -2px;
`;

export const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #00ff00;
`;

export const StatusText = styled.p`
  font-size: 40px;
  letter-spacing: -8px;
  font-weight: 900;
`;
