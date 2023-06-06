$(document).ready(() => {
    console.log('jquery is working');
    const startingElement =$("#starting-point");
    console.log(startingElement);
    const siblingElement =$("<div></div>");
    siblingElement.text("this is the next part");
    //appends the new div to starting element
    startingElement.after(siblingElement);

});
