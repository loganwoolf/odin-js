const palindromes = function (str) {

   function condense(str) {
		const regex = /\W/;
		let condensed = "";
		for (let i of str) {
			if (!regex.test(i)) {
				condensed += i;
			}
		}
		return condensed.toLowerCase();
	}
	function reverse(str) {
		let reversed = "";
		for (let i = str.length - 1; i >= 0; i--) {
			reversed += str.slice(i, i + 1);
		}
		return reversed;
	}

   
	let forward = condense(str);
	let backward = reverse(forward);
	if (backward === forward) {
		return true;
	}
	return false;
};

module.exports = palindromes;
