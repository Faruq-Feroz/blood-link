import { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        bloodGroup: '',
        bodyWeight: '',
        disease: '',
        date: ''
    });

    const [appointments, setAppointments] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);

    
    const sanitizeInput = (value) => {
        return value.replace(/<[^>]*>?/gm, ''); 
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: sanitizeInput(e.target.value),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAppointments([...appointments, formData]);
        setFormData({ name: '', age: '', bloodGroup: '', bodyWeight: '', disease: '', date: '' });
        setAlertVisible(true);

        // Dismiss alert after 3 seconds
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };

    const handleDelete = (index) => {
        const newAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(newAppointments);
    };

    return (
        <div className="container" id='appointment'>
            <div className="form-section">
                <h2>Make an Appointment</h2>
                {alertVisible && (
                    <div className="alert">Appointment Added Successfully!</div>
                )}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="number" 
                        name="age" 
                        placeholder="Age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        min="1" 
                        max="120" 
                        required 
                    />
                    <input 
                        type="text" 
                        name="bloodGroup" 
                        placeholder="Blood Group" 
                        value={formData.bloodGroup} 
                        onChange={handleChange} 
                        pattern="^(A|B|AB|O)[+-]$" 
                        title="Please enter a valid blood group (e.g., A+, O-)" 
                        required 
                    />
                    <input 
                        type="number" 
                        name="bodyWeight" 
                        placeholder="Body Weight (kg)" 
                        value={formData.bodyWeight} 
                        onChange={handleChange} 
                        min="1" 
                        max="300" 
                        required 
                    />
                    <input 
                        type="text" 
                        name="disease" 
                        placeholder="Any Disease (optional)" 
                        value={formData.disease} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="submit" 
                        className="submit-button" 
                        value="Submit" 
                    />
                </form>
            </div>
            <div className="appointment-history">
                <h3>Appointments</h3>
                {appointments.length > 0 ? (
                    <table id="history-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Blood Group</th>
                                <th>Body Weight</th>
                                <th>Disease</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <tr key={index}>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.age}</td>
                                    <td>{appointment.bloodGroup}</td>
                                    <td>{appointment.bodyWeight} kg</td>
                                    <td>{appointment.disease || 'None'}</td>
                                    <td>{appointment.date}</td>
                                    <td>
                                        <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p style={{ textAlign: 'center' }}>No appointments added yet.</p>
                )}
            </div>
        </div>
    );
};

export default AppointmentForm;
