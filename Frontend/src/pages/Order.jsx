import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets";

const Order = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, cartItems, food_list } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['postcode', 'phone'].includes(name)) {
      if (!/^\d*$/.test(value)) return;
      if (name === 'phone' && value.length > 12) return;
    }
    if (['firstName', 'lastName', 'city', 'state', 'country'].includes(name)) {
      if (/\d/.test(value)) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const address = `${formData.street}, ${formData.city}, ${formData.state}, ${formData.postcode}, ${formData.country}`;

  // html for email
  const orderedItemsHtml = Object.keys(cartItems)
    .map((itemId) => {
      const item = food_list.find((food) => food._id === itemId);
      if (!item) return '';
      const quantity = cartItems[itemId];
      const subtotal = item.price * quantity;
      return `
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px;">${item.name}</td>
          <td style="padding: 10px; text-align: center;">${quantity}</td>
          <td style="padding: 10px; text-align: right;">$${subtotal.toFixed(2)}</td>
        </tr>
      `;
    })
    .join('');

  const sendEmailNotification = async () => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          subject: 'Order Confirmation',
          html: `
            <table style="width: 100%; background-color: #f8f9fa; padding: 20px; font-family: Arial, sans-serif;">
              <tr>
                <td>
                  <table style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <tr>
                      <td style="text-align: center; padding: 10px 0;">
                        <h1 style="color: #333; font-size: 24px; margin: 0;">Order Confirmation</h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; padding: 20px 0;">
                        <img src="https://your-public-url.com/ty.png" alt="Thank You" style="width: 100%; max-width: 300px; height: auto; border-radius: 10px;">
                      </td>
                    </tr>
                    <tr>
                      <td style="color: #333; padding: 10px; font-size: 16px; line-height: 1.6;">
                        <p style="margin: 0;">Hello <strong>${formData.firstName} ${formData.lastName}</strong>,</p>
                        <p style="margin: 16px 0;">Thank you for your order! Here are the details:</p>
                        <p style="margin: 8px 0;"><strong>Address:</strong> ${address}</p>
                        <table style="width: 100%; margin: 16px 0; border-collapse: collapse;">
                          <thead>
                            <tr style="background-color: #f1f1f1;">
                              <th style="padding: 10px; text-align: left;">Item</th>
                              <th style="padding: 10px; text-align: center;">Quantity</th>
                              <th style="padding: 10px; text-align: right;">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${orderedItemsHtml}
                          </tbody>
                        </table>
                        <p style="margin: 8px 0;"><strong>Total Amount:</strong> $${getTotalCartAmount() + 2}</p>
                        <p style="margin: 16px 0;">If you have any questions, feel free to contact us.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; padding: 10px 0;">
                        <p style="font-size: 14px; color: #666; margin: 0;">Thank you for shopping with us!</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          `,
        }),
      });

      const data = await response.json();
      console.log('Server response:', data);
      if (data.success) {
        alert('Email notification sent successfully!');
        return true;
      } else {
        alert(`Failed to send email notification: ${data.message}`);
        return false;
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email: ' + error.message);
      return false;
    }
  };

  const handleProceedToPayment = async (event) => {
    event.preventDefault();
    const emailSent = await sendEmailNotification();
    if (emailSent) {
      navigate('/DoneOrder');
    }
  };

  return (
    <form className="flex items-start justify-between gap-[50px] mt-[100px]" onSubmit={handleProceedToPayment}>
      <div className="w-full max-w-[max(30%,500px)]">
        <p className="text-[30px] font-semibold mb-[50px]">Delivery Info</p>
        <div className="flex gap-2.5">
          <input type="text" name="firstName" required placeholder="First Name" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input type="text" name="lastName" required placeholder="Last Name" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input type="email" name="email" required placeholder="Email" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text" name="street" required placeholder="Street" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"
          value={formData.street}
          onChange={handleChange}
        />
        <div className="flex gap-2.5">
          <input type="text" name="city" required placeholder="City" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"
            value={formData.city}
            onChange={handleChange}
          />
          <input type="text" name="state" required placeholder="State" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2.5">
          <input type="text" name="postcode" required placeholder="Zip code" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"
            value={formData.postcode}
            onChange={handleChange}
          />
          <input type="text" name="country" required placeholder="Country" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <input type="text" name="phone" required placeholder="Phone" pattern="\d{12}" className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-aqua"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mt-12 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Cart Totals</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center text-gray-600 text-lg">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center text-gray-600 text-lg">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center text-gray-800 font-semibold text-xl">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit" className="text-white bg-orange-500 w-full max-w-xl py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-200"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Order;