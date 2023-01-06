import React, { useState } from "react";

const FormPirabu = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendSms = () => {
    const smsUrl = `sms:+33760774934?body=${encodeURIComponent(message)}`;
    window.open(smsUrl, "_blank");
  };

  const handleSendWhatsAppMessage = () => {
    const url = `https://wa.me/+33760774934?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handeleMail = () => {
    const url = `mailto:pirabu.chandran@gmail.com?subject=Contact Designer Pirabu&body=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <form>
      <label>
        <textarea
          value={message}
          placeholder=" Have something to say?
          Use this field to send a message."
          onChange={handleMessageChange}
        />
      </label>
      <button type="button" onClick={handleSendSms}>
        SMS
      </button>
      <button type="button" onClick={handleSendWhatsAppMessage}>
        WhatsApp
      </button>
      <button type="button" onClick={handeleMail}>
        By Mail
      </button>
    </form>
  );
};

export default FormPirabu;
