
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
};

    const initDate = personGenerator.generateRandomDate();
    document.getElementById('birthYearOutput').innerText = initDate;

    const surname = personGenerator.randomSurname();
    document.getElementById('surnameOutput').innerText = surname;

    const gender = personGenerator.randomGender();
    document.getElementById('genderOutput').innerText = gender;
