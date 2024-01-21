import { Box, Stack, Typography, styled } from "@mui/material";
import { root } from "../../root";


export const ContainerSignin = styled(Stack)(() => ({

    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: root.bg_color,
}))


export const ConatinerLogin = styled(Stack)(() => ({
    padding: '20px',
    boxShadow: '1px 2px 11px 4px rgb(14 55 54 / 25%)',
    borderRadius: '0.5rem',
    gap: '2rem',
}));

export const LoginH4 = styled(Box)((matches) => ({
    display: 'flex',
    fontWeight: 800,
    justifyContent: 'center',
    alignItems: 'center',
    color: root.green_color,
    fontSize: matches ? '1.5rem' : '1.5rem'
}));