import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const ViweUser = () => {
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
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users/" + id);
    setUser(result.data);
  };
  console.log(user);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto my-4 text-center">
          <div class="card">
            <ul class="list-group list-group-flush">
              <h3 class="list-group-item py-2">Name: {user.name}</h3>
              <h3 class="list-group-item py-2">Username: {user.username}</h3>
              <h3 class="list-group-item py-2">Email: {user.email}</h3>
              <h3 class="list-group-item py-2">Phone: {user.phone}</h3>
              <h3 class="list-group-item py-2">
                Website: <a href="">{user.website}</a>
              </h3>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViweUser;
