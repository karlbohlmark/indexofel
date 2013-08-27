module.exports = indexOfElement

function indexOfElement (el) {
	var  i = 0;
    while ((el = el.previousSibling) != null) ++i;
    return i;
}