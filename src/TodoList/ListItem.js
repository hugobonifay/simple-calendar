import React from "react"
import { 
    StyledListItemContainer,
    StyledTodo,
    StyledAction
} from "./styled-components"
import ClearIcon from "@material-ui/icons/DeleteForever"

const ListItem = ({ text, onClick }) => {

  return (
    <StyledListItemContainer>
      <StyledTodo>
        {text}
      </StyledTodo>
      <StyledAction onClick={onClick}>
        <ClearIcon/>
      </StyledAction>
    </StyledListItemContainer>
  )
}

export default ListItem;