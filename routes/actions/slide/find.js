const { Slide } = require('../../../model/Slide');

module.exports = async (req, res) => {
	// console.log('ok')
	// 查找
	let slides = await Slide.find();
	// 响应
	res.send(slides);
};