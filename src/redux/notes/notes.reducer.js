
// const INITIAL_STATE = {
//   savedNotes: [],
//   isFetching: false,
//   errorMessage: undefined
// };

const INITIAL_STATE = {
  newNote: [];
};


const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      return {
        ...state,
        newNote: action.payload
      };


    default:
      return state;

  }
};

export default notesReducer;
