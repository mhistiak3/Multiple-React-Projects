import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  let { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    loadUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:3003/users/" + id, user);
    history.push("/");
  };
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users/" + id);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-4 mt-5 rounded">
        <h1 className="text-center mb-4">Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your WebSite Name"
              name="website"
              value={user.website}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
