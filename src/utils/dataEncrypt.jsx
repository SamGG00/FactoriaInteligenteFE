import CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_SECRET_KEY;

export const encryptStorage = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptStorage = (data) => {
  if (!data) return null;
  const bytes = CryptoJS.AES.decrypt(data, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};