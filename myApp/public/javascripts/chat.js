const socket = io();

// Configura los listeners de mensajes
function setupChat() {
  socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = `[${msg.username}]: ${msg.text}`;
    document.getElementById('messages').appendChild(item);
  });

  socket.on('private message', ({ sender, text }) => {
    const item = document.createElement('li');
    item.textContent = `[Privado] ${sender}: ${text}`;
    document.getElementById('messages').appendChild(item);
  });

  socket.on('chat history', (messages) => {
    const messagesList = document.getElementById('messages');
    messages.forEach(({ username, text }) => {
      const item = document.createElement('li');
      item.textContent = `[${username}]: ${text}`;
      messagesList.appendChild(item);
    });
  });
}

// Llama a la configuración al cargar el chat
setupChat();
