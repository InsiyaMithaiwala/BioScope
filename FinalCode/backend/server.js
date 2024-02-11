const express = require("express");
const { Vonage } = require("@vonage/server-sdk");

// Initialize Express app
const app = express();

// Initialize Vonage client
const vonage = new Vonage({
  apiKey: "dae8b1c6",
  apiSecret: "DX0eoPUjyosbiu2Y",
});

app.use(express.json());

app.post("/submit-form", (req, res) => {
  const { issue, location, dateAndTime, description, identity } = req.body;

  const message = `New SOS report:
    Issue: ${issue}
    Location: ${location}
    Date and Time: ${dateAndTime}
    Description: ${description}
    Identity: ${identity}
  `;

  // Specify the sender and recipient phone numbers
  const from = "Vonage APIs";
  const to = "917506852862"; // Replace with your recipient phone number

  // Send SMS using Vonage API
  vonage.message.sendSms(to, from, message, (err, responseData) => {
    if (err) {
      console.error("Error sending SMS:", err);
      res.status(500).json({ error: "Failed to send SMS" });
    } else {
      console.log("SMS sent successfully");
      res.status(200).json({ message: "Form submitted successfully" });
    }
  });
});


// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
