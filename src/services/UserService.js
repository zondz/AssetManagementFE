import axios from "axios";

const API_URL = "http://localhost:8080/";

const create = data => {
    return axios.post(API_URL + "users", data);
  };

  const UserService = {
    create
  };
  export default UserService;