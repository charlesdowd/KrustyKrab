import { isApproved } from '../../../store/hooks';
import { BannerTitle, PendingApprovalDiv } from './CurrentOrderPage.styled';

const PendingApprovalBanner = () => {
  // Do not render anything if user is already approved
  if (isApproved()) return;

  return (
    <PendingApprovalDiv>
      <BannerTitle>Account not approved</BannerTitle>
      <div>
        You currently can not place orders because your account is still pending
        approval with Lagniappe Foods. Once your account gets approved, you will
        will be notified and allowed to place orders.
      </div>
    </PendingApprovalDiv>
  );
};

export default PendingApprovalBanner;
