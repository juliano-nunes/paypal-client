import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://groovy-reserve-241123.appspot.com/api/v1",
  headers: { "content-type": "application/json" }
});

export default class Repository {
  createPayment(data) {
    const transactions = JSON.parse(localStorage.getItem("transactions"));

    return axiosInstance
      .post("/create-payment/", transactions)
      .then(function(res) {
        return res.data.id;
      });
  }

  executePayment(data) {
    return axiosInstance
      .post("/execute-payment/", {
        paymentID: data.paymentID,
        payerID: data.payerID
      })
      .then(function() {
        window.location.href = data.returnUrl;
      });
  }

  getProductsList() {
    return axiosInstance.get('/products-list/');
  }
}
