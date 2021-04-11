import { Endpoint, RequestType } from "firebase-backend";
import { Request, Response } from "express";

export default new Endpoint(
  'addPaymentMethod',
  RequestType.POST,
  (request: Request, response: Response) => {
    const cardNumber = request.body['card_number'];
    const cardHolder = request.body['card_holder'];

    var paymentToken = `${cardNumber}_${cardHolder}`;

    return response.status(201).send({
      token: paymentToken
    });
  }
);