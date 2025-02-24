import { reactive } from "vue";
import router from "../router/index.js";
import axios from "axios";
import Swal from "sweetalert2";

const authStore = reactive({
  apiBase: "http://localhost:8000",
  isAuthenticated: sessionStorage.getItem("auth") == 1,
  user: JSON.parse(sessionStorage.getItem("user")),
  errors: null,

  async fetchPublicApi(endPoint = "", params = {}, requestType = "GET") {
    let request = {
      method: requestType.toUpperCase(),
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    };

    if (
      requestType.toUpperCase() == "POST" ||
      requestType.toUpperCase() == "PUT"
    ) {
      request.body = JSON.stringify(params);
    }

    const res = await fetch(authStore.apiBase + endPoint, request);
    const response = await res.json();
    return response;
  },

  async fetchProtectedApi(endPoint = "", params = {}, requestType = "GET") {
    const token = authStore.getUserToken();
    let request = {
      method: requestType.toUpperCase(),
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (
      requestType.toUpperCase() == "POST" ||
      requestType.toUpperCase() == "PUT"
    ) {
      request.body = JSON.stringify(params);
    }

    const res = await fetch(authStore.apiBase + endPoint, request);
    const response = await res.json();
    return response;
  },

  // async uploadProtectedApi(endPoint = "", params = {}) {
  //   const token = authStore.getUserToken();

  //   const res = await axios.post(authStore.apiBase + endPoint, params, {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "multipart/form-data",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   const response = await res.data;
  //   return response;
  // },
  // async uploadProtectedApi(endPoint = "", params = {}) {
  //   const token = authStore.getUserToken();

  //   const res = await axios.post(authStore.apiBase + endPoint, params, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   return res.data;
  // },

  //--------NEW by Ourself------------
  async uploadProtectedApi(endPoint = "", params = {}, requestType = "POST") {
    const token = authStore.getUserToken();

    // Prepare the request configuration
    let request = {
      method: requestType.toUpperCase(), // Handle both POST and PUT
      headers: {
        "Access-Control-Allow-Origin": "*", // Handle CORS for local development
        Accept: "application/vnd.api+json", // Handle API response format
        "Content-Type": "multipart/form-data", // Multipart form-data for file uploads
        Authorization: `Bearer ${token}`, // Add the authorization header
      },
    };

    // Add the params as the body for POST and PUT requests
    if (
      requestType.toUpperCase() === "POST" ||
      requestType.toUpperCase() === "PUT"
    ) {
      request.data = params; // Use data instead of body for axios
    }

    // Make the axios request
    const res = await axios(authStore.apiBase + endPoint, request);

    // Return the response data
    return res.data;
  },

  async authenticate(username, password, remember_token) {
    try {
      const response = await authStore.fetchPublicApi(
        "/api/login",
        { email: username, password: password, remember_token: remember_token },
        "POST"
      );

      if (response.status === "success") {
        authStore.isAuthenticated = true;
        authStore.user = response.data;
        sessionStorage.setItem("auth", 1);
        sessionStorage.setItem("user", JSON.stringify(response.data));

        // Check session storage
        console.log(sessionStorage.getItem("auth")); // Should return 1
        console.log(sessionStorage.getItem("user")); // Should return user data

        // Redirect based on user type
        switch (response.data.type) {
          case "individual":
            router.push({ name: "individual-dashboard-initial-content" });
            break;
          case "organisation":
            router.push({ name: "dashboard-initial-content" });
            break;
          case "superadmin":
            //this.superAdminUserData(response.data.id); no needed
            router.push({ name: "initial-content" });
            break;
          default:
            router.push({ name: "login" });
        }

        console.log(authStore.isAuthenticated); // Should be true after login
        console.log(authStore.user); // Should return user data after login
        console.log(authStore.getUserToken()); // Should return the token if the user is logged in
        console.log(response.data.type); // Check which user type is being returned

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        authStore.errors = response.errors || "An error occurred during login.";
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: response.message || "Invalid login credentials",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login error",
        text: "An unexpected error occurred. Please try again.",
      });
    }
  },

  logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await authStore.fetchProtectedApi("/api/logout", {}, "POST");

          // Clear frontend authentication status
          authStore.isAuthenticated = false;
          authStore.user = {};
          sessionStorage.setItem("auth", 0);
          sessionStorage.setItem("user", "{}");
          router.push({ name: "login" });

          Swal.fire({
            icon: "success",
            title: "Logged Out",
            text: "You have been logged out successfully.",
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } catch (error) {
          console.error("Logout failed:", error);
          Swal.fire({
            icon: "error",
            title: "Logout Failed",
            text: "There was an issue logging out. Please try again.",
          });
        }
      }
    });
  },

  getUserToken() {
    return authStore.user?.accessToken;
  },

  getUserType() {
    return authStore.user?.type;
  },
});

export { authStore };
