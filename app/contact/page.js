"use client";
import React, { useState } from "react";
import Beams from "../components/aceternity/Beam";
import FloatingDockEffect from "../components/aceternity/FloatingDock";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Input,
  Textarea,
} from "@heroui/react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email to me
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });

    // Send confirmation email to user
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER,
        { ...formData, to_email: formData.userEmail }, // User's email
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent to USER successfully:", response.status, response.text);
        setIsSent(true);
      })
      .catch((err) => {
        console.error("Failed to send email to USER:", err);
      });
  };

  return (
    <Beams>
      <p className="neon mt-14 font-neon">CONTACT ME</p>
      <Card className="md:max-w-[60vw] max-w-[100vw] w-fit mx-auto my-10 z-10 glassmorphism">
        <CardHeader className="flex flex-col gap-3 text-center">
          <h2 className="text-xl text-white font-bold">Get in Touch</h2>
          <p className="text-sm text-neutral-300">
            If you have any questions, feedback, or just want to say hello, feel free to reach out!  
            I'm always available and would love to connect.   
            For an instant reply, contact me on social media or WhatsApp.  
          </p>
        </CardHeader>
        <Divider />
        <CardBody>
          {!isSent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                fullWidth
                clearable
                name="userName"
                placeholder="Your Name"
                onChange={handleChange}
                value={formData.userName}
              />
              <Input
                fullWidth
                clearable
                name="userEmail"
                type="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={formData.userEmail}
              />
              <Textarea
                fullWidth
                name="userMessage"
                placeholder="Your Message"
                onChange={handleChange}
                value={formData.userMessage}
                rows={4}
              />
              <Button type="submit" className="bg-blue-500 text-white mt-2">
                Send Message
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-lg text-green-500">Thank you! 😊 I’ve received your message and will get back to you ASAP! ✨📩</p>
            </div>
          )}
        </CardBody>
        <Divider />
        <CardFooter className="text-center text-white flex flex-col">
          <p>Follow me on social media for a quick response or message me on WhatsApp.</p>
          <FloatingDockEffect />
        </CardFooter>
      </Card>
    </Beams>
  );
};

export default Contact;
