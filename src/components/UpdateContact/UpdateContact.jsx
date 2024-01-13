import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateContact = () => {
  const [contact, setContact] = useState({
    id: 1,
    name: 'Tnz',
    phoneNumber: '123456789',
    emailId: 'xxxxxx@gmail.com',
  });

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const response = await axios.get('/api/contacts/' + contact.id);

      if (response.data) {
        setContact(response.data);
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put('/api/data/' + contact.id, contact);

      if (response.data) {
        console.log('Data updated successfully!');
      } else {
        console.error('Error updating data:', response.status);
      }
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
  };

  return (
    <div className="p-4">
      <label className="block mb-2">Name:</label>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleInputChange}
        className="border p-2 mb-4"
      />

      <label className="block mb-2">Phone Number:</label>
      <input
        type="text"
        name="phoneNumber"
        value={contact.phoneNumber}
        onChange={handleInputChange}
        className="border p-2 mb-4"
      />

      <label className="block mb-2">Email ID:</label>
      <input
        type="text"
        name="emailId"
        value={contact.emailId}
        onChange={handleInputChange}
        className="border p-2 mb-4"
      />
      <br />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Update Contact
      </button>
    </div>
  );
};

export default UpdateContact;
