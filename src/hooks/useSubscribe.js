import { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { toast } from "react-toastify";

const useSubscribe = ({ language }) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [submitResult, setSubmitResult] = useState();

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const result = await addToMailchimp(user.email, {
        FNAME: user.name,
        PATHNAME: document.location.pathname
      });
      setSubmitResult(result);
      if (result.result === "success") {
        toast.success(
          `${
            language === "ru"
              ? "🔥 Успех! Спасибо за подписку!"
              : "🔥 Success! Thank you for subscribe!"
          }`
        );
        setUser({ name: "", email: "" });
      } else {
        toast.error(
          `${
            language === "ru"
              ? "😥 Произошла ошибка. Убедитесь в правильности заполнения формы. Возможно данный имейл уже подписан."
              : "😥 Something went wrong. Make sure to fill form properly. Maybe provided email is already subscribed."
          }`,
          { toastId: "subscribeToast" }
        );
      }
    } catch (err) {
      setSubmitResult(err);
      toast.success(submitResult.result.msg);
    }
  };

  const userChangeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return {
    user,
    submitHandler,
    userChangeHandler
  };
};

export default useSubscribe;
