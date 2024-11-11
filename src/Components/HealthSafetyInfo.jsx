import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HealthSafetyInfo = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      title: 'Preparation for Blood Donation',
      content: 'To prepare for your blood donation, make sure to eat a healthy meal and drink plenty of water before your appointment. Avoid fatty foods as they can affect the tests we perform on your blood.',
      additionalInfo: 'Also, wear a shirt with sleeves that can be rolled up, and bring a valid ID with you. After donation, enjoy some refreshments to help you recover.',
    },
    {
      title: 'Post-Donation Care',
      content: 'After donating blood, it is important to rest for a few minutes and enjoy some snacks and drinks provided at the donation site. These refreshments are crucial for replenishing your energy levels and helping your body recover. Make sure to take this time to relax and allow your body to adjust.',
      additionalInfo: 'You may also want to avoid heavy exercise for the rest of the day and ensure to stay hydrated. If you feel faint or dizzy, lie down and elevate your legs.',
    },
    {
      title: 'Blood Donation Safety Tips',
      content: 'Your safety is our priority. We ensure all equipment is sterile and used only once. Our trained staff will guide you through the process.',
      additionalInfo: 'Feel free to ask any questions before or during your donation. We also recommend discussing any health concerns with our staff before proceeding.',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="container mt-4 health-safety-info" id='health-safety'>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4 d-flex" key={index}> {/* Flexbox container */}
            <div className="info-card p-4 d-flex flex-column"> {/* Flex column layout */}
              <h3>{card.title}</h3>
              <p>{card.content}</p>
              {expandedCard === index && <p className="additional-info">{card.additionalInfo}</p>}
              <button onClick={() => toggleExpand(index)} className="read-more-button mt-auto">
                {expandedCard === index ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthSafetyInfo;
