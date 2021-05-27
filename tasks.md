1. Person = {id, fName, lName, age, email, phone, avatar}
2. Album = {id, personId, title}
3. Photo = {id, albumId, title, src}
4. Comments = {id, photoId, personId (Author), title, body, datetime}
5. Blog = {id, personId, title, short, body, like, dislike, datetime}

1. Home - ...
2. Persons List
3. Person Page - Show info, Edit Info
4.1. Albums List
4.2. Album Page - PhotoList + AddNewPhoto
4.3. Photo + CommentsList + AddNewComment
5. BlogList - (title+short) + show(like-dislike) + AddNewBlogRecord
5.1. BlogRecord - Title + Body + Like-Dislike
   

react-router-dom
https://csslayout.io/patterns
localStorage
fontAwesome