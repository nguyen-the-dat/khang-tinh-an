import { useEffect, useRef, useState } from 'react';
import { companyInfo } from './companyInfo';
import { ChatbotIcons } from './ChatbotIcon';
import { ChatMessage } from './ChatMessage';
import { ChatForm } from './ChatForm';
import { BsChatDots } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

interface ChatItem {
	hideInChat?: boolean;
	role: 'user' | 'model';
	text: string;
	isError?: boolean;
}

export default function Chatbot() {
	const [chatHistory, setChatHistory] = useState<ChatItem[]>([
		{ hideInChat: true, role: 'model', text: companyInfo },
	]);
	const chatbodyRef = useRef<HTMLDivElement>(null);
	const [chatbot, showChatbot] = useState<boolean>(false);

	const generateBotResponse = async (history: ChatItem[]) => {
		const updateHistory = (text: string, isError = false) => {
			setChatHistory((prev) => [
				...prev.filter((msg) => msg.text !== 'Đang nghĩ...'),
				{ role: 'model', text, isError },
			]);
		};

		const formattedHistory = history.map(({ role, text }) => ({
			role,
			parts: [{ text }],
		}));

		try {
			const response = await fetch(
				'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAv0t9qlkXR5CU11q2RVmdCxVFtlggSyzg',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ contents: formattedHistory }),
				}
			);
			const data = await response.json();

			if (!response.ok)
				throw new Error(data.error?.message || 'Something went wrong');

			const apiResponseText = data.candidates[0].content.parts[0].text
				.replace(/\*\*(.*?)\*\*/g, '$1')
				.trim();

			updateHistory(apiResponseText);
		} catch (err: any) {
			updateHistory(err.message, true);
		}
	};

	useEffect(() => {
		if (chatbodyRef.current) {
			chatbodyRef.current.scrollTo({
				top: chatbodyRef.current.scrollHeight,
				behavior: 'smooth',
			});
		}
	}, [chatHistory]);

	return (
		<>
			{/* Toggle Button - Luôn hiển thị */}
			<button
				onClick={() => showChatbot((prev) => !prev)}
				className="fixed bottom-8 right-8 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 z-[60]"
			>
				{chatbot ? <IoClose size={24} /> : <BsChatDots size={22} />}
			</button>

			{/* Chat Window */}
			<div
				className={`fixed bottom-[90px] right-8 bg-white rounded-xl shadow-lg w-[420px] overflow-hidden transform transition-all duration-200 z-[50] ${
					chatbot
						? 'scale-100 opacity-100 pointer-events-auto'
						: 'scale-75 opacity-0 pointer-events-none'
				}`}
			>
				{/* Header */}
				<div className="flex justify-between items-center p-4 bg-green-600">
					<div className="flex items-center gap-3">
						<ChatbotIcons />
						<h2 className="text-white font-semibold text-lg">
							KhangThienAnBot
						</h2>
					</div>
					<button
						onClick={() => showChatbot(false)}
						className="text-white hover:bg-green-700 p-2 rounded-full"
					>
						<IoClose size={20} />
					</button>
				</div>

				{/* Body */}
				<div
					ref={chatbodyRef}
					className="h-[460px] overflow-y-auto px-6 py-4 flex flex-col gap-5 mb-20 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300"
				>
					<div className="flex items-end gap-3">
						<ChatbotIcons />
						<p className="bg-green-100 text-base px-4 py-3 rounded-xl">
							Xin chào,
							<br />
							Tôi có thể giúp gì cho bạn?
						</p>
					</div>

					{chatHistory.map((chat, index) => (
						<ChatMessage key={index} chat={chat} />
					))}
				</div>

				{/* Footer */}
				<div className="absolute bottom-0 w-full bg-white p-4">
					<ChatForm
						setChatHistory={setChatHistory}
						generateBotResponse={generateBotResponse}
						chatHistory={chatHistory}
					/>
				</div>
			</div>
		</>
	);
}
