import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "content-type": "application/json" }
});

export default class Repository {
  createPayment(data) {
    let transactions = JSON.parse(localStorage.getItem("transactions"));

    return axiosInstance
      .post("/my-api/create-payment/", transactions)
      .then(function(res) {
        return res.data.id;
      });
  }

  executePayment(data) {
    return axiosInstance
      .post("/my-api/execute-payment/", {
        paymentID: data.paymentID,
        payerID: data.payerID
      })
      .then(function() {
        window.location.href = data.returnUrl;
      });
  }

  getProductsList() {
    return axiosInstance.get('/my-api/products-list/');
  }
}
