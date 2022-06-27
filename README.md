### How to use demo code
have a step by step plan
Follow your plan
When something breaks, stop.
Ask, what step is broken?
Debug for a bit (find undefined things, check for console errors, console.log stuff)
Ask, "Who did dani do this step?"
Open the demo code and answer that one question about that one step.
Close the demo code and return to step 4 with new knowledge.
### Plan

1. Make fake Page components for each page
2. Set up react router for the fake pages
3. Set up my supabase table and adding Cred to the .env
--- user_id has default value of auth.uid()
4. Set up RLS to protect rows so you can only see rows YOU CREATED
--- use the delete template as a starting point then choose ALL

### "Auth" page

5. Set up the Auth Page forms
6. Set up the submit handler to sign in/sign up
    <!-- async function handleSignInSubmit(e) { e.preventDefault() const user = await signIn setUser(user)} -->
--- write a signUp function in our fetch utils that takes email and password as arguments
    <!-- export async function signIn(email,password) { const {user,error} = await client.from.signIn({email: email, password: password})} -->
--- pass email and password from state to signUp
    <!-- const [signInEmail, setSignInEmail] = useState(''); -->
    <!-- const [signInPassword, setSignInPassword] = useState(''); -->
--- log out user to double check it worked

7. protect our routes: if you are signed in, you shouldn't be allowed in the auth page. it should send you to the list page. Use a ternery in App.js. If there is a user in state, show the list page. If there is no user, show the auth page. The default state of user is client.auth.user(). That way if the user navigates to another page, losing state, we don't kick them back to auth when they return.
8. we will put the user in App.js state. However, that data lives in a child (AuthPage). We need to pass setUser down to the authpage so that it can set parent state.
9. We also add a logout button that conditionally renders in the header if there is a user in state.

### "Create" page

10. Make a form with a title, author, value, onChange, etc
11. Make a submit handler and log out the title and author just to confirm we can access form values
12. Make a createBook function in fetch-utils. it takes in a book object: { title, author }
13. in our submit handler, call create book, clear out the form, redirect the user to the books page

### "List page

14. Make state for our data
15. Fetch our data in a use effect
16. map over the data in our JSX
17. Render a link to detail page for each item in the array

### "Update" Page

18. Works just like the create page with three differences: update instead of create, add a delete button, and hydrate the form with pre-filled info
19. First, let's fetch the book. Get the id from the URL, make a getBookById function in fetch-utils, and grab the book on load in a useEffect
20. inject the book into state. Since the inputs are controlled, this will also update the inputs.
21. Write an updateBook function, in fetch-utils and call it (with id and book object) in UpdatePage.js on click
22. add a delete function in fetch-utils and call it on click in the UpdatePage

Components:

### App.js

---import AuthPage

### AuthPage.js - this comp. tracks user form state and allows users to sign up and sign in. It will take { setUser } from App.js
--- import useState and signIn/Up
--- catch setUser (from app.js state) useState takes in client.auth.user()
--- state and set--- signUpEmail, signInEmail, signUpPassword, signInPassword
--- we'll need 2x <form onSubmit={handleSubmit}> with 4x <label> setState(e.target.value)}> (signIn/Up and 2x password) and 4x <input> onChange={() => setState(e.target.value)} and 2x <button> for sign in/up. handleSubmit for sign in/up async functions that will need to await sign in/up fetch functions from fetch-utils and set state


CreatePage.js - tracks from state for item's fields. Uses controlled form inputs (value is linked to state)
    - on submit, create and item in supabase and redirect user to list page

ListPage.js - fetches and displays all items on load by using .map and the Item component

UpdatePage.js - fetches and displays appropriate item on load. the useEffect dependency array should account for changes in the URl id param. on submit update the item. on load, preload the form

fetch-utils.js - fetches data table and user table data from SB
--- we can destructure our response with const { data, error } = await client.from
---will need a fetch for
createBook() -- 
getBooks() -- get data from table, select all
updateBook(book, id) -- get data from table, update book, match to id, select a single book
deleteBook(id) -- get data from table, delete, match to id, select single
getBookById(id) -- data from table, select all, match to id, select single
signUp() -- client.auth.signUp ({ email: email, password: password })
signIn(), and
logout() -- client.auth.signOut()

Item - renders a single item with r-r-d Link that takes the user to the item's UpdatePage