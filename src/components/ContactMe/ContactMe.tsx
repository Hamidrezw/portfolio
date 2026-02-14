"use client";
import toast from "react-hot-toast";
import TitleContent from "../Layout/TitleContent";
import { useState } from "react";

const ContactMe = () => {

  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || name.length < 2)
      return toast.error("Name must be at least 2 characters");
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      return toast.error("Invalid email address");
    if (!message || message.length < 10)
      return toast.error("Message must be at least 10 characters");

    try {
      setIsSending(true);

      await toast.promise(
        fetch("https://contact-to-telegram.hamidrezajob24.workers.dev", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }),
        {
          loading: "Sending...",
          success: "Message sent ✅",
          error: "Failed ❌",
        },
      );

      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className="py-10 md:py-20">
      <TitleContent
        title="Contact Me"
        content="I’m currently available for freelance work"
      />

      <div className="px-10 py-4 border-primary border-3 rounded-tl-4xl rounded-br-4xl w-fit text-primary mx-auto mt-15 text-3xl">
        Send Me a Message
      </div>

      <form
        onSubmit={handleSubmit}
        dir="rtl"
        className="font-ubuntu mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 px-10 sm:px-0 lg:px-10 container"
      >
        {["name", "email"].map((sub, i) => (
          <div className="flex flex-col gap-4.5 col-span-1" key={i}>
            <span className="text-primary text-[16px]">*your {sub}</span>
            <input
              type={sub === "name" ? "text" : "email"}
              name={sub}
              required
              placeholder={`Enter your ${sub}`}
              className="pb-2 border-b-primary-light border-b w-full text-[16px] text-white placeholder:text-white focus:outline-none bg-transparent"
            />
          </div>
        ))}

        <div className="flex flex-col gap-4.5 md:col-span-2">
          <span className="text-primary text-[16px]">*your message</span>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Enter your message"
            className="pb-2 border-b-primary-light border-b w-full text-[16px] text-white placeholder:text-white focus:outline-none bg-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="text-background bg-primary flex items-center justify-center gap-4 py-3 px-6 cursor-pointer rounded-4xl w-fit mx-auto mt-10 text-xl font-ubuntu md:col-span-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.7071 1.29292C22.9306 1.5164 23.0262 1.81935 22.9939 2.11081C22.9848 2.19252 22.9657 2.27332 22.9366 2.35121L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59387 9.91384C1.21919 9.74731 0.984122 9.36894 1.00084 8.95926C1.01755 8.54959 1.28265 8.19162 1.66965 8.05617L21.6488 1.06348C21.7272 1.03414 21.8085 1.01497 21.8907 1.00598C21.9511 0.999338 22.0117 0.998262 22.0717 1.00259C22.3032 1.01913 22.5301 1.11591 22.7071 1.29292ZM18.1943 4.3915L4.71108 9.11063L10.7785 11.8073L18.1943 4.3915ZM12.1928 13.2215L19.6085 5.80571L14.8894 19.289L12.1928 13.2215Z"
              fill="#292F36"
            />
          </svg>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
