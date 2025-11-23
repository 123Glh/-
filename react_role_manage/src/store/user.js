/**
 * user:{userInfo,menuInfo}
 * token
 */
import { observable, action, computed } from "mobx";
import api from "../api";
import axios from "../util/axios";
class user {
  user;
  token;
  @observable isLogin = false;
  @computed get user() {
    return JSON.parse(sessionStorage.getItem("user") || "{}");
  }
  set user(value) {
    sessionStorage.setItem("user", JSON.stringify(value));
  }
  @computed get token() {
    return sessionStorage.getItem("token") || "";
  }
  set token(value) {
    sessionStorage.setItem("token", value);
  }
  @action
  userLogin(userInput) {
    return new Promise((resolve, reject) => {
      axios.post(api.user.useLogin, userInput).then((res) => {
        if (res.data.returnCode === 200) {
          this.user = res.data.data;
          this.token = res.data.token;
          resolve(res.data);
        } else {
          reject(res.data);
        }
      });
    });
  }
}

export default new user();
