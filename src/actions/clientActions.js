import api from "../data/axiosInstance";
import { toast } from "react-hot-toast";

export const setUser = (user) => ({ type: "SET_USER", payload: user });
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const fetchRoles = () => async (dispatch, getState) => {
  if (getState().client.roles.length === 0) {
    try {
      const response = await api.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Roller alınırken hata oluştu:", error);
    }
  }
};

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
  try {
    const response = await api.post("/login", credentials);
    const userData = response.data;

    dispatch(setUser(userData));

    if (rememberMe) {
      localStorage.setItem("token", userData.token);
    } else {
      sessionStorage.setItem("token", userData.token);
    }

    toast.success("Giriş Başarılı!", {
      duration: 1500,
      position: "top-right",
      style: {
        background: "#4caf50",
        color: "#fff",
      },
    });

    return userData;
  } catch (error) {
    console.error("Giriş Başarısız:", error);

    toast.error("Giriş başarısız oldu! Yönlendiriliyor...", {
      duration: 1500,
      position: "top-right",
      style: {
        background: "#e74c3c",
        color: "#fff",
      },
    });

    setTimeout(() => {
      window.location.reload();
    }, 1500);

    throw error;
  }
};

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) return;

  try {
    api.defaults.headers.common["Authorization"] = token;

    const response = await api.get("/verify");
    const userData = response.data;

    dispatch(setUser(userData));

    localStorage.setItem("token", userData.token);
    api.defaults.headers.common["Authorization"] = userData.token;

    console.log("Auto Login Successful:", userData);
  } catch (error) {
    console.error("Auto login failed, token expired or invalid:", error);

    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  delete api.defaults.headers.common["Authorization"];

  dispatch(setUser(null));

  toast.success("Başarıyla çıkış yapıldı!", {
    duration: 1500,
    position: "top-right",
    style: {
      background: "#4caf50",
      color: "#fff",
    },
  });

  setTimeout(() => {
    window.location.href = "/";
  }, 1500);
};
