// data-attribute_name = "attribute_value"
// A custom data attribute's name starts with the prefix 'data-', the rest of the name
    // should not contain any capital letters. The value is a string.
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}