let arrow = document.getElementById("arrow");
let detectBtn = document.getElementById("detect");
let box = document.getElementById("box");
let commentInput = document.getElementById("comment");

detectBtn.addEventListener("mouseover", (event) => {
    arrow.style.color = "black";
    detectBtn.style.color = "black";
    detectBtn.style.backgroundColor = "white";
    arrow.style.transform = "translateX(10px)";


});

detectBtn.addEventListener("mouseout", () => {
    arrow.style.color = ""; 
    detectBtn.style.backgroundColor = ""; 
    detectBtn.style.color = "";
    arrow.style.transform = "";


});



detectBtn.addEventListener("click", () => {
    let comment = commentInput.value;
    if (comment) {
        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `comment=${encodeURIComponent(comment)}`,
        })
        .then(response => response.json())
        .then(data => {
            if (data.prediction) {
                alert(`Prediction: ${data.prediction}`);
            } else {
                alert(`Error: ${data.error}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please enter a comment');
    }
});





anime({
    targets: '.square-box',
    direction: 'alternate',
    translateX: 1200,
    backgroundColor: '#154d84',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutSine',
  loop: 3,
  color: '#fff',
  duration: 2000,
  });


