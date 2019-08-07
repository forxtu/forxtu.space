import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import { object, objectOf, shape, string } from "prop-types";

// hooks
import useSubscribe from "hooks/useSubscribe";
import useLanguage from "hooks/useLanguage";

// components
import { Input } from "components/elements/Form";
import Text from "components/elements/Text";
import Button from "components/elements/Button";
import CardWrapper from "components/elements/CardWrapper";

const StyledButton = styled(Button)`
  margin: 12px 0;
`;

const Subscribe = ({ intl }) => {
  const { language } = useLanguage();
  const { user, userChangeHandler, submitHandler } = useSubscribe({ language });

  return (
    <CardWrapper boxShadow={theme("colors.highlight")}>
      <Text.H3Title>
        <FormattedMessage
          defaultMessage="Подпишись и узнавай о новых статьях первым!"
          id="subscribe.title"
        />
      </Text.H3Title>
      <form id="email-capture" method="post" noValidate>
        <div>
          <Input
            placeholder={intl.formatMessage({
              defaultMessage: "Имя",
              id: "subscribe.input_name"
            })}
            name="name"
            value={user.name}
            onChange={userChangeHandler}
            required
          />
          <Input
            placeholder={intl.formatMessage({
              defaultMessage: "Email адрес",
              id: "subscribe.input_email"
            })}
            onChange={userChangeHandler}
            required
            name="email"
            value={user.email}
          />
          <StyledButton inverted type="submit" onClick={submitHandler}>
            <FormattedMessage
              defaultMessage="Подписаться"
              id="subscribe.button"
            />
          </StyledButton>
        </div>
      </form>
      <Text.H5Title>
        <FormattedMessage
          defaultMessage="Отписаться можно в любое время"
          id="subscribe.description"
        />
      </Text.H5Title>
    </CardWrapper>
  );
};

Subscribe.propTypes = {
  intl: object,
  formatMessage: objectOf(
    shape({
      id: string,
      defaultMessage: string
    })
  )
};

export default injectIntl(Subscribe);
