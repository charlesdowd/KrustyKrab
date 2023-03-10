import { Container } from 'react-bootstrap';
import {
  BannerRoot,
  BannerText,
  RedSection,
  TagLine,
} from './Dashboard.styled';

const DashboardBanner = () => {
  return (
    <BannerRoot>
      <Container>
        <RedSection>
          <TagLine>A Little Something Extra</TagLine>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <BannerText>Email Billing Department</BannerText>
            <BannerText>
              <a href='mailto: arap@lagniappefoods.com'>
                arap@lagniappefoods.com
              </a>
            </BannerText>
          </div>
        </RedSection>
      </Container>
    </BannerRoot>
  );
};

export default DashboardBanner;
