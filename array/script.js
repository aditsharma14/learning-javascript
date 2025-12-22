const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

breakfastMenu.forEach((item, index) => {
    document.getElementById('breakfastMenuItems').innerHTML += `<p>${index + 1}: ${item}</p>`;
});

mainCourseMenu.forEach((item, index) => {
    document.getElementById('maincourseMenuItems').innerHTML += `<p>${index + 1}: ${item}</p>`;
});

dessertMenu.forEach((item, index) => {
    document.getElementById('dessertMenuItems').innerHTML += `<p>${index + 1}: ${item}</p>`;
});

document.getElementById('breakfastTotalItems').innerText = `Total Breakfast Items: ${breakfastMenu.length}`;
document.getElementById('maincourseTotalItems').innerText = `Total Main Course Items: ${mainCourseMenu.length}`;
document.getElementById('dessertTotalItems').innerText = `Total Dessert Items: ${dessertMenu.length}`;