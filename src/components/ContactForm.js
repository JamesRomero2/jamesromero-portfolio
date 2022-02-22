import React, {useState} from 'react'; 

import FormStyles from '../styles/components/form.module.scss';

const ContactForm = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [frmFullName, setFrmFullName] = useState("");
  const [frmEmail, setFrmEmail] = useState("");
  const [frmSubject, setFrmSubject] = useState("");
  const [frmMessage, setFrmMessage] = useState("");
  const [messageoverlay, setMessageoverlay] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleValidation = () => {
    let isValid = true;

    if (frmFullName.length <= 0 || frmEmail.length <= 0 || frmSubject.length <= 0 || frmMessage.length <= 0) {
      isValid = false;
    }

    console.log("Error in the fields");
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          fullname: frmFullName,
          email: frmEmail,
          subject: frmSubject,
          message: frmMessage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setMessageoverlay(true);
        setShowResult(false);
        setButtonText("Send");

        setFrmFullName("");
        setFrmEmail("");
        setFrmSubject("");
        setFrmMessage("");
        return;
      }
      setMessageoverlay(true);
      setShowResult(true);
      setButtonText("Send");

      setFrmFullName("");
      setFrmEmail("");
      setFrmSubject("");
      setFrmMessage("");
    }
    
    console.log(frmFullName, frmEmail, frmSubject, frmMessage);

    setTimeout(() => {
      setMessageoverlay(false);
    }, 5000);
    
  };

  return (
    <form className={FormStyles.form} onSubmit={handleSubmit}>

      <label htmlFor="fullname" className={FormStyles.form__fullname__title}>
        Full name
        <span>*</span>
      </label>
      <input type={'text'} name="fullname" placeholder='This message came from ?' className={FormStyles.form__fullname__input} value={frmFullName} onChange={(e) => {setFrmFullName(e.target.value);}} required/>
      <label htmlFor="email" className={FormStyles.form__email__title}>
        Email
        <span>*</span>
      </label>
      <input type={'email'} name="email" placeholder='Where should i send my reply ?' className={FormStyles.form__email__input} value={frmEmail} onChange={(e) => {setFrmEmail(e.target.value);}} required/>
      <label htmlFor="subject" className={FormStyles.form__subject__title}>
        Subject
        <span>*</span>
      </label>
      <input type={'text'} name="subject" placeholder='This message is a ?' className={FormStyles.form__subject__input} value={frmSubject} onChange={(e) => {setFrmSubject(e.target.value);}} required/>
      <label htmlFor="message" className={FormStyles.form__message__title}>
        Message
        <span>*</span>
      </label>
      <textarea type={'text'} name="message" placeholder='Hello !' className={FormStyles.form__message__input} value={frmMessage} onChange={(e) => {setFrmMessage(e.target.value);}} required/>

      <div className={FormStyles.form__bottom}>
        <div className={FormStyles.form__bottom__left}>
          {
            messageoverlay && (
              <>
                {
                  showResult ? (
                    <p>Message sent !</p>
                  ) : (
                    <p>Something went wrong.</p>
                  )
                }
              </>
            )
          }
        </div>
        <div>
          <button type="button" className={FormStyles.form__bottom__clear}>
            Clear
          </button>
          <button type="submit" className={FormStyles.form__bottom__send}>
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm