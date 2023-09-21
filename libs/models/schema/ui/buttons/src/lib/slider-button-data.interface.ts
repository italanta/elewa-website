import { ButtonData } from './button.interface';

export interface SliderButtonData extends ButtonData {
  /** styles associated with the button */
  borderColor?: string;
  iconColor?: string;
  iconBackgroundColor?: string;

  /** hover effect styles on the button  */
  hoverBorderColor?: string;
  hoverIconColor?: string;
  hoverIconBackgroundColor?: string;

  /** button click action */
  action?: string;
}
