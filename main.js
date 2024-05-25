let documents = document.querySelectorAll(".num");
let main_div = document.querySelector(".totals-section");

function counters(counts) {
  counts.forEach((count) => {
    // Loop through each element in the NodeList
    let goal = count.dataset.goal;
    let increase = setInterval(() => {
      let currentValue = parseInt(count.textContent); // Parse text content to integer
      if (currentValue < goal) {
        count.textContent = currentValue + 1; // Update text content
      } else {
        clearInterval(increase);
      }
    }, 150);
  });
}

counters(documents);
