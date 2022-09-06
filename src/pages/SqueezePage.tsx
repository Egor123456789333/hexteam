import React, { useEffect, useState } from "react";
import { getStatistic } from "../http/statistic";
import { squeeze } from "../http/squeeze";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import { link } from "fs";

interface IContact {
  short: string;
  target: string;
  id: number;
  counter: number;
}

const SqueezePage = () => {
  let curNum = window.location.pathname.split("/");

  const [short, setShort] = useState<string>("");
  const [limit, setLimit] = useState<number>(5);
  const [link, setLink] = useState<string>("");
  const [statistics, setStatistics] = useState<IContact[]>([]);
  useEffect(() => {}, []);

  useEffect(() => {
    console.log(statistics);
  }, [statistics]);

  useEffect(() => {}, [limit]);

  return (
    <>
      <h1>Введите</h1>
      <Form className="d-flex flex-column mt-3">
        <Row>
          <Col>
            <Form.Control
              placeholder="Введите ссылку"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            ></Form.Control>
          </Col>
          <Col>
            <Button
              onClick={() => {
                squeeze(link).then((data: any) => {
                  console.log(data);
                  setShort(data.short);
                });
              }}
            >
              Сжать
            </Button>
          </Col>
        </Row>
        <Form.Label className="mt-3 ml-3">Результат сжатия :{short}</Form.Label>
      </Form>
    </>
  );
};

export default SqueezePage;
