import { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { toast } from "react-toastify";

const useSubscribe = () => {
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
        toast.success("Успех! Спасибо за подписку!");
      } else {
        toast.error(
          "Убедитесь в том что Имя и Email введены правильно. Возможно данный имейл уже подписан."
        );
      }
    } catch (err) {
      setSubmitResult(err);
      toast.success(submitResult.result.msg);
    }

    setUser({ name: "", email: "" });
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
