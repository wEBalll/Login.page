import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [login, setLogin] = useState(""); //const - постоянный, login и setLogin - изменяеммые, useState - не изменяемые
  const [password, setPassword] = useState(""); //const - постоянный, login и setLogin - изменяеммые, useState - не изменяемые
  const navigate = useNavigate()

  // const inputClean = (e) => {
  //   e.preventDefault();
  //   setLogin("");
  //   setPassword("");
  // };

  function onSubmitForm(e) {
    e.preventDefault();  // отменяет перезагрузку страницы 

    if (login == "admin" && password == "admin") {
      navigate("/about")
    }

    setLogin("");
    setPassword("");
  }

  return (
    <LoginContainer>
      <Title>WELCOME</Title>
      <Subtitle>HELLO, NICE TO SEE YOU AGAIN!</Subtitle>
      <Form>
        <InputBlock>
          <Paragraph>EMAIL/USERNAME</Paragraph>
          <Input
            className="login"
            placeholder="@username"
            value={login}
            onChange={(event) => {
              setLogin(event.target.value)
            }}
          />
        </InputBlock>
        <InputBlock>
          <Paragraph>PASSWORD</Paragraph>
          <Input
            className="password"
            placeholder="********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputBlock>
        <ButtonBlock>
          <Button onClick={onSubmitForm}>LOGIN</Button>
        </ButtonBlock>
      </Form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  min-width: fit-content;
  max-width: 613px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 16px;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 64px;
  color: #464655;
`;
const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  color: #68a691;
`;
const Form = styled.form`
  width: 100%;
  height: fit-content;
  border: 3px solid #464655;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 63px 53px 43px;
`;
const Paragraph = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 20px;
  color: #68a691;
`;
const Input = styled.input`
  height: 55px;
  max-width: 490px;
  width: 100%;
  border: 1px solid #464655;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  background: #f4f4f9;
  font-size: 18px;
  padding-left: 9px;
`;
const Button = styled.button`
  background: #68a691;
  border-radius: 5px;
  border: none;
  max-width: 194px;
  width: 100%;
  height: 53px;
  font-size: 24px;
  font-weight: bold;
  color: #464655;
  button:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.25);
  }
`;
const InputBlock = styled.div``;
const ButtonBlock = styled.div``;
