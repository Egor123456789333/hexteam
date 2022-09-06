import React, { useEffect, useState } from "react";
import { getStatistic } from "../http/statistic";
import { squeeze } from "../http/squeeze";
import {
  Card,
  Container,
  Form,
  Button,
  Row,
  Table,
  Col,
} from "react-bootstrap";
import { link } from "fs";
import Pag from "../components/Pagination";
import { IContent, IContact } from "../interfaces/StatisticInterface";

const StatisticPage = () => {
  let curNum = window.location.pathname.split("/");

  const [offset, setOffset] = useState<number>(0);
  const [headers, setHeaders] = useState<IContent>({
    "content-length": 0,
    "content-type": "",
  });
  const [sort, setSort] = useState<string>("");

  const [limit, setLimit] = useState<number>(5);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [statistics, setStatistics] = useState<IContact[]>([]);
  useEffect(() => {
    getStatistic(limit, offset, sort).then(
      ({ data, headers }: { data: IContact[]; headers: IContent }) => {
        // console.log(headers["content-length"]);
        setStatistics(data);
        setHeaders(headers);
        setPagesCount(Math.ceil(headers["content-length"] / limit));
      }
    );
  }, []);

  useEffect(() => {
    //console.log(statistics);
  }, [statistics]);

  useEffect(() => {
    console.log(pagesCount);
  }, [pagesCount]);

  useEffect(() => {
    //console.log(headers["content-length"]);
  }, [headers]);

  useEffect(() => {
    console.log(offset);
    getStatistic(limit, offset, sort).then(
      ({ data, headers }: { data: IContact[]; headers: IContent }) => {
        // console.log(headers["content-length"]);
        setStatistics(data);
        setHeaders(headers);
        setPagesCount(Math.ceil(headers["content-length"] / limit));
      }
    );
  }, [offset, limit, sort]);

  return (
    <>
      <div className="container">
        <Row>
          <Col>
            <Form.Label>Количество ссылок на странице</Form.Label>
            <Form.Select
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setOffset(0);
              }}
              aria-label="Default select example"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Сортировать по </Form.Label>
            <Form.Select
              onChange={(e) => {
                setSort(e.target.value);
                setOffset(0);
              }}
              aria-label="Default select example"
            >
              <option value={"--"}>Не сортировать</option>
              <option value={"asc_target"}>
                полным ссылкам по возрастанию
              </option>
              <option value={"desc_target"}>полным ссылкам по убыванию</option>

              <option value={"asc_short"}>
                сокращенным ссылкам по возрастанию
              </option>
              <option value={"desc_short"}>
                сокращенным ссылкам по убыванию
              </option>
              <option value={"asc_counter"}>
                количеству кликов по возрастанию
              </option>
              <option value={"desc_counter"}>
                количеству кликов по убыванию
              </option>
            </Form.Select>
          </Col>
        </Row>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Полная ссылка</th>
            <th>Сокращенная ссылка</th>
            <th>Количество переходов по ссылке</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map((statistic, i) => {
            return (
              <tr key={statistic.id}>
                <td>{statistic.id}</td>
                <td>{statistic.target}</td>
                <td>{statistic.short}</td>
                <td>{statistic.counter}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pag
        pagesCount={pagesCount}
        limit={limit}
        setOffset={setOffset}
        offset={offset}
        headers={headers}
      />
    </>
  );
};

export default StatisticPage;
