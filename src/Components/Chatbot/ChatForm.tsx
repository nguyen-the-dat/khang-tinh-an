import React, { useRef } from 'react';
import { MdArrowUpward } from 'react-icons/md';

interface ChatItem {
	role: 'user' | 'model';
	text: string;
	isError?: boolean;
	hideInChat?: boolean;
}

interface ChatFormProps {
	setChatHistory: React.Dispatch<React.SetStateAction<ChatItem[]>>;
	generateBotResponse: (history: ChatItem[]) => Promise<void>;
	chatHistory: ChatItem[];
}

export const ChatForm: React.FC<ChatFormProps> = ({
	setChatHistory,
	generateBotResponse,
	chatHistory,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const userMessage = inputRef.current?.value.trim();
		if (!userMessage) return;

		if (inputRef.current) inputRef.current.value = '';

		// Add user's message
		setChatHistory((history) => [...history, { role: 'user', text: userMessage }]);

		// Show "Thinking..." then send prompt
		setTimeout(() => {
			setChatHistory((history) => [
				...history,
				{ role: 'model', text: 'Thinking...' },
			]);

			generateBotResponse([
				...chatHistory,
				{
					role: 'user',
					text: `Using the provided details, please answer briefly: ${userMessage}`,
				},
			]);
		}, 600);
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			className="flex items-center bg-white border rounded-full focus-within:outline outline-2 outline-green-600 px-2"
		>
			<input
				ref={inputRef}
				type="text"
				required
				placeholder="Message..."
				className="w-full h-[47px] px-4 text-base bg-transparent outline-none"
			/>
			<button
				type="submit"
				className="w-9 h-9 bg-green-600 text-white text-base rounded-full flex items-center justify-center"
			>
				<MdArrowUpward size={20} />
			</button>
		</form>
	);
};
