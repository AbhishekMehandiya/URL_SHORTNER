import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url,slug) =>{
    const {data} = await axiosInstance.post("/api/create",{url,slug})
    return data.shortUrl
}
export const deleteUrl = async (id) => {
  
  return await axiosInstance.delete(`/api/user/delete/${id}`);
};
