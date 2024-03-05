import React, { useEffect, useRef, useState } from 'react';

function Pill({ image, text, onClick }) {
    console.log(image, text, onClick);
  return (
    <span
      className="flex items-center h-1 gap-1 bg-black text-white px-5 py-10 rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt="" className="h-full object-cover" />
      <span>{text} &nbsp; &times;</span>
    </span>
  );
}

function MultiSelect() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  const inputref = useRef(null);

  useEffect(() => {
    const fetchUsers = () => {
      if (searchTerm.trim() === '') {
        setSearchSuggestion([]);
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSearchSuggestion(data))
        .catch((err) => console.log(err));
    };
    fetchUsers();
  }, [searchTerm]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm('');
    setSearchSuggestion([]);
    inputref.current.focus();
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter((selectedUser) => selectedUser.id !== user.id);

    setSelectedUsers(updatedUsers);

    const updatedEmails = new Set(setSelectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && e.target.value === '' && selectedUsers.length > 0) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSearchSuggestion([]);
    }
  };

  return (
    <div className="user-search-input relative p-10 w-full h-screen bg-rose-200">
      <div className="usersearchinput w-full flex flex-wrap gap-8 p-1 border-2 rounded-2xl border-black bg-white items-center ">
        {/* Pills */}
        {selectedUsers.map((user) => {
          return (
            <Pill
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={() => handleRemoveUser(user)}
            />
          );
        })}

        {/* Input feild with search suggestion */}

        <div className="">
          <input
            type="text"
            ref={inputref}
            className="border-none h-4 p-1 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for a user..."
          />
          {/* Search suggestions */}
          <ul className="suggestions mx-3 my-5 flex flex-col gap-2 max-h-80 overflow-auto">
            {searchSuggestion?.users?.map((user, idx) => {
              return !selectedUserSet.has(user.email) ? (
                <li
                  key={`${idx}-${user.email}`}
                  className="flex gap-3 p-3 px-5 bg-rose-400 rounded-full font-semibold text-md hover:bg-rose-300"
                  onClick={() => handleSelectUser(user)}
                >
                  <img
                    src={user.image}
                    alt={user.firstName}
                    height="20"
                    width="20"
                    className="object-cover"
                  />
                  <span className="">
                    {user.firstName}&nbsp; {user.lastName}
                  </span>
                  <span className="">{user.email}</span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MultiSelect;
