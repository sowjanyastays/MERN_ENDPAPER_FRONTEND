import axios from 'axios'
import React, { Component } from 'react'
import './BookDisplayComponent.css'


export default class BookDisplayComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            bookList : []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3500/api/v1/books')
        .then(resposne => this.setState({bookList : resposne.data}))
    }
    handleEdit = () =>{
        window.location.href ='/edit'
    }

  render() {
    const {bookList} = this.state
    return (
      <div>
       {bookList.map(book=>(
        <div id='container'>
            <div id='details-container'>
            <div id='details'> 
                <p>ISBN_NUMBER: {book.isbn_number}</p>
                <p>BOOK NAME: {book.book_name}</p>
                <p>AUTHOR: {book.author}</p>
                <button onClick={this.handleEdit} id='button-edit'>
                    Edit
                </button>
            </div>
            </div>
        </div>
       ))}
      </div>
    )
  }
}
