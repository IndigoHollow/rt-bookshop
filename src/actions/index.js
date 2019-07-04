import * as constants from './../constants';

export const addNewBook = data => {
  return (dispatch) => {
    dispatch( {
      type: constants.ADD_NEW_BOOK,
      payload: data
    } );
  }
}

export const deleteBook = id => {
  return (dispatch) => {
    dispatch( {
      type: constants.DELETE_BOOK,
      payload: id
    } );
  }
}

export const editBook = data => {
  return (dispatch) => {
    dispatch( {
      type: constants.EDIT_BOOK_INFO,
      payload: data
    } );
  }
}
