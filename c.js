let currentToken = 1;
let totalTokens = 1;
let tokenQueue = [];

function generateToken() {
  const newToken = totalTokens++;
  tokenQueue.push(newToken);
  document.getElementById("yourToken").innerText = newToken;
  updateQueueStatus();
}

function updateQueueStatus() {
  document.getElementById("currentToken").innerText = currentToken;
  document.getElementById("waitTime").innerText = (tokenQueue.length - 1) * 2; // 2 mins per person
}

// Optional: Simulate calling next token every 15 seconds
setInterval(() => {
  if (tokenQueue.length > 0) {
    currentToken = tokenQueue.shift();
    updateQueueStatus();
  }
}, 15000); // 15 seconds for demo

// Initialize display
updateQueueStatus();
