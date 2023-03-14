import { FunctionComponent } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectCurrentOrder } from '../../../store/slices/orderSlice';
import { Root, Header } from './CurrentOrderPage.styled';
import DeadlineBanner from './DeadlineBanner';
import PendingApprovalBanner from './PendingApprovalBanner/PendingApprovalBanner';
import SubmitSection from './SubmitSection';
import CurrentOrder from './CurrentOrder/CurrentOrder';

const CurrentOrderPage: FunctionComponent = () => {
  const currentOrder = useAppSelector(selectCurrentOrder);

  return (
    <Root>
      <PendingApprovalBanner />

      <Header>
        <h1 className='mb-4'>Current Order</h1>
        <DeadlineBanner />
      </Header>

      <CurrentOrder currentOrder={currentOrder} />

      <SubmitSection currentOrder={currentOrder} />
    </Root>
  );
};

export default CurrentOrderPage;
