import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getStatistic } from "../http/statistic";
import { squeeze } from "../http/squeeze";
import {
  Card,
  Container,
  Form,
  Button,
  Row,
  Table,
  Pagination,
} from "react-bootstrap";
import { link } from "fs";
import { IContent, IContact } from "../interfaces/StatisticInterface";
import { convertToObject } from "typescript";

interface IPag {
  active: boolean;
  number: number;
}

const Pag = ({
  pagesCount,
  limit,
  offset,
  headers,
  setOffset,
}: {
  pagesCount: number;
  limit: number;
  offset: number;
  headers: IContent;
  setOffset: Dispatch<SetStateAction<number>>;
}) => {
  const [pageInfo, setPageInfo] = useState<IPag[]>([
    { active: true, number: 1 },
  ]);

  useEffect(() => {
    let newPageInfo: IPag[] = [];

    if (pagesCount < 5) {
      console.log("NSLT<");
      for (let i = 0; i < pagesCount; i++) {
        if (i == offset) {
          newPageInfo.push({ active: true, number: i + 1 });
        } else {
          newPageInfo.push({ active: false, number: i + 1 });
        }
      }
    } else {
      console.log("NSLT<");
      if (offset < 3) {
        for (let i = 0; i < 5; i++) {
          if (i == offset) {
            newPageInfo.push({ active: true, number: i + 1 });
          } else {
            newPageInfo.push({ active: false, number: i + 1 });
          }
        }
      } else if (offset > pagesCount - 2) {
        for (let i = pagesCount; i > pagesCount - 5; i--) {
          if (i == offset) {
            newPageInfo.push({ active: true, number: i + 1 });
          } else {
            newPageInfo.push({ active: false, number: i + 1 });
          }
        }
      } else {
        for (let i = offset - 2; i < offset + 3; i++) {
          if (i == offset) {
            newPageInfo.push({ active: true, number: i + 1 });
          } else {
            newPageInfo.push({ active: false, number: i + 1 });
          }
        }
      }
    }
    console.log(newPageInfo);
    setPageInfo(newPageInfo);
  }, [pagesCount]);

  useEffect(() => {
    console.log(pageInfo);
  }, [pageInfo]);
  return (
    <>
      <Pagination>
        <Pagination.Prev
          onClick={() => {
            let newOffset = offset - 1;
            setOffset(newOffset);
          }}
          disabled={offset == 0}
        />
        <>
          {pageInfo.map((page) => (
            <Pagination.Item
              onClick={() => {
                setOffset(page.number - 1);
              }}
              active={page.active}
            >
              {page.number}
            </Pagination.Item>
          ))}
        </>
        <Pagination.Next
          onClick={() => {
            let newOffset = offset + 1;
            setOffset(newOffset);
          }}
          disabled={offset == pagesCount - 1}
        />
      </Pagination>
    </>
  );
};

export default Pag;
