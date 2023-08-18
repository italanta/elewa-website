export interface SliderButton extends ButtonData{
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
export interface ButtonData 
{
  text: string
  
  bgColor?: string; // Background colour
  color?: string; // text color
  
  hoverBgColor?: string;
  hoverColor?: string;
}
