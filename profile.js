document.addEventListener("DOMContentLoaded", function () {
  const star_rating_svg = document.querySelectorAll(".star_rating_svg svg");

  star_rating_svg.forEach((star, index) => {
    star.addEventListener("click", function () {
      star_rating_svg.forEach((s) => s.classList.remove("rated"));
      for (let i = 0; i <= index; i++) {
        star_rating_svg[i].classList.toggle("rated");
      }
    });
  });
});

// profile background image & save to local storage
const back_file = document.getElementById("input_back_file");
const back_box = document.getElementById("profile_back_box");
const back_span = document.getElementById("profile_back_span");
// send file url to local storage
back_file.addEventListener("change", function () {
  const read = new FileReader();

  read.addEventListener("load", () => {
    localStorage.setItem("user_back_image", read.result);
  });
  read.readAsDataURL(this.files[0]); // // es imistvisaa rom URL is saxit gadasces localStorage s
});
// add background image to box
back_file.addEventListener("change", (e) => {
  back_box.style.backgroundImage = `url(${URL.createObjectURL(
    e.target.files[0]
  )})`;
  back_span.style.display = "none";
});

const locat_user_img = localStorage.getItem("user_back_image");
// when i will restart web it automaticly will add url . which user selected first
back_box.style.backgroundImage = `url(${locat_user_img})`;
{
  locat_user_img
    ? (back_span.style.display = "none")
    : (back_span.style.display = "flex");
}

const input_file = document.getElementById("input_file");
const profile_main_image = document.getElementById("profile_main_image");
const main_image_text = document.getElementById("profile_main_image_text");

input_file.addEventListener("change", function () {
  const read = new FileReader();

  read.addEventListener("load", () => {
    localStorage.setItem("user_img", read.result);
  });
  read.readAsDataURL(this.files[0]); // // es imistvisaa rom URL is saxit gadasces localStorage s
});
// add the file to the background of box
input_file.addEventListener("change", (e) => {
  profile_main_image.style.backgroundImage = `url(${URL.createObjectURL(
    e.target.files[0]
  )})`;
  main_image_text.style.display = "none";
});
const local_main_user_image = localStorage.getItem("user_img");
// when i will restart web it automaticly will add url . which user selected first

profile_main_image.style.backgroundImage = `url(${local_main_user_image})`;
{
  local_main_user_image
    ? (main_image_text.style.display = "none")
    : (main_image_text.style.display = "flex");
}

// adding and removing posts
var addPostBtn = document.getElementById("add_post");
var postsContainer = document.querySelector(".post_grid");

var postIdCounter = 1;

function addPost() {
  var post = document.createElement("div");
  post.className = "post_box_main";
  post.id = "post_box_main" + postIdCounter;

  post.innerHTML = `
 
  <div class="post_box">
    <div class="post_image">
      <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
    <div class="post_content">    
      <div class="edit" onclick="openFileInput(this)">
        <svg width="64px" height="64px" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45px" height="45px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M62.828,12.482L51.514,1.168c-1.562-1.562-4.093-1.562-5.657,0.001c0,0-44.646,44.646-45.255,45.255 C-0.006,47.031,0,47.996,0,47.996l0.001,13.999c0,1.105,0.896,2,1.999,2.001h4.99c0.003,0,9.01,0,9.01,0s0.963,0.008,1.572-0.602 s45.256-45.257,45.256-45.257C64.392,16.575,64.392,14.046,62.828,12.482z M37.356,12.497l3.535,3.536L6.95,49.976l-3.536-3.536 L37.356,12.497z M8.364,51.39l33.941-33.942l4.243,4.243L12.606,55.632L8.364,51.39z M3.001,61.995c-0.553,0-1.001-0.446-1-0.999 v-1.583l2.582,2.582H3.001z M7.411,61.996l-5.41-5.41l0.001-8.73l14.141,14.141H7.411z M17.557,60.582l-3.536-3.536l33.942-33.94 l3.535,3.535L17.557,60.582z M52.912,25.227L38.771,11.083l2.828-2.828l14.143,14.143L52.912,25.227z M61.414,16.725l-4.259,4.259 L43.013,6.841l4.258-4.257c0.782-0.782,2.049-0.782,2.829-0.002l11.314,11.314C62.195,14.678,62.194,15.943,61.414,16.725z"></path> </g></svg>
      </div>
        <div>
          <svg id="delete_icon" fill="#000000" version="1.1" id="Layer_1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512" xml:space="preserve" width="64px" height="64px">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                  <g>
                      <g>
                          <rect x="166.4" y="230.4" width="25.6" height="204.8"></rect>
                      </g>
                  </g>
                  <g>
                      <g>
                          <rect x="243.2" y="230.4" width="25.6" height="204.8"></rect>
                      </g>
                  </g>
                  <g>
                      <g>
                          <rect x="320" y="230.4" width="25.6" height="204.8"></rect>
                      </g>
                  </g>
                  <g>
                      <g>
                          <path
                              d="M422.4,51.2H320V25.6C320,11.46,308.54,0,294.4,0h-76.8C203.46,0,192,11.46,192,25.6v25.6H89.6 C75.46,51.2,64,62.66,64,76.8V128c0,14.14,11.46,25.6,25.6,25.6v332.8c0,14.14,11.46,25.6,25.6,25.6h281.6 c14.14,0,25.6-11.46,25.6-25.6V153.6c14.14,0,25.6-11.46,25.6-25.6V76.8C448,62.66,436.54,51.2,422.4,51.2z M217.6,25.6h76.8v25.6 h-76.8V25.6z M396.8,486.4H115.2V153.6h281.6V486.4z M422.4,128H89.6V76.8h332.8V128z">
                          </path>
                      </g>
                  </g>
              </g>
          </svg>
        </div>
    </div>
  </div>
  <h1>post title</h1>
  <p>post min text</p>

    `;

  postsContainer.appendChild(post);
  postIdCounter++;

  var deleteIcon = post.querySelector("#delete_icon");
  deleteIcon.addEventListener("click", () => {
    removePost(post.id);
    if (postIdCounter > 1) {
      postIdCounter--;
    }
  });
}
// adding four posts on page
for (var i = 0; i < 4; i++) {
  addPost();
}

function removePost(postId) {
  var postToRemove = document.getElementById(postId);
  if (postToRemove) {
    postsContainer.removeChild(postToRemove);
  }
}
addPostBtn.addEventListener("click", addPost);

// editing pictures in posts
function openFileInput(editbox) {
  var imageContainer = editbox.closest(".post_box");
  var post_svg = editbox.closest(".post_box").querySelector(".post_box svg");
  console.log(imageContainer);
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.addEventListener("change", () => {
    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = (e) => {
        imageContainer.style.backgroundImage = `url(${e.target.result})`;
        post_svg.style.visibility = "hidden";
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  });
  fileInput.click();
}
