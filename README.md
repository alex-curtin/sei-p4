# SEI Project 4

## Project Description
This is an app for collectors of vinyl records to keep track of their collection and view other users' collections. Users can create entries in their collection with album info (artist, title, etc.), pressing-specific info (catalog number, year), condition info, and an image url. Additionally, users can interact with eachother by posting comments on items in user collections.

## MVP
* Users can create an account, log in, log out
* Users can add records to their collection and update or delete them
* Users can view their own collection as well as other user’s collections
* Users can post comments on records in any user’s collection and update   or delete comments

### Post-MVP
* Add track listings
* Add a user profile page with links to records the user has commented on
* Users can add a link to the store where they bought the record
* Use third-party API to get album info
* Use active storage to store album cover images

## Wireframes
<img src="./assets/wireframes/home" alt="home page" width="700"/>
<img src="./assets/wireframes/collection_page" alt="collection page" width="700"/>
<img src="./assets/wireframes/record_details" alt="record details page" width="700"/>
<img src="./assets/wireframes/record_form_page" alt="record form page" width="700"/>

## ERD
<img src="./assets/p4-erd.ping" alt="erd" width="700">

## React Component Hierarchy
<App />
	<Home /> Landing page to login/register, view your collection, or view user list
	<Login/Register />
		<LoginForm />
		<RegisterForm />
	<UsersList /> List of users
  <UpdateUserInfo />
  <RecordsList /> List of record in one user’s collection
    <RecordForm /> Adds a record to your own collection
  <RecordDetails /> Full details for a single record
    <TrackList /> Track list for the record
    <RecordForm /> Form to record edit details
    <CommentsList /> Comments about the record, posted by users
      <CommentForm /> For posting or editing comments

## Aditional Technologies
In addition to Rails and React, the project will use React-Router, React-Burger-Menu, and React-Modal