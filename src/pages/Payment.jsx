// src/pages/Payment.js
import React, { useState, useEffect } from 'react';
// import '../styles/Payment.css';

function Payment() {
  const [balance, setBalance] = useState(0);
  const [amountNeeded, setAmountNeeded] = useState(1000);
  const [amountWithdrawn, setAmountWithdrawn] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Simulate fetching user payment data
  useEffect(() => {
    // Mock data for demonstration
    setTimeout(() => {
      setBalance(500);
      setAmountWithdrawn(200);
    }, 1000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate payment processing
    setTimeout(() => {
      setBalance(balance + 100);
      setMessage('Payment successful! Your balance has been updated.');
      setLoading(false);
      
      // Reset form
      setPaymentMethod('');
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>Payment Information</h2>
      
      <div className="payment-summary">
        <div className="payment-info">
          <h3>Account Summary</h3>
          <div className="payment-detail">
            <span>Current Balance:</span>
            <span>${balance}</span>
          </div>
          <div className="payment-detail">
            <span>Amount Withdrawn:</span>
            <span>${amountWithdrawn}</span>
          </div>
          <div className="payment-detail">
            <span>Amount Needed:</span>
            <span>${amountNeeded - balance}</span>
          </div>
        </div>
      </div>

      <div className="payment-form-container">
        <h3>Add Funds</h3>
        {message && <div className="payment-message success">{message}</div>}
        
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select a payment method</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          
          {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
            <>
              <div className="form-group">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiry-date">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry-date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    required
                    maxLength="4"
                  />
                </div>
              </div>
            </>
          )}
          
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              defaultValue="100"
              min="10"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="payment-button"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Add Funds'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;