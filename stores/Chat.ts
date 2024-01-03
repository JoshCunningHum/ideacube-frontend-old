import { defineStore } from 'pinia'

export interface Message{
  name: string;
  message: string;
}

export const useChatStore = defineStore('Chat', () => {
  const messages = ref<Message[]>([]);
  const { user } = useAccount();
  const { socket } = useSocket();

  const send = (msg: string) => {
    if(!user.value || !socket.value) return;

    const data : Message = { 
      message: msg,
      name: userFullName(user.value)
    };

    socket.value.emit('relay', {
      name: 'message-send',
      arguments: [data],
      targets: 'allexceptown'
    })

    messages.value.push(data);
  }

  const receive = (data: Message) => {
    messages.value.push(data);
  }

  return {
    messages,

    send,
    receive
  }
})
