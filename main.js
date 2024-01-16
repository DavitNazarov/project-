const winddow = document.querySelectorAll(".popup");//დასამატები ფანჯარაა
const add_btn = document.querySelectorAll(".add_btn");//დამატება
const  remove =  document.querySelectorAll(".remove");//წაშლა
const all = document.querySelector("#all");
const cards = document.querySelector(".cards");
const sport = document.querySelector("#sport");
const fun = document.querySelector("#fun");
const chil = document.querySelector("#chil");
const info = document.querySelector("#info");
const main = document.querySelector("#main");







//დამატება

for(let i = 0; i< add_btn.length; i++ ) {
 add_btn[i].addEventListener("click", () =>  {
    
 });

}

for(let i = 0; i < winddow.length; i++) {
    add_btn[i].addEventListener("click", () => {
        winddow[i].style.display = "block";
        
    });
}
//წაშლაა
for(let i = 0; i< remove.length; i++) {
    remove[i].addEventListener("click", () => {
        winddow[i].style.display = "none";
       
    });
}



                                //კატეგორიები


all.addEventListener("click", () => {
    cards.innerHTML = `
    <section class="cards">
      <div class="forcards"  >
             <div class="card">   <!-- ქარდები -->
               <div class="first">                  <!-- პირველი მენიუ -->
                 <input type="name" placeholder="Enter name" >
                 <h3>sport</h3>
               </div>
               <div class="second">                             <!-- შუა მენიუ -->
                 <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                 <h6>Lorem ipsum dolor sit amet consectetur,</h6>
               </div>
               <div class="thrid">                                <!-- ქვედა პროფერთები -->          
                 <i class="fa-solid fa-users">
                   <h6>120</h6>
                 </i>
                 <h5>
                   read more
                 </h5>
                 <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
               </div>
             </div>
             <div class="popup" id="popup">
              <i class=" remove fa-solid fa-xmark" ></i>
              <h5>120$</h5>
              <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
              <button class="btn btn-primary">Send</button>
             </div>

             </div>
           </div>
           
       
       
         <!-- მეორე ქარდი -->
         <div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3>Fun  <span>for children</span></h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>

               <div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3>for children <span>sport</span></h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>
          
               <div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3>Fun</h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>
          
               <div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3> Informational</h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>
          
               <div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3>sport  <span>for children</span></h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>
          
               <div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3>Fun  <span>Informational</span></h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>
    </section>
    `;

    
});

sport.addEventListener("click", () => {
cards.innerHTML = `
 <div class="forcards"  >
     <div class="card">
       <div class="first">
         <input type="name" placeholder="Enter name" >
         <h3>sport  <span>Informational</span></h3>
       </div>
       <div class="second">
         <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
         <h6>Lorem ipsum dolor sit amet consectetur,</h6>
       </div>
       <div class="thrid">
         <i class="fa-solid fa-users">
           <h6>53</h6>
         </i>
         <h5>
           read more
         </h5>
         <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
       </div>
     </div>
     <div class="popup" id="popup1">
       <i class=" remove fa-solid fa-xmark" ></i>
       <h5>120$</h5>
       <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
       <button class="btn btn-primary">Send</button>
      </div>
     </div>
   </div>
           
<div class="forcards"  >
<div class="card">   <!-- ქარდები -->
  <div class="first">                  <!-- პირველი მენიუ -->
    <input type="name" placeholder="Enter name" >
    <h3>sport</h3>
  </div>
  <div class="second">                             <!-- შუა მენიუ -->
    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
  </div>
  <div class="thrid">                                <!-- ქვედა პროფერთები -->          
    <i class="fa-solid fa-users">
      <h6>120</h6>
    </i>
    <h5>
      read more
    </h5>
    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
  </div>
</div>
<div class="popup" id="popup">
 <i class=" remove fa-solid fa-xmark" ></i>
 <h5>120$</h5>
 <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
 <button class="btn btn-primary">Send</button>
</div>

</div>
</div>
<div class="forcards"  >
<div class="card">
  <div class="first">
    <input type="name" placeholder="Enter name" >
    <h3>for children <span>sport</span></h3>
  </div>
  <div class="second">
    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
  </div>
  <div class="thrid">
    <i class="fa-solid fa-users">
      <h6>53</h6>
    </i>
    <h5>
      read more
    </h5>
    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
  </div>
</div>
<div class="popup" id="popup1">
  <i class=" remove fa-solid fa-xmark" ></i>
  <h5>120$</h5>
  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
  <button class="btn btn-primary">Send</button>
 </div>
</div>
</div>


`;
});

