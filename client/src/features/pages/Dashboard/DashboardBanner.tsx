import { Container } from 'react-bootstrap';
import { BannerRoot, RedSection, TagLine } from './Dashboard.styled';

const DashboardBanner = () => {
  return (
    <BannerRoot>
      <Container>
        <RedSection>
          <TagLine>A Little Something Extra</TagLine>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Email Billing Department:</span>
            <span>
              <a
                style={{ color: 'white' }}
                href='mailto: arap@lagniappefoods.com'
              >
                arap@lagniappefoods.com
              </a>
            </span>
          </div>
        </RedSection>
      </Container>
    </BannerRoot>
  );
};

export default DashboardBanner;
