import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const GooglePay = () => {
  const baseRequest = {
      apiVersion: 2,
      apiVersionMinor: 0
  };

  
  const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      'gateway': 'example',
      'gatewayMerchantId': 'exampleGatewayMerchantId'
    }
  };

  const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];
  const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];



  const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: allowedCardAuthMethods,
      allowedCardNetworks: allowedCardNetworks
    }
  };

  const cardPaymentMethod = Object.assign(
    {tokenizationSpecification: tokenizationSpecification},
    baseCardPaymentMethod
  );



  function loadGooglePay() {
    const script = document.createElement('script');

    script.src = "https://pay.google.com/gp/p/js/pay.js"
    script.async = true;
    script.onload="onGooglePayLoaded()"

    document.body.appendChild(script);
  }

  const paymentsClient =
    new google.payments.api.PaymentsClient({environment: 'TEST'});

  const isReadyToPayRequest = Object.assign({}, baseRequest);
  isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];

  paymentsClient.isReadyToPay(isReadyToPayRequest)
    .then(function(response) {
      if (response.result) {
        // add a Google Pay payment button
      }
    })
    .catch(function(err) {
      // show error in developer console for debugging
      console.error(err);
    });

  return (
    <div class="gpay">
    </div>
  )
}

export default GooglePay 
