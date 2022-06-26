const Base62 = {
	characters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
					'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
					'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
					'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	to(inputRaw){
		var input = BigInt(inputRaw);
		var output = "";
		while(input > 0){
			var current = this.characters[input % 62n];
			output = current + output;
			input = input / 62n;
		}
		return output;
	},
	from(input){
		var output = BigInt(0);
		var power = 0n;
		while(input.length > 0){
			var current = BigInt(this.characters.indexOf(input.charAt(input.length - 1)));
			output += current * (62n ** power);
			power += 1n;
			input = input.substr(0, input.length - 1);
		}
		return output.toString();
	}
}
