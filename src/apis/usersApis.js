import axios from "axios";
import { API_BASE_URL, BACKEND_API_URL } from "../constants/config";
import { errorMsg } from "../common/alert";

const base_url = BACKEND_API_URL;
const headers = {
  "content-type": "application/json",
  //   "api-key": API_KEY,
};

export const saveMainUploadImage = (props, uid, jobId, url) => {
  return axios
    .post(
      `${base_url}/api/images/uploaded`,
      {
        uid: uid,
        jobId: jobId,
        imageUrl: url,
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      console.log(error);
      errorMsg("Something went wrong with api..!");
    });
};

export const saveGeneratedImage = (props, uid, jobId, urls) => {
  return axios
    .post(
      `${base_url}/api/images/generated`,
      {
        uid: uid,
        jobId: jobId,
        imageUrl: urls,
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};
