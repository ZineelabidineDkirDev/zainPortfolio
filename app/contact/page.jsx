"use client";

import MagicTitle from "@/components/ui/magicTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const info = [
    {
      icon:<FaEnvelope/>,
      title:"Email",
      description: <a href="mailto:zineelabidinedkir@gmail.com">zineelabidinedkir@gmail.com</a>
    },
    {
      icon:<FaPhoneAlt/>,
      title:"Phone number",
      description:<a href="tel:0624438140">(+212) 624-438140</a>
    },
    {
      icon:<FaMapMarkedAlt/>,
      title:"Address",
      description:"Agdal 2 , Rabat "
    },
  ]
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  

    emailjs.send('service_z4iaxha', 'template_6tkugq6', {
      firstName,
      lastName,
      phone,
      email,
      service,
      message,
    }, '--59ex8lQD1wGRzdy')
    .then((result) => {
      console.log('Message sent successfully!', result.text);
      toast.success('Message sent successfully!'); // Success toast
    }, (error) => {
      console.error('Error sending message:', error.text);
      toast.error('Failed to send message. Please try again later.'); // Error toast
    });


    setEmail("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setMessage("");
    setService("");
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 1 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 2.2, ease: easeIn },
      }}
      className="py-6 xl:mx-[144px] my-16"
    >
      {/* <MagicTitle title="Contact" /> */}
      
      {/* Toaster for toast notifications */}
      <Toaster position="top-right" reverseOrder={false} /> 

      <div className="container ">
        <div className="flex flex-col xl:flex-row gap-[80px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl font-bold text-white">Let’s Create Something Great Together!</h3>
              <p className="text-white/60 leading-7">
                Need help or just want to explore new opportunities? Contact us, and we’ll guide you through every step. We can’t wait to hear from you!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Firstname"
                />
                <Input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <Input
                  type="tel"
                  name="PhoneNumber"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                />
              </div>

              <Select className="active:bg-black" onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choose any service</SelectLabel>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Web Design - Prototype">Web Design - Prototype</SelectItem>
                    <SelectItem value="Logo & Graphic Design">Logo & Graphic Design</SelectItem>
                    <SelectItem value="Web Analytics & Reporting">Web Analytics & Reporting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[180px] placeholder:text-white/ focus:outline-accent border-none bg-primary/90 focus:text-slate-100"
                rows="2"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <Button type="submit" size="md" className="max-w-40 rounded-full">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center 
          xl:justify-center order-1 xl:order-none gap-8 mb-8 xl:mb-0">
            <ul className="gap-8 flex flex-col">
              {info.map((item,index)=>{
                return(
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[32px] h-[32px] xl:w-[73px] xl:h-[73px] bg-accent text-white rounded-lg flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
