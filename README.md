# b7a10-chef-recipe-hunter-server-side-Majedul-Hasan


<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-Majedul-Hasan">
    <img src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Photo.png" alt="Logo"  height="80">
  </a>

  <h3 align="center">your recipe || assignment 10 server</h3>

  <p align="center">
    Main Requirements && Bonus Requirements for this assignment
    <br />
    
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#main-requirements">Main Requirements</a>
      <ul>
        <li><a href="#json-info"> JSON information</a></li>
      </ul>
    </li>
    <li>
      <a href="#bonus-requirements">Bonus Requirements</a>
    </li>    
  </ol>
</details>



<!-- Main Requirements -->
## Main Requirements

<ol>

<li>Create a website that shows the recipes of all available chefs.</li>
<li>The website must be exclusively dedicated to one cuisine(Bangladeshi, Chinese, Indian, Mediterranean, Thai, Japanese, Italian, African, Vietnamese, Srilankan, Nepalese, American, Korean, Mexican, Australian, Afgan, French, etc.).</li>
<li>For example, if you give Chinese Chef and Chinese food recipes, it will only have Chinese Chef and Chinese food recipes. You cannot add recipes from other countries—only one country chef and recipe.
</li>





## json-info
<li>Make another json file having a minimum of 6 job data. The data will have the following information: (10)
        <ul>
            <li>id</li>
            <li>Company Logo</li>
            <li>Job title</li>
            <li>Company Name</li>
             <li>
            <ul>
                <li> Remote or</li>
                <li> Onsite</li>
            </ul>
            </li>
            <li> Location</li>
            <li>
            <ul>
                <li> Fulltime </li>
                <li> part-time</li>
            </ul>
            </li>
            <li>Job Description</li>
<ul>
           <li> Job Responsibility</li>
            <li>Educational Requirements</li>
            <li>Experiences</li>
            <li>Contact information(phone, email)</li>
        </ul>
</li>
<li>At first, the featured section will show the first <b>four job cards</b>  containing all the information as shown in the figma. This featured section will also contain a <b>see all jobs</b>  button at the bottom of these cards.</li>
<li> Clicking on the <b>View Details</b> button will redirect the user to the <b>/job/:id</b>  route where he/she will see a banner and all the details as shown in the figma</li>
<li>Clicking on the <b>Apply Now</b> button will add that job information to local storage. </li>
<li>Create an <b>Applied Jobs</b>  page showing all the applied jobs in a tabular/list view. Don’t forget to add a banner at the top.</li>
<li>Create a <b>statistics</b>  page. <b>It cannot be a simple line/bar chart</b> . The chart will be based on the assignment marks (all the marks you got so far) against the assignment number. Don’t forget to give tooltips
</li>
<li>Create a 404 page</li>
</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Bonus Requirements -->
## Bonus Requirements

<ol>
<li>Create a blog page and answer the following questions: </li>
<li>Blog component must have the answers of the following questions:
        <ul>
            <li>When should you use context API?</li>
            <li>What is a custom hook?</li>
            <li>What is useRef?</li>
            <li>What is useMemo?</li>
        </ul>
</li>
<li>Add a filter system or you can add two buttons on the applied job page. The filter system or 2 buttons will have:
        <ul>
            <li>The <b>remote option</b>  will show all the remote job postings</li>
            <li>The <b>on-site option</b>  will show all the on-site job postings</li>
        </ul>
</li>
<li>Clicking on the <b>see all jobs</b>  button will load all the jobs and your site will not show 404 after the reload. Moreover, you must make the <b>home page</b>  responsive for <b> mobile and desktop</b>.</li>
<li>Your repository must have a minimum of 10 meaningful GitHub commits. Create a Readme file and make a list of the best features of your project. The list can be ordered or unordered. The Readme file must contain a live link(hosting) of your project.</li>
</ol>



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Optional  -->
## Optional

<ol>
  <li>Create a footer</li>
  <li>Add active style to links on the navbar</li>
  <li>hide the see all jobs buttons</li>
  <li>Don’t allow users to apply for the same job multiple times. If the user tries to apply for the same job multiple times, and show him/her a toast alert.</li>
</ol>


### Built With

 major frameworks/libraries used to bootstrap this project.


 [![React][React.js]][React-url]
 [![React-icons][React-icons.com]][React-icons-url]
 [![Tailwindcss][Tailwindcss.com]][Tailwindcss-url]
 [![React-router][React-router.com]][React-router-url]
 [![React-toastify][React-toastify.com]][React-toastify-url]
 [![daisyui][daisyui.com]][daisyui-url]
 <!-- 
 [![momentjs][momentjs.com]][momentjs-url] -->



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwindcss.com]: https://img.shields.io/badge/tailwindcss-282828?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[Tailwindcss-url]: https://tailwindcss.com/
[daisyui.com]: https://img.shields.io/badge/daisyui-000?style=for-the-badge&logo=DAISYUI&logoColor=31f6d8
[daisyui-url]: https://daisyui.com/
[React-icons.com]: https://img.shields.io/badge/reactIcons-aa2828?style=for-the-badge&logo=react
[React-icons-url]: https://react-icons.github.io/react-icons
[React-toastify.com]: https://img.shields.io/badge/react-toastify-25c2a0?style=for-the-badge&logo=react
[React-toastify-url]: https://fkhadra.github.io/react-toastify/introduction/
[React-router.com]: https://img.shields.io/badge/reactrouter-f44250?style=for-the-badge&logo=reactrouter&logoColor=fff
[React-router-url]: https://reactrouter.com/
<!-- [momentjs.com]: https://img.shields.io/badge/momentjs-000?style=for-the-badge&logo=momentdotjs&clock=31f6d8 -->
<!-- [momentjs-url]: https://momentjs.com/ -->


