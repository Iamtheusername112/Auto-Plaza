//An interface specifies how a specific structure should look like: what variables and values should it have.

import { MouseEventHandler } from "react";

//And in the this we can create an CustomButtonProps interface containing the following as in below

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
