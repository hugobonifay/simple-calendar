import React from "react"
import { connect } from "react-redux"
import { CLEAR_TODO } from "../redux/actionTypes"
import ListItem from "./ListItem"
import { StyledTodoList, StyledNoEventContainer } from "./styled-components"
import EventAvailable from "@material-ui/icons/EventAvailable"
import { Dialog, DialogContent, DialogActions, IconButton } from "@material-ui/core"
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import { gradient } from "../utilities";

const TodoList = ({ 
  todos, 
  selectedDate, 
  onClearTodo 
}) => {
  const [open, setOpen] = React.useState(false);
  const [todo, setTodo] = React.useState(undefined);

  const handleClickOpen = todo => {
    setOpen(true);
    setTodo(todo);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledTodoList>
      {todos[selectedDate] ? 
        todos[selectedDate].map((d,i) => {
          return (
            <ListItem
              key={i}
              text={d}
              onClick={() => handleClickOpen(d)}
            /> 
          )
        }) 
      : 
        <StyledNoEventContainer>
          <div><EventAvailable fontSize={"large"}/></div>
          <div>Rien de prévu <span role="img" aria-label="ghost">🤙</span></div>
        </StyledNoEventContainer>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
      >
        <DialogContent style={{
          background: gradient, 
          color: "white"
        }}>
          <div style={{ marginTop: 40 }}>
            Êtes-vous sûr de vouloir supprimer <b>{todo}</b> ?
          </div>
        </DialogContent>
          <DialogActions style={{ background: gradient }}>
            <IconButton onClick={handleClose}>
              <ClearIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton 
              onClick={e => {
                e.preventDefault();
                onClearTodo(selectedDate, todo);
                handleClose();
              }}
            >
              <DoneIcon style={{ color: "white" }} />
            </IconButton>
        </DialogActions>
      </Dialog>
    </StyledTodoList>
  )
}

const mapStateToProps = state => ({
  todos: state,
  selectedDate: state.selectedDate
});

const mapDispatchToProps = dispatch => ({
  onClearTodo: (day, todo) => dispatch({ type: CLEAR_TODO, day: day, todo: todo })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);