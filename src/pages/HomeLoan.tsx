// HomeLoan.tsx
import React from 'react';
import './HomeLoan.css';

const HomeLoan = () => {
  const partners = [
    { name: "Bajaj Housing Finance", rate: "8.5% p.a.", tenure: "30 years" },
    { name: "Indian Bank", rate: "8.5% p.a.", tenure: "30 years" },
    { name: "Bank of Baroda Home Loan", rate: "8.6% p.a.", tenure: "30 years" },
    { name: "LIC Housing Finance", rate: "8.6% p.a.", tenure: "30 years" },
    { name: "Godrej Housing Finance", rate: "8.6% p.a.", tenure: "30 years" },
    { name: "L&T Housing Finance", rate: "8.6% p.a.", tenure: "25 years" },
    { name: "HDFC Bank", rate: "8.7% p.a.", tenure: "30 years" },
    { name: "Kotak Mahindra Bank", rate: "8.7% p.a.", tenure: "30 years" },
    { name: "Axis Bank Home Loan", rate: "8.7% p.a.", tenure: "30 years" },
  ];

  return (
    <div className="home-loan-page">
      <section className="how-it-works">
        <h2>How it works?</h2>
        <div className="steps">
          <div>1. Fill an online form to view the best offers.</div>
          <div>2. Our executive helps you choose the best offer.</div>
          <div>3. We pick up documents at your doorstep.</div>
          <div>4. Bank reviews your application and confirms approval.</div>
        </div>
      </section>

      <section className="loan-partners">
        <h3>Top Home Loan Bank Partners</h3>
        <table>
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Interest Rate</th>
              <th>Max Tenure</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner, index) => (
              <tr key={index}>
                <td>{partner.name}</td>
                <td>{partner.rate}</td>
                <td>{partner.tenure}</td>
                <td><button>Know More</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="pre-approved-loan">
        <h3>Property not finalized yet?</h3>
        <p>
          Unlock the power of a pre-approved loan. Apply now and make your
          property search more focused and easy.
        </p>
        <ul>
          <li>Plan your budget smartly</li>
          <li>Get the loan processed quickly</li>
        </ul>
        <button>Explore Now</button>
      </section>
    </div>
  );
};

export default HomeLoan;
