import React, { useContext } from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import { login, register } from "../http/auth";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const AuthPage = () => {
  // const { user } = useContext(Context);
  // const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  // const isLogin = location.pathname === LOGIN_ROUTE;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");

  const click = async (username: string, password: string) => {
    try {
      let data;
      if (isLogin) {
        data = await login(username, password).then(() => {
          navigate("/squeeze");
        });
      } else {
        data = await register(username, password).then(() => {
          setIsLogin(true);
          setUsername("");
          setPassword("");
        });
      }
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">
          {isLogin ? <div>Авторизация</div> : <div>Регистрация</div>}
        </h2>

        <Form className="d-flex flex-column">
          <div>
            <Form.Control
              className="mt-3"
              placeholder="Введите логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
            <Form.Control
              className="mt-3"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </div>

          <Button
            variant={"outline-success"}
            className="mt-3"
            onClick={() => click(username, password)}
          >
            {isLogin ? <div>Войти</div> : <div>Зарегестрироваться</div>}
          </Button>
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <div
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  Зарегистрируйтесь!
                </div>
              </div>
            ) : (
              <div>
                Есть аккаунт?{" "}
                <div
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  Войдите!
                </div>
              </div>
            )}
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthPage;
