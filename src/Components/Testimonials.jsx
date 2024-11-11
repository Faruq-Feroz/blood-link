

import 'bootstrap/dist/css/bootstrap.min.css'; 

const testimonials = [
  {
    name: "Wanjiru Mwangi",
    role: "Donor",
    message: "Donating blood was an incredible experience. The team was very supportive and made me feel comfortable throughout the process!",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1NdaOH7L5qW01boBcXa7iLy2Eb-EiVrlCg&s",
    rating: 5,
  },
  {
    name: "David Otieno",
    role: "Volunteer",
    message: "Being a volunteer has been one of the most fulfilling experiences of my life. I love being part of a community that saves lives!",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDAGL2lhB6FMilYpz4BlCvFJoeigr19P-OQ&s", 
    rating: 4,
  },
  {
    name: "Aisha Abdallah",
    role: "Recipient",
    message: "I am grateful for the blood donors. Their generosity saved my life during a critical time, and I cannot thank them enough!",
    photo: "https://i.pinimg.com/474x/22/9e/a6/229ea6cb0ce3655fa0b4ab99533ba7e8.jpg", 
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container" id='testimonials'>
      <h2 className='donors'>What Our Donors Say</h2>
      <div className="testimonials row">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <img src={testimonial.photo} alt={testimonial.name} className="rounded-circle" />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="message">"{testimonial.message}"</p>
            <p className="rating">{"★".repeat(testimonial.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
