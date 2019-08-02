import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { ToastContainer } from "react-toastify";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import "react-toastify/dist/ReactToastify.css";

// hooks
import useSubscribe from "src/hooks/useSubscribe";

// components
import { Input } from "components/elements/Form";
import Text from "components/elements/Text";
import Button from "components/elements/Button";
import CardWrapper from "components/elements/CardWrapper";

const StyledButton = styled(Button)`
  margin: 12px 0;
`;

const Subscribe = () => {
  const { user, userChangeHandler, submitHandler } = useSubscribe();

  return (
    <CardWrapper boxShadow={theme("colors.highlight")}>
      <Text.H3Title>Подпишись и узнавай о новых статьях первым!</Text.H3Title>
      <form id="email-capture" method="post" noValidate>
        <div>
          <Input
            placeholder="Имя"
            name="name"
            value={user.name}
            onChange={userChangeHandler}
            required
          />
          <Input
            placeholder="Email адрес"
            onChange={userChangeHandler}
            required
            name="email"
            value={user.email}
          />
          <StyledButton inverted type="submit" onClick={submitHandler}>
            Подписаться
          </StyledButton>
        </div>
      </form>
      <Text.H5Title>
        Отписаться можно в <i>любое</i> время
      </Text.H5Title>
      <ToastContainer position="bottom-right" />
    </CardWrapper>
  );
};

export default injectIntl(Subscribe);
