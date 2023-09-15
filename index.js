const test = (string) => {
	return string === "test";
};

const isBoolean = (value) => {
	return typeof (value) === Boolean;
}

const test2 = (number) => {
	return number === 123;
};

module.exports = { test, test2, isBoolean };
