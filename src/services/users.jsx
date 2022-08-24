import Api from "./api";

const UsersService = {
  register: (params) => Api.post("/users/register", params),
  login: async (params) => {
    const response = await Api.post("/users/login", params);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token);
  },
  logout: async () => {
    localStorage.removeItem("user", null);
    localStorage.removeItem("token", null);
  },
  update: async (params) => {
    const token = localStorage.getItem("token");
    const response = await Api.put("/users/update", params, {
      headers: { "x-acess-token": token },
    });
    localStorage.setItem("user", JSON.stringify(response.data));
  },
};

export default UsersService;
