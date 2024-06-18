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

export const saveGeneratedImage = (
  props,
  uid,
  jobId,
  urls,
  category = "",
  type = "",
  model = "",
  style = "",
  color = "",
  number_of_designs = 1,
  ai_invention = "",
  pathway = "",
  plants = "",
  additional_prompt = ""
) => {
  return axios
    .post(
      `${base_url}/api/images/generated`,
      {
        uid: uid,
        jobId: jobId,
        imageUrl: urls,
        category: category,
        type: type,
        model: model,
        style: style,
        color: color,
        number_of_designs: number_of_designs,
        ai_invention: ai_invention,
        pathway: pathway,
        plants: plants,
        additional_prompt: additional_prompt,
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const createUserSign = (uid, email, userName) => {
  return axios
    .post(
      `${base_url}/auth/signup`,
      {
        uid: uid,
        email: email,
        userName: userName,
      },
      { headers }
    )
    .then((response) => response.data)
    .catch((error) => {
      // props.manageLoader(false);
      // errorMsg("Duplicate entry");
      console.log(error);
    });
};

export const getMainImage = (props, uid) => {
  return axios
    .get(`${base_url}/api/images/uploaded/${uid}`, { headers })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getGeneratedImages = (props, uid) => {
  return axios
    .get(`${base_url}/api/images/generated/${uid}`, { headers })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getJobUid = (props, uid, jobId) => {
  return axios
    .get(`${base_url}/api/images/jobUser?uid=${uid}&jobId=${jobId}`, {
      headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getAllImages = (props) => {
  return axios
    .get(`${base_url}/api/images/all/`, {
      headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      props.manageLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};

export const getAllImagesByUid = (setLoader, uid) => {
  return axios
    .get(`${base_url}/api/images/all/byUser/${uid}`, {
      headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      setLoader(false);
      errorMsg("Something went wrong with api..!");
    });
};
