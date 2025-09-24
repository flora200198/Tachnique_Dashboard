
import React, { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../Api/userApi";
import UserList from  "../components/UserList";
import UserForm from "../components/UserForm"

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const { data } = await getUsers();
      setUsers(data);
    } catch (err) {
      alert("Failed to fetch users");
    }
  };

  const handleSave = async (user) => {
    try {
      if (user.id) {
        await updateUser(user.id, user);
        setUsers(users.map((u) => (u.id === user.id ? user : u)));
      } else {
        const { data } = await addUser(user);
        setUsers([...users, { ...user, id: data.id }]);
      }
      setShowForm(false);
      setSelectedUser(null);
    } catch (err) {
      alert("Error saving user");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch {
      alert("Error deleting user");
    }
  };

  return (
    <div className="container mt-4">
      <h2>User Management Dashboard</h2>
      <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>Add User</button>

      {showForm ? (
        <UserForm selectedUser={selectedUser} onSave={handleSave} onCancel={() => setShowForm(false)} />
      ) : (
        <UserList users={users} onEdit={(u) => { setSelectedUser(u); setShowForm(true); }} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Dashboard;
