function Algorithm(length = 8, upperCase = true, lowerCase = true, numbers = true, symbols = true) {
	let characters = '';
	if (upperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (lowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
	if (numbers) characters += '0123456789';
	if (symbols) characters += '!@#$%&*?.';
	if (characters.length === 0) throw new Error('At least one character type must be selected.');

	let password = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}
	return password;
}

export default Algorithm;