fun.addEventListener("click", () => {
cards.innerHTML = `
<div class="forcards"  >
<div class="card">
  <div class="first">
    <input type="name" placeholder="Enter name" >
    <h3>Fun  <span>for children</span></h3>
  </div>
  <div class="second">
    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
  </div>
  <div class="thrid">
    <i class="fa-solid fa-users">
      <h6>53</h6>
    </i>
    <h5>
      read more
    </h5>
    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
  </div>
</div>
<div class="popup" id="popup1">
  <i class=" remove fa-solid fa-xmark" ></i>
  <h5>120$</h5>
  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
  <button class="btn btn-primary">Send</button>
 </div>
</div>
</div>
<div class="forcards"  >
<div class="card">
  <div class="first">
    <input type="name" placeholder="Enter name" >
    <h3>Fun</h3>
  </div>
  <div class="second">
    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
  </div>
  <div class="thrid">
    <i class="fa-solid fa-users">
      <h6>53</h6>
    </i>
    <h5>
      read more
    </h5>
    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
  </div>
</div>
<div class="popup" id="popup1">
  <i class=" remove fa-solid fa-xmark" ></i>
  <h5>120$</h5>
  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
  <button class="btn btn-primary">Send</button>
 </div>
</div>
</div>

<div class="forcards"  >
<div class="card">
  <div class="first">
    <input type="name" placeholder="Enter name" >
    <h3>Fun  <span>Informational</span></h3>
  </div>
  <div class="second">
    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
  </div>
  <div class="thrid">
    <i class="fa-solid fa-users">
      <h6>53</h6>
    </i>
    <h5>
      read more
    </h5>
    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
  </div>
</div>
<div class="popup" id="popup1">
  <i class=" remove fa-solid fa-xmark" ></i>
  <h5>120$</h5>
  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
  <button class="btn btn-primary">Send</button>
 </div>
</div>
</div>

<div class="forcards"  >
   <div class="card">
     <div class="first">
       <input type="name" placeholder="Enter name" >
       <h3>sport  <span>Informational</span><span>Fun</span></h3>
     </div>
     <div class="second">
       <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
       <h6>Lorem ipsum dolor sit amet consectetur,</h6>
     </div>
     <div class="thrid">
       <i class="fa-solid fa-users">
         <h6>53</h6>
       </i>
       <h5>
         read more
       </h5>
       <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
     </div>
   </div>
   <div class="popup" id="popup1">
     <i class=" remove fa-solid fa-xmark" ></i>
     <h5>120$</h5>
     <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
     <button class="btn btn-primary">Send</button>
    </div>
   </div>
 </div>
`;
});

chil.addEventListener("click",() => {

    cards.innerHTML = `
    
    <div class="forcards"  >
    <div class="card">
      <div class="first">
        <input type="name" placeholder="Enter name" >
        <h3>for children <span>sport</span></h3>
      </div>
      <div class="second">
        <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
        <h6>Lorem ipsum dolor sit amet consectetur,</h6>
      </div>
      <div class="thrid">
        <i class="fa-solid fa-users">
          <h6>53</h6>
        </i>
        <h5>
          read more
        </h5>
        <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
      </div>
    </div>
    <div class="popup" id="popup1">
      <i class=" remove fa-solid fa-xmark" ></i>
      <h5>120$</h5>
      <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
      <button class="btn btn-primary">Send</button>
     </div>
    </div>
  </div>

  <div class="forcards"  >
  <div class="card">
    <div class="first">
      <input type="name" placeholder="Enter name" >
      <h3>Fun  <span>for children</span></h3>
    </div>
    <div class="second">
      <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
      <h6>Lorem ipsum dolor sit amet consectetur,</h6>
    </div>
    <div class="thrid">
      <i class="fa-solid fa-users">
        <h6>53</h6>
      </i>
      <h5>
        read more
      </h5>
      <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
    </div>
  </div>
  <div class="popup" id="popup1">
    <i class=" remove fa-solid fa-xmark" ></i>
    <h5>120$</h5>
    <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
    <button class="btn btn-primary">Send</button>
   </div>
  </div>
</div>

<div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3>for children <span>sport</span> fun</h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>

    `;
});

info.addEventListener("click",()=> {
    cards.innerHTML = `
    <div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3>Fun  <span>Informational</span></h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>


              <div class="forcards"  >
              <div class="card">
                <div class="first">
                  <input type="name" placeholder="Enter name" >
                  <h3>sport  <span>Informational</span><span>Fun</span></h3>
                </div>
                <div class="second">
                  <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                  <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                </div>
                <div class="thrid">
                  <i class="fa-solid fa-users">
                    <h6>53</h6>
                  </i>
                  <h5>
                    read more
                  </h5>
                  <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                </div>
              </div>
              <div class="popup" id="popup1">
                <i class=" remove fa-solid fa-xmark" ></i>
                <h5>120$</h5>
                <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                <button class="btn btn-primary">Send</button>
               </div>
              </div>
            </div>
        
            
            <div class="forcards"  >
            <div class="card">
              <div class="first">
                <input type="name" placeholder="Enter name" >
                <h3> Informational</h3>
              </div>
              <div class="second">
                <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                <h6>Lorem ipsum dolor sit amet consectetur,</h6>
              </div>
              <div class="thrid">
                <i class="fa-solid fa-users">
                  <h6>53</h6>
                </i>
                <h5>
                  read more
                </h5>
                <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
              </div>
            </div>
            <div class="popup" id="popup1">
              <i class=" remove fa-solid fa-xmark" ></i>
              <h5>120$</h5>
              <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
              <button class="btn btn-primary">Send</button>
             </div>
            </div>
          </div>

          <div class="forcards"  >
                <div class="card">
                  <div class="first">
                    <input type="name" placeholder="Enter name" >
                    <h3>Fun  <span>Informational</span></h3>
                  </div>
                  <div class="second">
                    <img src="https://voronezh.yavapteke.ru/static/media/no_image.5e2efe488811eb621492.jpg" alt="">
                    <h6>Lorem ipsum dolor sit amet consectetur,</h6>
                  </div>
                  <div class="thrid">
                    <i class="fa-solid fa-users">
                      <h6>53</h6>
                    </i>
                    <h5>
                      read more
                    </h5>
                    <button class="add_btn"><i class="fa-solid fa-square-plus"></i></button>
                  </div>
                </div>
                <div class="popup" id="popup1">
                  <i class=" remove fa-solid fa-xmark" ></i>
                  <h5>120$</h5>
                  <textarea class="message" name="textarea" id="" placeholder="Enter message"></textarea>
                  <button class="btn btn-primary">Send</button>
                 </div>
                </div>
              </div>
    `;
});