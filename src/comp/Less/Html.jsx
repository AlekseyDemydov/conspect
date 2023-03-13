import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { navItemsName } from "./data/html";

import s from "./Less.module.scss";
import { StyledLink } from "./StyleLink";

export const Html = ({onHide}) => {
  const module = navItemsName;

  return (
    <div className={s.sizeBar}>
      {module.map((items, index) => {
        return items.map(({ id, text, key }) => {
          return (
            <Accordion allowToggle key={id}>
              <AccordionItem>
                <h2 className={s.navTitle}>
                  <AccordionButton
                    className={s.navBtn}
                    _hover={{
                      color: "orange",
                    }}
                    _active={{
                      color: "orange",
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize="16px"
                      fontWeight= "900"
                      className={s.colorMenu}
                    >
                      {text}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={3}>
                  <div className={s.navList}>
                    {key.map(({ num, name, href }) => {
                      return (
                        <StyledLink to={href} key={num} className={s.itemBar} onClick={onHide}>
                          {name}
                        </StyledLink>
                      );
                    })}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        });
      })}
    </div>
  );
};

// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   Box,
// } from "@chakra-ui/react";
// import { navItemsName } from "./data/html";

// import s from "./Less.module.css";
// import { StyledLink } from "./StyleLink";

// export const Html = () => {
//   const module = navItemsName;
//   return (
//     <div className={s.sizeBar}>
//       {module.map((items, index) => {
//         return items.map(
//           ({
//             id,
//             text,
//             name1,
//             href1,
//             name2,
//             href2,
//             name3,
//             href3,
//             name4,
//             href4,
//             name5,
//             href5,
//             name6,
//             href6,
//             name7,
//             href7,
//             name8,
//             href8,
//             name9,
//             href9,
//             name10,
//             href10,
//           }) => {
//             return (
//               <Accordion allowToggle key={id}>
//                 <AccordionItem>
//                   <h2 className={s.navTitle}>
//                     <AccordionButton className={s.navBtn}>
//                       <Box
//                         as="span"
//                         flex="1"
//                         textAlign="left"
//                         fontSize="25px"
//                         className={s.barRig}
//                       >
//                         {text}
//                       </Box>
//                     </AccordionButton>
//                   </h2>
//                   <AccordionPanel pb={4}>
//                     <div className={s.navList}>
//                       <StyledLink to={href1} key={href1} className={s.itemBar}>
//                         {name1}
//                       </StyledLink>
//                       <StyledLink to={href2} key={href2} className={s.itemBar}>
//                         {name2}
//                       </StyledLink>
//                       <StyledLink to={href3} key={href3} className={s.itemBar}>
//                         {name3}
//                       </StyledLink>
//                       <StyledLink to={href4} key={href4} className={s.itemBar}>
//                         {name4}
//                       </StyledLink>
//                       <StyledLink to={href5} key={href5} className={s.itemBar}>
//                         {name5}
//                       </StyledLink>
//                       <StyledLink to={href6} key={href6} className={s.itemBar}>
//                         {name6}
//                       </StyledLink>
//                       <StyledLink to={href7} key={href7} className={s.itemBar}>
//                         {name7}
//                       </StyledLink>
//                       <StyledLink to={href8} key={href8} className={s.itemBar}>
//                         {name8}
//                       </StyledLink>
//                       <StyledLink to={href9} key={href9} className={s.itemBar}>
//                         {name9}
//                       </StyledLink>
//                       <StyledLink to={href10} key={href10} className={s.itemBar}>
//                         {name10}
//                       </StyledLink>
//                     </div>
//                   </AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             );
//           }
//         );
//       })}
//     </div>
//   );
// };
