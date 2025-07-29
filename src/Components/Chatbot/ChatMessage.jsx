import React from 'react';
import PropTypes from 'prop-types';
import { ChatbotIcons } from './ChatbotIcon';

/**
 * @typedef {Object} ChatItem
 * @property {'user'|'model'} role
 * @property {string} text
 * @property {boolean} [isError]
 * @property {boolean} [hideInChat]
 */

export const ChatMessage = ({ chat }) => {
	if (chat.hideInChat) return null;

	const isBot = chat.role === 'model';
	const isError = chat.isError;

	return (
		<div className={`flex gap-3 items-end ${isBot ? '' : 'flex-col items-end'}`}>
			{isBot && <ChatbotIcons />}
			<p
				className={`px-4 py-3 max-w-[75%] text-base rounded-xl whitespace-pre-line ${
					isError
						? 'text-red-600'
						: isBot
						? 'bg-green-100 text-black'
						: 'bg-green-600 text-white'
				}`}
			>
				{chat.text}
			</p>
		</div>
	);
};

ChatMessage.propTypes = {
	chat: PropTypes.shape({
		role: PropTypes.oneOf(['user', 'model']).isRequired,
		text: PropTypes.string.isRequired,
		isError: PropTypes.bool,
		hideInChat: PropTypes.bool,
	}).isRequired,
};
