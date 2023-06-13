import React, { Component } from 'react'

export default class EditBookComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            "isbn_number": props.isbn_number,
            "book_name": "",
            "author": "",
            "published_date": "",
            "genre": "",
            "status": "",
        }
    }
    isbnChangeHandler = (event) =>{
        this.setState({
            isbn_number :  event.target.value
          })
    }
    bookNameChangeHandler = (event) =>{
        this.setState({
            book_name :  event.target.value
          })

    }
    authorChangeHandler = (event) =>{
        this.setState({
            author :  event.target.value
          })

    }
    dateChangeHandler = (event) =>{
        this.setState({
            published_date :  event.target.value
          })
    }
    statusChangeHandler = (event) =>{
        this.setState({
            status :  event.target.value
          })

    }
    genreChangeHandler = (event) =>{
        this.setState({
            genre :  event.target.value
          })
    }
    onSubmitHandler = (event) =>{
        event.preventDefault()
        console.log(this.state);
        fetch(`http://localhost:3500/api/v1/books/edit/${this.state.isbn_number}`,{
          method : 'PATCH',
          crossDomain : true,
          headers : {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
          },
          body:JSON.stringify({
            "book_name": this.state.book_name,
            "author": this.state.author,
            "published_date": this.state.published_date,
            "genre": this.state.genre,
            "status": this.state.status,
          })
        })
        .then((data)=>{
          console.log(data)
          window.location.href ='/books'
      })

    }
  render() {
    return (
      <div>
        <h1>EDIT BOOK</h1>
        <form onSubmit={this.onSubmitHandler}>
            <label>BOOK NAME</label>
            <input 
                type='text'
                name='bookname'
                className='form-control'
                onChange={this.bookNameChangeHandler}
                value = {this.state.book_name}
                
            />
            <label>AUTHOR </label>
            <input 
                type='text'
                name='author'
                className='form-control'
                onChange={this.authorChangeHandler}
                value = {this.state.author}
                
            />
            <label>PUBLISHED DATE</label>
            <input 
                type='text'
                name='published_date'
                className='form-control'
                onChange={this.dateChangeHandler}
                value = {this.state.published_date}
                
            />
            <label>GENRE</label>
            <input 
                type='text'
                name='genre'
                className='form-control'
                onChange={this.genreChangeHandler}
                value = {this.state.genre}
                
            />
            <label>STATUS</label>
            <input 
                type='text'
                name='status'
                className='form-control'
                onChange={this.statusChangeHandler}
                value = {this.state.status}
            />
            <button type='submit'>Add book</button>
        </form>
      </div>
    )
  }
}
