import React from 'react';
import history from './../../history';
import styled from 'styled-components';

import BookRating from './../booksWrapper/bookRating/BookRating';

const EditBookWrapper = styled.div`
  width: 680px;
  margin: 0 auto;
  text-align: left;
`;

const ChangeButtons = styled.div`
  width: 100%;
  display: -webkit-flex;
  -webkit-justify-content: center;
  display: flex;
  justify-content: center;
  margin: 40px 0 30px;
  cursor: pointer;
`;

const RemoveButton = styled.div`
  width: auto;
  height: 37px;
  line-height: 37px;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
  background-color: #ff0000;
`;

const EditSaveAddButton = styled(RemoveButton)`
  background-color: ${props => props.green ? '#028102 !important' : '#017bff'};
  margin-right: 30px;
`;

const FieldSection = styled.div`
  width: 100%;
  margin: 20px 0 0;
  input, textarea {
    display: block;
    width: 100%;
    height: 37px;
    border-radius: 5px;
    margin: 10px 0 0;
    padding: 0 0 0 7px;
    box-sizing: border-box;
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #d1d1d1;
    &:disabled {
      background-color: #f1f1f1;
      color: #777777;
    }
  }
  textarea {
    height: auto;
    min-height: 100px;
    padding-top: 7px;
  }
`;

export default class EditBook extends React.Component {
  constructor(props) {
    super(props);

    const checkVar = this.props.status !== 'add' && this.props.bookInfo;

    this.state = {
      editMode: this.props.status === 'add' ? false : true,
      id: (checkVar && this.props.bookInfo.id) || null,
      title: (checkVar && this.props.bookInfo.title) || null,
      img: (checkVar && this.props.bookInfo.img) || null,
      description: (checkVar && this.props.bookInfo.description) || null,
      author: (checkVar && this.props.bookInfo.author) || null,
      publisher: (checkVar && this.props.bookInfo.publisher) || null,
      code: (checkVar && this.props.bookInfo.code) || null,
      year: (checkVar && this.props.bookInfo.year) || null,
      pages: (checkVar && this.props.bookInfo.pages) || null,
      testimonials: (checkVar && this.props.bookInfo.testimonials) || null,
      notes: (checkVar && this.props.bookInfo.notes) || null,
      rating: (this.props.bookInfo && this.props.bookInfo.rating) || 0,
    }
  }

  /*---REWRITE---*/
  componentWillReceiveProps(nextProps) {
    if ((nextProps.status !== this.props.status) && nextProps.status === 'add') {
      this.setState({
        editMode: false
      }, this.clearFields);
    }
  }

  clearFields = () => {
    this.setState({
      title: '',
      img: '',
      description: '',
      author: '',
      publisher: '',
      code: '',
      year: '',
      pages: '',
      testimonials: '',
      notes: '',
      rating: 0,
    });
  }

  handleEditButton = () => {
    const {id, title, img, description, author, publisher, code, year, pages, testimonials, notes, rating} = this.state;

    let newBookParameters = {
      id,
      title,
      img,
      description,
      author,
      publisher,
      code,
      year,
      pages,
      testimonials,
      notes,
      rating,
    }

    this.state.editMode
    ? (this.setState({
        editMode: false
      }))
    : (
      this.setState({
        editMode: true
      }, this.props.editBook(newBookParameters), history.push('/'))
    )
  };

  handleDeleteButton = () => {
    this.props.deleteBook(this.state.id);
    history.push('/');
  };

  handleAddButton = () => {
    const {title, img, description, author, publisher, code, year, pages, testimonials, notes, rating} = this.state;

    let newBook = {
      id: this.props.lastBookId + 1,
      title,
      img,
      description,
      author,
      publisher,
      code,
      year,
      pages,
      testimonials,
      notes,
      rating,
    }
    this.props.addNewBook(newBook);
    history.push('/');
  };

  handleFieldChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  setRating = (e) => {
    this.setState({
      rating: e,
    });
  }

  render () {
    const { bookInfo } = this.props;
    const { status } = this.props;

    return (
      <EditBookWrapper className="editBook">
        <ChangeButtons className="changeButtons">
          {status === 'edit'
            ? (
              <React.Fragment>
                <EditSaveAddButton className="editSaveAddButton" green={!this.state.editMode} onClick={this.handleEditButton}>{this.state.editMode ? 'Редактировать книгу' : 'Сохранить изменения'}</EditSaveAddButton>
                <RemoveButton className="removeButton" onClick={this.handleDeleteButton}>Удалить книгу</RemoveButton>
              </React.Fragment>
            )
            : (
              <EditSaveAddButton className="editSaveAddButton" green onClick={this.handleAddButton}>Добавить книгу</EditSaveAddButton>
            )}
        </ChangeButtons>
        <FieldSection className="fieldSection">
          Название
          <input value={this.state.title ? this.state.title : ''} placeholder='Название' disabled={this.state.editMode} name='title' onChange={this.handleFieldChange} />
        </FieldSection>
        <FieldSection className="fieldSection">
          Обложка книги
          <input value={this.state.img ? this.state.img: ''} placeholder='Обложка книги' name='img' disabled={this.state.editMode} onChange={this.handleFieldChange} />
        </FieldSection>
        <FieldSection className="fieldSection">
          Описание
          <textarea value={this.state.description ? this.state.description : ''} placeholder='Описание' name='description' disabled={this.state.editMode} onChange={this.handleFieldChange}></textarea>
        </FieldSection>
        <FieldSection className="fieldSection">
          Автор
          <input value={this.state.author ? this.state.author : ''} placeholder='Автор' name='author' disabled={this.state.editMode} onChange={this.handleFieldChange} />
        </FieldSection>
        <FieldSection className="fieldSection">
          Издательство
          <input value={this.state.publisher ? this.state.publisher : ''} placeholder='Издательство' name='publisher' disabled={this.state.editMode} onChange={this.handleFieldChange} />
        </FieldSection>
        <FieldSection className="fieldSection">
          Код ISBN
          <input value={this.state.code ? this.state.code : ''} placeholder='Код ISBN' name='code' disabled={this.state.editMode} onChange={this.handleFieldChange} />
        </FieldSection>
        <FieldSection className="fieldSection">
          Год издания
          <input value={this.state.year ? this.state.year : ''} placeholder='Год издания' name='year' disabled={this.state.editMode} onChange={this.handleFieldChange} />
        </FieldSection>
        <FieldSection className="fieldSection">
          Количество страниц
          <input value={this.state.pages ? this.state.pages : ''} placeholder='Количество страниц' name='pages' disabled={this.state.editMode} onChange={this.handleFieldChange} />
        </FieldSection>
        <FieldSection className="fieldSection">
          Рейтинг
          <BookRating setRating={this.setRating} rating={bookInfo ? (this.state.rating || bookInfo.rating) : 0} />
        </FieldSection>
        <FieldSection className="fieldSection">
          Отзывы тех, кто прочитал
          <textarea value={this.state.testimonials ? this.state.testimonials : ''} placeholder='Отзывы тех, кто прочитал' name='testimonials' disabled={this.state.editMode} onChange={this.handleFieldChange}></textarea>
        </FieldSection>
        <FieldSection className="fieldSection">
          Личные заметки по книге
          <textarea value={this.state.notes ? this.state.notes : ''} placeholder='Личные заметки по книге' name='notes' disabled={this.state.editMode} onChange={this.handleFieldChange}></textarea>
        </FieldSection>
      </EditBookWrapper>
    )
  }
}
