
function bookReducer(state=[], action) {
  if(state === undefined)
    return [];
  switch (action.type) {
    case 'GET_BOOKS' :
    console.log("GET_BOOKS ",state,action);
      return  [...action.payload.data]
    case 'ADD_BOOK' :
        console.log("Add_BOOKS ",state,action);
      return [
          ...state,
          {
            id: action.payload._id,
            name : action.payload.name,
            writer : action.payload.writer,
            publications : action.payload.publications,
            category : action.payload.category,
            price : action.payload.price,
            releaseDate : action.payload.releaseDate,
            edition : action.payload.edition

          }
        ];

    default:
      return state;
  }
}

export default bookReducer;
