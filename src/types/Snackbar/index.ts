import { SnackbarOrigin } from '@mui/material/Snackbar';

export interface SnackbarState extends SnackbarOrigin {
    open: boolean;
}
