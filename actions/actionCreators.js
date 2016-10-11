export function getBooks(data) {
  return {
    type: 'GET_BOOKS',
    data
  };
}
export function addBook(name,writer,publications,category,price,releaseDate,edition){
	return {
		type : 'ADD_BOOK',
		name,
		writer,
		publications,
		category,
		price,
		releaseDate,
		edition
	};
}
