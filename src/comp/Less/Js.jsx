import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import s from "./Less.module.scss";

export const Js = () => {
  const navItemsName = [
    [
      {
        id: "1",
        text: "модуль 1",
        href1: "1-1",
        name1: "Знакомство с JavaScript",
        href2: "1-2",
        name2: "Подключение скрипта",
        href3: "1-3",
        name3: "Инструменты разработчика",
      },
      {
        id: "2",
        text: "модуль 2",
        href1: "2-1",
        name1: "Ветвления",
        href2: "2-2",
        name2: "Тернарный оператор",
        href3: "2-3",
        name3: "Инструкция switch",
      },
    ],
  ];
  return (
    <div className={s.sizeBar}>
      {navItemsName.map((items, index) => {
        return items.map(
          ({ id, text, name1, href1, name2, href2, name3, href3 }) => {
            return (
              <Accordion allowToggle key={id}>
                <AccordionItem>
                  <h2 className={s.navTitle}>
                    <AccordionButton className={s.navBtn}>
                      <Box as="span" flex="1" textAlign="left">
                        {text}
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className={s.navList}>
                      <Link to={href1} key={href1}>
                        {name1}
                      </Link>
                      <Link to={href2} key={href2}>
                        {name2}
                      </Link>
                      <Link to={href3} key={href3}>
                        {name3}
                      </Link>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          }
        );
      })}
    </div>
  );
};

