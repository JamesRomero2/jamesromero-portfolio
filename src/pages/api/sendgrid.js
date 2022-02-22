import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.PUBLIC_SENDGRID_APIKEY);

export default async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "business.jamesromero@gmail.com",
      from: "haymeemotoh22@gmail.com",
      subject: `Contact Form Subject : ${req.body.subject}`,
      html: `
        <h3>
          Email From : <span>${req.body.email}</span>
        </h3>
        <h3>
          FullName : <span>${req.body.fullname}</span>
        </h3>
        <p>
          ${req.body.message}
        </p>
      `
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}