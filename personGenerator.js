const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstWomanNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Наталья",
            "id_3": "Ирина",
            "id_4": "Оксана",
            "id_5": "Надежда",
            "id_6": "Нина",
            "id_7": "Маруся",
            "id_8": "Дарья",
            "id_9": "Евгения",
            "id_10": "Анна"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        if(randomValue = randomFirstName) {
            return GENDER_MALE
        } else {
            return GENDER_FEMALE
        }
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
       
    generateRandomDate: function generateRandomDate(start = 1955, end = 2020) { 
        return (Math.round(start + Math.random() * (end - start))); 
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
   
    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },

    randomFirstWomanName: function() {

        return this.randomValue(this.firstWomanNameMaleJson);

    },

     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },


    getPerson: function () {
        this.person = {};
        //this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        //this.person.firstWomanName = this.randomFirstWomanName();
        return this.person;
    }
};

