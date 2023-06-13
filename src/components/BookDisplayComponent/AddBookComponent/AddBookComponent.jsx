import React, { Component } from 'react'

export default class AddBookComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            "isbn_number": "",
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
        event.preventDefault();
        console.log(this.state);
        fetch('http://localhost:3500/api/v1/books/add',{
          method : 'POST',
          crossDomain : true,
          headers : {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
          },
          body:JSON.stringify({
            "isbn_number": this.state.isbn_number,
            "book_name": this.state.book_name,
            "author": this.state.author,
            "published_date": this.state.published_date,
            "genre": this.state.genre,
            "status": this.state.status,
          })
        })
        // .then(response=>response.json())
        .then((data)=>{
          console.log(data)
          window.location.href ='/books'
      })

    }
  render() {
    return (
      <div>
        <h1>ADD NEW BOOK</h1>
        <form onSubmit={this.onSubmitHandler}>
            <label>ISBN NUMBER</label>
            <input 
                type='text'
                className='form-control'
                name='isbn_number'
                onChange={this.isbnChangeHandler}
                value = {this.state.isbn_number}
                required
            />
            <label>BOOK NAME</label>
            <input 
                type='text'
                name='bookname'
                className='form-control'
                onChange={this.bookNameChangeHandler}
                value = {this.state.book_name}
                required
            />
            <label>AUTHOR </label>
            <input 
                type='text'
                name='author'
                className='form-control'
                onChange={this.authorChangeHandler}
                value = {this.state.author}
                required
            />
            <label>PUBLISHED DATE</label>
            <input 
                type='DATE'
                name='published_date'
                className='form-control'
                onChange={this.dateChangeHandler}
                value = {this.state.published_date}
                required
            />
            <label>GENRE</label>
            <input 
                type='text'
                name='genre'
                className='form-control'
                onChange={this.genreChangeHandler}
                value = {this.state.genre}
                required
            />
            <label>STATUS</label>
            <input 
                type='text'
                name='status'
                className='form-control'
                onChange={this.statusChangeHandler}
                value = {this.state.status}
                required
            />
            <button type='submit'>Add book</button>
        </form>
      </div>
    )
  }
}
