let count = 0;

  let progressBar = document.querySelectorAll('.progressBar');


  function updateProgress(percentage) {
    progressBar.value = percentage;
  }
  
  
  let progress = 0;
  const intervalId = setInterval(() => {
    if (progress >= 70) {
      clearInterval(intervalId);
    } else {
      progress += 1;
      updateProgress(progress);
    }
  }, 20); 


