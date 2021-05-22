window.addEventListener("DOMContentLoaded", () => {

  function array() {

    let array = [];

    for (let i = 0; i < 100; i++) {
      let randomNum = Math.floor(Math.random() * 300)
      array.push(randomNum);
    };
    return array;

  }



  function divGen() {

    let heights = array();
    console.log(heights)
    let barDiv = document.getElementById("components")
    barDiv.innerHTML = '';
   // let newDiv = document.createElement('div');

    for (let i = 0; i < 100; i++) {
      let newDiv = document.createElement('div');
      newDiv.classList.add("bars");
      newDiv.style.height = `${heights[i]}px`
      barDiv.appendChild(newDiv)
    };
  }
  let newArrayBtn = document.getElementById("new-array")
  newArrayBtn.addEventListener("click", () => {

    divGen();


  })



});
