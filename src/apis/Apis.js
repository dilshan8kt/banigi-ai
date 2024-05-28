import axios from "axios";

const base_url = "https://api.reimaginehome.ai";
const headers = {
  "content-type": "application/json",
  "api-key": "66530f6dbfb09206e0f67369",
};

export const createMask = (url) => {
  console.log(url);
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
