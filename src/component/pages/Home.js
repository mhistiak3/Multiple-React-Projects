import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsesr();
  }, []);
  const loadUsesr = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete("http://localhost:3003/users/" + id);
    loadUsesr();
  };
  return (
    <div className="container">
      <div className="py-4 table-responsive">
        <table className="table border shadow table-hover align-middle">
          <thead className="table-dark ">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/user/viwe/${user.id}`} className="btn btn-outline-primary btn-sm">
                    Viwe
                  </Link>
                  <Link
                    to={`/user/edit/${user.id}`}
                    className="btn btn-outline-success mx-md-2 btn-sm"
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
