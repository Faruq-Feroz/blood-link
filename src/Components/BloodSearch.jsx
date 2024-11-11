import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const BloodSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const donors = [
        { name: 'Hassan Faruq', bloodType: 'A+', location: 'Nairobi' },
        { name: 'Jane Kamau', bloodType: 'O-', location: 'Nakuru' },
        { name: 'Halima Abdalla', bloodType: 'B+', location: 'Mombasa' },
        { name: 'Amanda Kyla', bloodType: 'AB+', location: 'Nairobi' },
        { name: 'Michael Mutiso', bloodType: 'A-', location: 'Makueni' },
        { name: 'John Chege', bloodType: 'B-', location: 'Kiambu' },
        { name: 'Peter Omondi', bloodType: 'O+', location: 'Kisumu' },
        { name: 'Paul Wanjala', bloodType: 'AB-', location: 'Vihiga' },
    ];

    const handleSearch = () => {
        const results = donors.filter(donor =>
            donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            donor.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredResults(results);

      
        setTimeout(() => setFilteredResults([]), 5000);
    };

    const clearResults = () => {
        setFilteredResults([]);
    };

    return (
        <div className="blood-search-container" id='find-blood'>
            <h2>Search for Blood Donors</h2>
            <div className="search-input-container">
                <input 
                    type="text" 
                    placeholder="Enter blood type or location" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="search-input" 
                />
                <button onClick={handleSearch} className="search-button">
                    <FaSearch />
                    Search
                </button>
            </div>

            {/* Display search results */}
            {filteredResults.length > 0 && (
                <div className="search-results">
                    {filteredResults.map((donor, index) => (
                        <div key={index} className="donor-card">
                            <h3>{donor.name}</h3>
                            <p>Blood Type: {donor.bloodType}</p>
                            <p>Location: {donor.location}</p>
                        </div>
                    ))}
                   <button 
  onClick={clearResults} 
  className="clear-button" 
  style={{
    backgroundColor: "red", 
    color: 'white', 
    padding: '10px 20px', 
    border: 'none',
    borderRadius: '5px', 
    fontSize: '16px', 
    cursor: 'pointer', 
    transition: 'background-color 0.3s ease', 
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#9b4dca'} 
  onMouseOut={(e) => e.target.style.backgroundColor = '#6a0dad'} 
>
  Clear Results
</button>

                </div>
            )}
        </div>
    );
};

export default BloodSearch;
