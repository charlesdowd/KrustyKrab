import styled from 'styled-components';
import { ToggleButton, ToggleButtonGroup, Container } from 'react-bootstrap';

export const ProductList = styled.table`
  border-collapse: separate;
  border-spacing: 0 1em;

  td:first-child,
  th:first-child {
    border-radius: 10px 0 0 10px;
  }

  td:last-child,
  th:last-child {
    border-radius: 0 10px 10px 0;
  }

  // Hide 3rd/4th columns on smaller screen sizes
  @media (max-width: 768px) {
    th:nth-child(3),
    td:nth-child(3) {
      display: none;
    }
    th:nth-child(4),
    td:nth-child(4) {
      display: none;
    }
  }
`;

export const TableHeader = styled.th`
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.32);
  padding: 6px;

  @media (min-width: 768px) {
    padding: 0 16px;
  }

  @media (min-width: 992px) {
    padding: 0 24px;
  }
`;

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const FavoriteDiv = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 85px;
  border-radius: 16px;
  margin: -10px 0;
  padding: 5px;
  :hover {
    background-color: #d3d3d3;
  }
`;

export const TopBar = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const Filter = styled.input`
  width: 420px;
  height: 40px;
  border-radius: 8px;
  padding: 8px 8px 8px 36px;
  font-size: medium;
  background-color: #3131311f;
  border: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  height: 20px;
  left: 8px;
`;

export const ContactInfo = styled.div`
  display: flex;
  padding: 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  gap: 6px;
  flex-direction: column;
`;

export const EmailLink = styled.a`
  color: #070f29;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const EmailText = styled.span`
  color: rgba(0, 0, 0, 0.3);
  line-height: 24px;
`;

export const ButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  margin: 32px 0;
  background-color: rgba(0, 0, 0, 0.04);
  overflow: auto;
  border-radius: 12px !important;

  .btn-check:checked + .btn,
  .btn.active,
  .btn.show,
  .btn:first-child:active,
  :not(.btn-check) + .btn:active {
    background-color: #f84e54;
  }

  .btn:hover {
    color: rgba(0, 0, 0, 0.6);
    background: none;
  }

  label.btn.btn-primary {
    border-radius: 12px !important;
  }
`;

export const SectionButton = styled(ToggleButton)`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.6);
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    padding: 16px 24px;
    font-size: 16px;
  }
`;

export const EmptyProductsContainer = styled(Container)`
  text-align: center;
`;
