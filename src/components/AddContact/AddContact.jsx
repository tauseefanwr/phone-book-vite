import { useState } from 'react';

const AddContact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const apiUrl = '/api/contacts';

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailIdChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const formData = JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        emailId: emailId,
      });
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Data posted successfully!');
      } else {
        console.error('Error posting data:', response.status);
      }
    } catch (error) {
      console.error('Error posting data:', error.message);
    }
  };

  return (
    <div className="grid  place-items-center sm:mt-10">
      <div className="p-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="border p-2 mb-4"
        />

        <label className="block mb-2">Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="border p-2 mb-4"
        />

        <label className="block mb-2">Email ID:</label>
        <input
          type="text"
          value={emailId}
          onChange={handleEmailIdChange}
          className="border p-2 mb-4"
        />
        <label className="block mb-2"></label>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default AddContact;
