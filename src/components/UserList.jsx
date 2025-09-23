import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name?.split(" ")[0]}</td>
            <td>{u.name?.split(" ")[1]}</td>
            <td>{u.email}</td>
            <td>{u.company?.name}</td>
            <td>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(u)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(u.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
