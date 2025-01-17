const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too :)';
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Message sent To Niyas');
    sendMessageToDrive('Clicked Yes');
});
document.getElementById('noButton').addEventListener('click', function() {
    alert('Why? Just think once more');
    sendMessageToDrive('Clicked No');
});

let yesHoverCount = 0; 
yesBtn.addEventListener('mouseover', () => { 
    yesHoverCount++;
     if (yesHoverCount <= 1) { 
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
        yesBtn.style.left = i + 'px';
        yesBtn.style.top = j + 'px';
    }
});

let noHoverCount = 0;
noBtn.addEventListener('mouseover', () => { 
    noHoverCount++; if (noHoverCount <= 10) { 
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
    } 
});
function sendMessageToDrive(message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbxIvWac6x1PszfOGmC5OQhow41E88LxWNvgrB2T29kdSXItzg26bJ_JE2-JbfCpejDS/exec", true); // Replace YOUR_WEB_APP_URL with the URL you copied
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Message saved to Google Drive');
      }
    };
    xhr.send("message=" + message);
  }
  


/*(function sendEmail(message) {
     var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Message sent successfully');
        }
    };
    xhr.send("message=" + message);
}

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
*/

