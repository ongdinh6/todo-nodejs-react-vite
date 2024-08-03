import axiosInstance from "axiosInstance";

class InternalAPI {
  systemNotification = async () => {
    return await axiosInstance.get("/api/notify");
  }
}

export default InternalAPI;
