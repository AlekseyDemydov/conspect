import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: black;
 color:var(--text-color);
   &:hover {
    color: orange;
   
    }
  &.active {
    border-bottom: 2px solid orange;
    border-radius: 10px;
    
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 16px;
  padding: 5px;
  border-radius: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--text-color);
  &:hover {
    color: red;
   
    }
  &.active {
    background-color: orange;
   
    }
  }
`;
