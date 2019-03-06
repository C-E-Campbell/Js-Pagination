// DOM Acquisition
const students = document.getElementsByClassName('student-item');
const mainDiv = document.querySelector('div');
const pageDiv = document.querySelector('div.page');
const pageHeader = document.querySelector('div.page-header ');
const pageH2 = document.querySelector('div.page-header h2');
console.log(students);





/* showPage() 
--takes in a page parameter to choose which page to show and a list. the list is the array of students
--iterates through all the students and only shows indices based on the page chosen. the page number to show comes from the pageUl event listener
*/
function showPage(page, list) {
   // these equations determine the start and end for the indices that should be shown. 
   let start = (page - 1) * 10;
   let end = ((page - 1) * 10) + 9;

   for (let i = 0; i < list.length; i++) {
      if (i >= start && i <= end) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
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

   //pageUL -- event listener to decide which page to show
   pageUl.addEventListener('click', (e) => {
      const a = e.target;
      for (let i = 0; i < link.length; i++) {
         link[i].classList.remove('active');
      }
      a.classList.add('active');
      let pageNum = a.textContent;

      showPage(pageNum, students);
   })
}


// call the inital page view
showPage(1, students);
appendPageLinks();
