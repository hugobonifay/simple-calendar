import React from "react"
import { MONTHS_DISPLAYED, numberOfMonthsDisplayed, gradient } from "./../utilities"
import { 
    StyledButton, 
    StyledHeader, 
    StyledNavigation, 
    StyledWeekDaysHeader 
} from "./styled-components"
import ArrowForward from "@material-ui/icons/ArrowForwardIosTwoTone"
import ArrowBack from "@material-ui/icons/ArrowBackIosTwoTone"
import Add from "@material-ui/icons/Add"
import { 
    Dialog, 
    DialogContent, 
    DialogActions, 
    IconButton, 
    FormControl, 
    InputLabel, 
    OutlinedInput, 
    withStyles 
} from "@material-ui/core"
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

const CssTextField = withStyles(() => ({
    root: {
        color: "white",
        "& $notchedOutline": {
            borderColor: "grey",
            borderWidth: 1
        },
        "&:hover $notchedOutline": {
            borderColor: "white"
        },
        "&$focused $notchedOutline": {
            borderColor: "white",
            borderWidth: 1.5
        }
    },
    focused: {},
    notchedOutline: {}
}))(OutlinedInput);

const TopBarItem = ({ 
    currentMonthDisplay, 
    selectedDate, 
    onChangeMonth, 
    onAddTodo, 
}) => {
    const [open, setOpen] = React.useState(false);
    const [todo, setTodo] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = e => {
        setTodo(e.target.value);
    }

    return (
        <div>
            <StyledHeader>
                <div>{MONTHS_DISPLAYED[currentMonthDisplay].month.substring(0,3)}{". "}{MONTHS_DISPLAYED[currentMonthDisplay].year}</div>
                <StyledNavigation>
                    <StyledButton
                        disabled={currentMonthDisplay === 0}
                        onClick={e => {
                            e.preventDefault()
                            onChangeMonth(currentMonthDisplay - 1)
                        }}
                    >
                        <ArrowBack/>
                    </StyledButton>
                    <StyledButton
                        disabled={currentMonthDisplay === numberOfMonthsDisplayed - 1}
                        onClick={e => {
                            e.preventDefault()
                            onChangeMonth(currentMonthDisplay + 1)
                        }}
                    >
                        <ArrowForward/>
                    </StyledButton>
                </StyledNavigation>
                <div>
                    <StyledButton add onClick={handleClickOpen}>
                        <Add/>
                    </StyledButton>
                </div>
            </StyledHeader>
            <StyledWeekDaysHeader>
                {['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map((d,i) => <div key={i}>{d}</div>)}
            </StyledWeekDaysHeader>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogContent style={{
                    background: gradient, 
                    color: "white"
                }}>
                    <FormControl fullWidth variant="outlined" style={{ marginTop: 40 }}>
                        <InputLabel htmlFor="outlined-adornment-amount" style={{ color: "white" }}>Y'a quoi mec ?</InputLabel>
                        <CssTextField
                            id="outlined-adornment-amount"
                            value={todo}
                            onChange={handleChange}
                            labelWidth={110}
                            inputProps={{
                                maxLength: 20,
                            }}
                            autoComplete="off"
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions style={{ background: gradient }}>
                    <IconButton onClick={handleClose}>
                        <ClearIcon style={{ color: "white" }} />
                    </IconButton>
                    <IconButton 
                        disabled={!todo || todo === ""} 
                        onClick={e => {
                            e.preventDefault();
                            onAddTodo(selectedDate, todo);
                            setTodo("");
                        }}
                    >
                        <DoneIcon style={{ color: "white" }} />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TopBarItem