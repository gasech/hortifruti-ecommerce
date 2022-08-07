import styled from "styled-components";
import { Button } from "@mui/material"

export default styled(Button)`
  && {
    padding: 8px 40px;
    color: white;
    font-size: 20px;
    background-color: #FF7F00;
    height: 50px;
    text-transform: none;
    border-radius: 20px;
  }

  &&:hover {
    background-color: #FF9830;
  }
`;