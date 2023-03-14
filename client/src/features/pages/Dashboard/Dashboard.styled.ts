import styled from 'styled-components';

export const Root = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistoryRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;
  text-align: left;
  padding-top: 180px;
`;

export const OrderRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 3px solid black;
`;

export const BannerRoot = styled.div`
  height: 62px;
  background-color: rgb(53, 53, 53);
  width: 100%;
  position: absolute;
`;

export const RedSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 124px;
  border-radius: 24px;
  background-color: #f84e54;
  color: white;
  padding: 0 40px;
`;

const Header = styled.span`
  position: absolute;
  color: #0000006b;
  font-weight: 600;
`;

export const Headers = styled.div`
  position: relative;
  margin: 24px 0;
`;

export const DescriptionHeader = styled(Header)`
  left: 40px;
`;

export const QuantityHeader = styled(Header)`
  left: 50%;
`;

export const DateHeader = styled(Header)`
  right: 40px;
`;

export const Title = styled.span`
  color: #070f29;
  font-weight: 600;
  font-size: 28px;
`;

export const BannerText = styled.span`
  color: white;
  font-weight: 600;
  font-size: 14px;
  a {
    font-size: 16px;
    color: white;
  }
`;

export const TagLine = styled(BannerText)`
  font-size: 32px;
`;
