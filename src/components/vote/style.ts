import styled from "styled-components";
import { motion } from "framer-motion";

export const VoteContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const SelectBox = styled(motion.div)`
  padding: 10px;
  width: 85%;
  height: 60px;
  border-radius: 20px;
  border: 3px solid #e6e6e6;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: gray;
  font-weight: 900;
  &:hover {
    border: 3px solid skyblue;
  }
`;

export const VoteResultBox = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 30px;
  font-weight: 900;
  display: flex;
  justify-content: center;
`;
