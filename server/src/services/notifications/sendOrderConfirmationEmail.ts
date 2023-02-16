import { IOrder } from '../../models';
import { sendEmail } from './sendEmail';

export async function sendOrderConfirmationEmail(
  email: string,
  order: IOrder,
): Promise<void> {
  // TODO: Talk with Dylan about putting order information in the email vs admin dashboard

  const customerMailOptions = {
    to: email,
    from: `"Krusty Krab" <krustykrabtesting@gmail.com>`,
    subject: 'Your Order is Confirmed!',
    html: `<h2>Your order was placed successfully</h2>
          <h4>We will be processing this order as soon as possible. Keep in mind 
          orders are delivered on Wednesdays. Any orders placed after Tuesday at 
          noon will be scheduled for the following Wednesday</h4>
          <button>
            <a href=http://localhost:3000}> 
              View all of your placed orders from your profile dashboard
            </a>
          </button>`,
  };

  const lagniappeMailOptions = {
    to: 'charlie.dowd1996@gmail.com',
    from: `"Krusty Krab Online Store" <krustykrabtesting@gmail.com>`,
    subject: 'New Customer Order Placed!',
    html: `<h2>View the new order in the admin dashboard if needed</h2>
          <h4>User: ${email}</h4>
          <h4>Order: ${JSON.stringify(order.orderItems)}</h4>
          <button>
            <a href=http://localhost:3000/admin>
              View order in admin dashboard
            </a>
          </button>`,
  };

  // Send Lagniappe new user order email
  await sendEmail(lagniappeMailOptions);

  // Send customer order confirmation email
  await sendEmail(customerMailOptions);
}
