import { useState, useEffect } from 'react';
export default function Home() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        // const response = await fetch('https://reqres.in/api/users?page=1');
        const userList = [
          { id: 1, fullName: 'Tauseef Anwar', phoneNumber: '8586896868' },
        ];
        // const data = await response.json().data;
        setUserList(userList);
      } catch (error) {
        console.error('Error fetching UserList:', error);
      }
    };

    fetchUserList();
  }, []);
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid  place-items-center sm:mt-10">
        <div>
          <h2>Phone Book List</h2>
          <ul>
            {userList.map((contact) => (
              <li key={contact.id}>
                <h1>
                  {contact.id}.{contact.fullName} - {contact.phoneNumber}{' '}
                  <button
                    // onClick={}
                    className={`bg-blue-500 text-white p-2 rounded `}
                  >
                    Update
                  </button>
                  <button
                    // onClick={}
                    className={`bg-blue-500 text-white p-2 rounded `}
                  >
                    Delete
                  </button>
                </h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
