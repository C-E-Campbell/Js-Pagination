// DOM Acquisition
const students = document.getElementsByClassName('student-item');
const mainDiv = document.querySelector('div');
const pageDiv = document.querySelector('div.page');
const pageHeader = document.querySelector('div.page-header ');
const pageH2 = document.querySelector('div.page-header h2');






/* showPage() 
--takes in a page parameter to choose which page to show
--iterates through all the students and only shows indices based on the page chosen. the page number to show comes from the pageUl event listener
*/
function showPage(page) {
   for (let i = 0; i < students.length; i++) {
      if (page === 1) {
         if (i < 10) {
            students[i].style.display = ''
         } else {
            students[i].style.display = 'none'
         }
      } else if (page === 2) {
         if (i >= 11 && i <= 20) {
            students[i].style.display = ''
         } else {
            students[i].style.display = 'none'
         }
      } else if (page === 3) {
         if (i >= 21 && i <= 30) {
            students[i].style.display = ''
         } else {
            students[i].style.display = 'none'
         }
      } else if (page === 4) {
         if (i >= 31 && i <= 40) {
            students[i].style.display = ''
         } else {
            students[i].style.display = 'none'
         }
      } else if (page === 5) {
         if (i >= 41 && i <= 50) {
            students[i].style.display = ''
         } else {
            students[i].style.display = 'none'
         }
      } else if (page === 6) {
         if (i >= 51 && i <= 60) {
            students[i].style.display = ''
         } else {
            students[i].style.display = 'none'
         }
      } else if (page === 7) {
         if (i >= 61 && i <= 70) {
            students[i].style.display = ''
         } else {
            students[i].style.display = 'none'
         }
      } else if (page === 8) {
         if (i >= 71 && i <= 80) {
            students[i].style.display = ''
         } else {
            students[i].style.display = 'none'
         }
      }
   }
}



/* countNumOfPages() 
-- counts the number of students from the students variable (all the li tags with .student-item in the html doc)
-- then divides them by ten & rounds up to get the number of pagination buttons to be used in the appendPages function
*/
function countNumOfPages() {
   let numOfStudents = 0;
   for (let i = 0; i < students.length; i++) {
      numOfStudents += 1;
   }
   let numOfPages = Math.ceil(numOfStudents / 10);
   return numOfPages;
}


/* appendPageLinks() 
-- creates the pagination btns themselves depending on the number of students, this comes from the countNumOfPages function
-- adds and removes an active class from the pagination btns depending on what is clicked. only one btn should have the active class at one time.
*/
function appendPageLinks() {
   const div = document.createElement('div');
   div.classList.add('pagination');
   mainDiv.appendChild(div);

   const paginationDiv = document.getElementsByClassName('pagination')[0];
   const pageUl = document.createElement('ul');
   paginationDiv.appendChild(pageUl);


   // this for loop creates all the a-tags inside of the li-tags
   let pageBtn = countNumOfPages();
   for (let i = 1; i <= pageBtn; i++) {
      const li = document.createElement('li');
      pageUl.appendChild(li);
      li.innerHTML = "<a>" + i + "</a>";
   }

   const link = document.querySelectorAll('a');
   link[0].classList.add('active');

   //event listener to decide which page to show
   pageUl.addEventListener('click', (e) => {
      const a = e.target;
      for (let i = 0; i < link.length; i++) {
         link[i].classList.remove('active');
      }
      a.classList.add('active');
      if (a.textContent === '1') {
         showPage(1, students);

      } else if (a.textContent === '2') {
         showPage(2, students);

      } else if (a.textContent === '3') {
         showPage(3, students);

      } else if (a.textContent === '4') {
         showPage(4, students);

      } else if (a.textContent === '5') {
         showPage(5, students);

      } else if (a.textContent === '6') {
         showPage(6, students);

      } else if (a.textContent === '7') {
         showPage(7, students);

      }
   })
}


// call the inital page view
showPage(1);
appendPageLinks();