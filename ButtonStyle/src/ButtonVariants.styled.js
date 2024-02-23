import styled from 'styled-components';

export const ButtonView = styled.button`
  background-color: ${({ filled, bg }) => (filled ? bg : '#fff')};
  color: ${({ filled, color }) => (filled ? color : '#000')};
  border: ${({ filled }) => (filled ? 'none' : '2px solid #000')};
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;