function updateCircle(id, newRating, ratingId) {
    const circle = document.getElementById(id);
    const ratingValue = document.getElementById(ratingId);

    const offset = 628 - (newRating / 5) * 628;
    circle.style.strokeDashoffset = offset;
    ratingValue.textContent = newRating;
}


updateCircle('circle1', 4, 'ratingValue1');
updateCircle('circle2', 3, 'ratingValue2');
updateCircle('circle3', 5, 'ratingValue3');
updateCircle('circle4', 2.5,'ratingValue4');
updateCircle('circle5', 1, 'ratingValue5');
updateCircle('circle6', 2, 'ratingValue6');



