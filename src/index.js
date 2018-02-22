module.exports = function getZerosCount(number) {
	let answer= 0, index = 5;

	while(number > (5^index)){
		answer += parseInt(number/index);
		index *= 5;
	}
	return answer;
}