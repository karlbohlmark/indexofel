module.exports = indexOfElement

function indexOfElement (el) {
	var  i = 0;
    while ((el = el.previousElementSibling) != null) ++i;
    return i;
}