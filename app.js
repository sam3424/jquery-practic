$(document).ready(() => {
    console.log('jquery is working');
    const startingElement =$("#starting-point");
    console.log(startingElement);
    const siblingElement =$("<div></div>");
    siblingElement.text("this is the next part");
    //appends the new div to starting element
    startingElement.after(siblingElement);

const favoriteFood = $('#favorite-foods');
console.log('favoriteFood')
favoriteFood.css('background-color',' purple')

const  favorite= [
        {food: 'pizza', color: 'green'},
        {food: 'falafel', color: 'yellow'},
        {food: 'bolani', color: 'red'},
        {food: 'hot dog', color: 'orange'}
    ];
    favorite.forEach(obj =>  {
    let fovColors=$("<div></div>")
    .text(obj.food)
    fovColors.css('background-color',obj.color)
    favoriteFood.after(fovColors);


        })

});
