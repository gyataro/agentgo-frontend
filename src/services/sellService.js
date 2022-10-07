import axios from "axios";

const baseUrl = "http://localhost:3003/api/sells";

const readAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const readOne = async (sellId) => {
  const response = await axios.get(`${baseUrl}/${sellId}`);
  return response.data;
};

const create = async (sell) => {
  const response = await axios.post(baseUrl, sell);
  return response.data;
};

const addSignature = async (sellId, personId, date, signature) => {
  const formData = new FormData();
  formData.append("date", date);
  formData.append("signature", signature);

  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await axios.put(
    `${baseUrl}/${sellId}/agreement/${personId}/sign`,
    formData,
    options
  );
  return response.data;
};

const createAgreementForm = async (sellId) => {
  const response = await axios.post(`${baseUrl}/${sellId}/agreement/form`);
  return response.data;
};

const sellService = {
  readAll,
  readOne,
  addSignature,
  create,
  createAgreementForm,
};

export default sellService;
