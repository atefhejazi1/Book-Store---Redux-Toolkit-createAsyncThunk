# Book-Store with Redux Toolkit and createAsyncThunk

This is a simple React project demonstrating a **Book Store** application using **Redux Toolkit** with `createAsyncThunk` for asynchronous operations.  
The app supports basic **CRUD** operations on books (Create, Read, Delete), and includes a simple login simulation to enable/disable the add and delete buttons.

---

## Features

- **Read Books**: Fetch and display a list of books from a simulated API using `json-server`.
- **Add Book**: Add new books to the list.
- **Delete Book**: Delete existing books from the list.
- **Login Simulation**:  
  - When logged in, the Add and Delete buttons are enabled.  
  - When logged out, those buttons are disabled.
- **State Management**: Fully managed with **Redux Toolkit** and async actions via `createAsyncThunk`.
- **Clean and simple UI**: For easy testing and extension.

---

## Technologies Used

- React
- Redux Toolkit (`@reduxjs/toolkit`)
- React Redux
- createAsyncThunk for async calls
- `json-server` to simulate backend API
- CSS for styling
