import DataTable from 'react-data-table-component';
import OrderItemsColumn from './OrderItemsColumn';
import { Root } from '../../Dashboard/Dashboard.styled';
import { useAdminGetOrdersQuery } from '../../../../store/slices/api/templateApi';

// TODO: Refactor based on conversation with Dylan. Add expandable row component + possible 'Processed' column
const AdminOrderHistory = () => {
  const { data: orderData, isLoading } = useAdminGetOrdersQuery();
  const columns = [
    {
      name: 'Customer',
      selector: (row) => row.customer.email,
    },
    {
      name: 'Date Created',
      selector: (row) => new Date(row.createdAt).toLocaleDateString('en-US'),
    },
    {
      name: 'Order Items',
      selector: (row) => <OrderItemsColumn orderItems={row.orderItems} />,
    },
  ];
  return (
    <Root>
      <h1>Order History</h1>
      {isLoading ? (
        <h3>...Loading</h3>
      ) : (
        <div className='mt-4' style={{ width: '100%' }}>
          <DataTable columns={columns} data={orderData?.orders} />
        </div>
      )}
    </Root>
  );
};

export default AdminOrderHistory;
