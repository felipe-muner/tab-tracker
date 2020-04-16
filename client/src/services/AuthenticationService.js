import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  }
};

// AuthenticationService.register({
//   email: "blabla@gmail.com",
//   password: "123456"
// });
