# managerFinal
Created an applicaton based of a video course on Udemy.com called the The Complete React Native and Redux Course.

The following application uses
  - React Native, 
  - Redux, 
  - Redux Thunk, 
  - lodash, 
  - firebase react native router flux,
  - flex-box implementation for styling,
  - re-usable components
 
A implemented my own styling methods different from the video course such as putting vector icons in the header. Following this
I added each their own functionality that goes to the add user page and also the sign out page with a pop displaying before. 

I also did a diffent design for the spinner as changing its size, and color. 

Another implementation I did was create a new reducer and action for the Modal that's displayed when hitting the button 
fire employee. Initially withouth a reducer and action call, the page would transition back to the employee list and then close the screen.
This looked unprofessional therefore I decided to fix it. The appropriate actions are called for whether the user hits
fire employee or cancel.

Note it also says text employee. Unfortunately the text does not work on the iphone emulator but does work on the android. 
Simply all this does is go to the texting application with the number at the top that was in the employee information
in the managerFinal application. Followed by a message saying when the user works.

Below is a link to see what the application does in a video minus the texting part.

https://youtu.be/VM4aDajK_8E
