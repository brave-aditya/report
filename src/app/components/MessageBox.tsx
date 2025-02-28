"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

interface Message {
    sender: string;
    text: string;
    time: string;
    type: "teacher" | "friend" | "suggestion";
  }
  
export const ComplaintRequest: React.FC = () => {
  const [teacherId, setTeacherId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log({ teacherId, message });
    setIsSent(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setTeacherId("");
      setMessage("");
      setIsSent(false);
    }, 3000);
  };

  return (
    <div className="backdrop-blur-md bg-white/5 border-2 border-yellow-400 rounded-3xl shadow-xl overflow-hidden">
      <div className="pb-2">
        <h2 className="text-xl font-semibold text-white/90 px-4 pt-4 text-center">
          Complaint/Request
        </h2>
      </div>
      <div className="px-4 pb-4">
        {isSent ? (
          <div className="py-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 mb-3">
              <FiSend className="text-green-400 text-xl" />
            </div>
            <p className="text-white font-medium">
              Your message has been sent!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="teacherId"
                className="block text-sm text-white/70 mb-1"
              >
                Teacher ID
              </label>
              <input
                type="text"
                id="teacherId"
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-yellow-400/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/70"
                placeholder="Enter teacher ID"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-white/70 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-yellow-400 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/70 min-h-24"
                placeholder="Describe your complaint or request"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4  hover:bg-yellow-500/80 border-2 border-yellow-400 rounded-full text-white font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FiSend className="text-lg" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
 const sampleMessages: Message[] = [
    { sender: "Mr. Sharma (Math Teacher)", text: "Great job on your recent test! Keep it up!", time: "10:30 AM", type: "teacher" },
    { sender: "Emily (Friend)", text: "Hey! Want to study together for the Science exam?", time: "9:15 AM", type: "friend" },
    { sender: "System Suggestion", text: "You haven't logged study hours today. Stay consistent!", time: "8:00 AM", type: "suggestion" },
    { sender: "Ms. Patel (History Teacher)", text: "Check the notes I uploaded for the next class.", time: "Yesterday", type: "teacher" },
    { sender: "Rahul (Friend)", text: "Did you complete the assignment?", time: "Yesterday", type: "friend" },
  ];
 
 export const RecentMessages: React.FC = () => {
    const [messages] = useState<Message[]>(sampleMessages);
  
    return (
      <div className="backdrop-blur-md bg-white/5 border-2 border-yellow-400 rounded-3xl shadow-xl overflow-hidden">
        <div className="pb-2">
          <h2 className="text-xl font-semibold text-white/90 px-4 pt-4 text-center items-center gap-2">
             Recent Messages
          </h2>
        </div>
        <div className="px-4 pb-4 max-h-60 overflow-y-auto space-y-3 no-scrollbar">
          {messages.map((msg, index) => (
            <div key={index} className="p-3 bg-white/10 border border-yellow-400 rounded-lg text-white">
              <p className="text-sm font-semibold text-white">{msg.sender}</p>
              <p className="text-white/80 text-sm">{msg.text}</p>
              <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
