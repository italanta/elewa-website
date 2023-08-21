import { ButtonData } from "./button.interface";

export interface SliderButtonData extends ButtonData
{
  text: string;

  bgColour?: string; // Background colour
  color?: string;
  borderColor?: string;
  iconColor?: string;
  iconBackgroundColor?: string;

  hoverBgColour?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  hoverIconColor?: string;
  hoverIconBackgroundColor?: string;
}
