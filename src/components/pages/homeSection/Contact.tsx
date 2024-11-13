"use client";

import React from "react";
import { Element } from "react-scroll";
import scss from "./Contact.module.scss";
import axios from 'axios';
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface IFormTelegram {
  name: string;
  email: string;
  message: string;
}

/// imports from ENV
const TG_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const CHAD_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAD_ID;
/// imports from ENV


const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormTelegram>({
    mode: "onChange",
  });

  const botsMessageModel = (data: IFormTelegram) => {
    let messageTG = `User's name: <b>${data.name}</b>\n`;
    messageTG += `User's email: <b>${data.email}</b>\n`;
    messageTG += `User's message for you: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onSumbit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        chat_id: CHAD_ID,
        parse_mode: "html",
        text: botsMessageModel(data),
      });
      reset();
      toast.success("Сообщение успешно отправлено!", { className: "toast-custom", autoClose: 2000 });
    } catch (error) {
      toast.error("Пожалуйста, попробуйте позже.", { className: "toast-custom", autoClose: 2000 });
      console.log(error);
    }
  };


  return (
    <Element name="contact">
      <section className={scss.Contact}>
        <div className={scss.content}>
          <div className="container_for_contact">
            <h2>Contact <span>Me</span></h2>
            <form onSubmit={handleSubmit(onSumbit)}>
              <p>Name</p>
              <input type="text" placeholder="Enter your name..." {...register('name', {required: true})}/>
              <p>Email</p>
              <input type="text" placeholder="Enter your email..." {...register('email', {required: true})}/>
              <p>Message</p>
              <textarea placeholder="Message to ADEV..." {...register('message', {required: true})}></textarea>
              {isSubmitting ? (
              <button  disabled>Send...</button>
            ) : (
              <button className="hover-target">Send</button>
            )}
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
