import axios from "axios";
import { API_BASE_URL, API_KEY } from "../constants/config";

const base_url = API_BASE_URL;
const headers = {
  "content-type": "application/json",
  "api-key": API_KEY,
};

export const createMask = (url) => {
  return axios
    .post(
      `${base_url}/v1/create_mask`,
      {
        image_url: `${url}`,
        webhook_url: "",
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => error);
};

export const getMask = (job_id) => {
  return axios
    .get(`${base_url}/v1/create_mask/${job_id}`, { headers })
    .then((response) => response.data)
    .catch((error) => error);
};

export const generateImage = (url, masksArr, type, style, color, no) => {
  console.log(no);
  return axios
    .post(
      `${base_url}/v1/generate_image`,
      {
        image_url: `${url}`,
        mask_urls: masksArr,
        mask_category: "furnishing",
        space_type: type,
        design_theme: style,
        masking_element: "Wall",
        color_preference: color,
        material_preference: "",
        landscaping_preference: "",
        generation_count: no,
        additional_prompt: "",
        webhook_url: "",
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => error);
};

export const getGeneratedImage = (job_id) => {
  return axios
    .get(`${base_url}/v1/generate_image/${job_id}`, { headers })
    .then((response) => response.data)
    .catch((error) => error);
};
