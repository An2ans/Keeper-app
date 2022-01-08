


export const NotesActionTypes = {
  ADD_NOTE: "ADD_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
  FETCH_NOTES_START: 'FETCH_NOTES_START',
  FETCH_NOTES_SUCCESS: 'FETCH_NOTES_SUCCESS',
  FETCH_NOTES_FAILURE: 'FETCH_NOTES_FAILURE'
}

export const addNote = newNote => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: newNote
});
