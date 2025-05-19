import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/users/${userId}`);
      set({ messages: res.data });
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

 sendMessage: async (messageData) => {
  const { selectedUser } = get();
  try {
    const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
    
    // ✅ Güncel mesaj listesine eklemenin doğru yolu:
    set((state) => ({
      messages: [...state.messages, res.data],
    }));
  } catch (error) {
    toast.error(error.response.data.message);
  }
},


  subscribeToMessages: () => {
  const { selectedUser } = get();
  if (!selectedUser) return;

  const socket = useAuthStore.getState().socket;

  socket.on("newMessage", (newMessage) => {
    const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;

    if (!isMessageSentFromSelectedUser) return;

    // ✅ En güncel mesaj listesine yeni mesajı ekle:
    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  });
},


  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
