import * as constants from './../constants';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Learn ReactJS',
      img: 'https://picsum.photos/350/350?1',
      description: 'Description 2',
      rating: 5,
      author: 'Author 2',
      publisher: 'Publishr 2',
      code: '978-5-465-34',
      year: 2016,
      pages: 256,
      testimonials: 'testimonial 2',
      notes: 'notes 2',
    },
    {
      id: 2,
      title: 'Learn Redux',
      img: 'https://picsum.photos/350/350?2',
      description: 'Description 3',
      rating: 4,
      author: 'Author 4',
      publisher: 'Publishr 4',
      code: '978-5-465-34',
      year: 2016,
      pages: 256,
      testimonials: 'testimonial 4',
      notes: 'notes 4',
    },
    {
      id: 3,
      title: 'Learn React Router',
      img: 'https://picsum.photos/350/350?3',
      description: 'Description 4',
      rating: 3,
      author: 'Author 3',
      publisher: 'Publishr 3',
      code: '978-5-465-34',
      year: 2016,
      pages: 256,
      testimonials: 'testimonial 3',
      notes: 'notes 3',
    },
    {
      id: 4,
      title: 'Learn Angular',
      img: 'https://picsum.photos/350/350?4',
      description: 'Description 5',
      rating: 0,
      author: 'Author 5',
      publisher: 'Publishr 5',
      code: '978-5-465-34',
      year: 2016,
      pages: 256,
      testimonials: 'testimonial 5',
      notes: 'notes 5',
    },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_NEW_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          action.payload,
        ]
      };
    case constants.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload),
      };
    case constants.EDIT_BOOK_INFO:
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.payload.id) {
            book = action.payload
          }

          return book;
        }),
      };
    default: return state;
  }
}

export default reducer;
