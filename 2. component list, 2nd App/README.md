### till now, we been passing raw data, and for each element we need to declare a element. (hardcoded)
<br>

### Now, we can make it more dynamic. For can use map function and create a object and pass it.<br>

```
Pass list in stead of raw data. array mapping. (see about mapping: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
```
###  The main state obj:
```
  state = {
    books: [
      { key: 0, bookName: "1984", writer: "George Orwell" },
      { key: 1, bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { key: 2, bookName: "The", writer: "george orwell" }
    ]
  }
```
<hr>

## 1. pass object by making a list.(using map function)
<img src="picS/dynamic list1.JPG" alt="peng ting" width="80%">
<hr>

## 2. (delete from main object) delete an obj by clicking on it. passing function reference, to delete an element. but we need to access the index to delete an element.
<img src="picS/delete from main obj state.JPG" alt="peng ting" width="80%">
<hr>

## 3. (use alternateve way, not deleting directly from state obj) delete an obj by clicking on it. passing function reference, to delete an element. but we need to access the index to delete an element.
<img src="picS/indirect delete the element.JPG" alt="peng ting" width="80%">
<hr>

### but here all the reference is passing to 'booksList' variable in 'deleteElement' function.
## here we can work on the copy of the obj: 'slice()' , arrow function use to copy the list, spread operator use.
```
//// delete function.

  deleteElement = (index) => {
    //const booksList = this.state.books.slice(); // arrow slice()
    //const booksList= this.state.books.map(item => item); // arrow func
    const booksList = [...this.state.books];

    this.setState({
      books: booksList
    });
  };
```
<hr>

## 4. (change on main obj) pass function to component and change state obj.
### take input at input field.
direct change on main obj from text field.JPG
<img src="picS/direct change on main obj from text field.JPG" alt="peng ting" width="80%">
<hr>

## 4. (change on a variable and replace) pass function to component and change state obj.
### take input at input field.
direct change on main obj from text field.JPG
<img src="picS/Book name changing indirectly.JPG" alt="peng ting" width="80%">
<hr>
