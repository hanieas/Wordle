import { ReactNode } from 'react';

export interface IModalProps{
  handleClose?: any;
  show: boolean;
  children?: ReactNode;
}
