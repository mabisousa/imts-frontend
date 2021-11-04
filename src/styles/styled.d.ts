import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    titulo: string;

    cor: {
      background: string;
      headerBackground: string;
      title: string;
      undeline: string;
      iconColor: string;
      progresStatus: string;
      concludedStatus: string;
      lateStatus: string;
      cardBackground: string;
      titleSection: string;
      date: string;
      profileBorder: string;
      profileBorderAfter: string;
      projectMenu: string;
      approvalMenu: string;
      consultantMenu: string;
      thead: string;
      tableBorder: string;
      inactiveStatus: string;
      skillsButton: string;
      pointedHours: string;
      totalHours: string;
      reproveButton: string;
      aproveButton: string;
      step: string;
      activeStep: string;
    }
  }
}