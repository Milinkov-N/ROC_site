const msgBox = document.querySelector(".msg");

var driver = {
    name: ["Никита",
           "Алексей",
           "Егор",
           "Александр",
           "Феликс",
           "Данил",
           "Сергей",
           "Арсен",
           "Михаил",
           "Вячеслав",
           "Максим",
           "Иван",
           "Антон",
           "Герман",
           "Константин",
           "Амир"],
    surname: ["Милиньков",
              "Домбровский",
              "Ликоренко",
              "Мартиросян",
              "Кирпун",
              "Гавриленко",
              "Сабиров",
              "Ахметов",
              "Кадусов",
              "Кравец",
              "Иванов",
              "Митяев",
              "Демченко",
              "Петров",
              "Плыгун",
              "Зингерштольц"],
    team: ["LockUp Racing",
           "Monster Energy Crew",
           "Monster Energy Syndicate",
           "Rockstar Energy Team",
           "Razebessia Racing",
           "Cringe Racing",
           "Rays of Sabotage",
           "Gays Racing",
           "Alliance Racing Team",
           "LockUp-Syndicate Racing",
           "Burn LockUp Racing",
           "Shiny Rays",
           "Red Bull Racing",
           "MOTUL NRG Motorsport",
           "Trailhead x ILP Team",
           "Avalanche Racing",
           "Quantum explosion",
           "Quantum Racing",
           "Fail Empire",
           "GuidoAndLuigi"],
    country: ["Russia",
              "Germany",
              "England",
              "USA",
              "Italy",
              "France",
              "Canada",
              "Brazil"],
    game: ["GranTurismo",
           "AssettoCorsa",
           "F12020"],
    getName: function () {
        var getRandomNumber = Math.floor(Math.random() * this.name.length);
        // console.log(getRandomNumber);

        return this.name[getRandomNumber];
    },
    getSurname: function () {
        var getRandomNumber = Math.floor(Math.random() * this.surname.length);
        // console.log(getRandomNumber);

        return this.surname[getRandomNumber];
    },
    getTeam:  function() {
        var getRandomNumber = Math.floor(Math.random() * this.team.length);

        return this.team[getRandomNumber];
    },
    getCountry:  function() {
        var getRandomNumber = Math.floor(Math.random() * this.country.length);

        return this.country[getRandomNumber];
    },
    getGame: function() {
        var getRandomNumber = Math.floor(Math.random() * this.game.length);

        return this.game[getRandomNumber];
    },
    getAge: function () {
        var age = Math.floor(Math.random() * 45);

        if(age < 16) {
            age = 16;
        }

        return age;
    },
    getExperience: function (age) {
        var racingExperience = Math.floor(Math.random() * (age - 12));

        return racingExperience;
    },
    getPodiums: function (racingExperience) {
        var podiums = Math.floor(Math.random() * (racingExperience * 52));

        return podiums;
    },
    getWins: function (podiums) {
        var wins = Math.floor(Math.random() * podiums);

        return wins;
    }
}

function getLiteralYear(value) {
    if(value.length > 1) {
        if(value.charAt() == 1) {
            return "лет";
        } else {
            lastDigit = value.charAt(value.length - 1);
            switch (lastDigit) {
                case "1":
                    output =  "год";
                    break;
                case "2":
                    output =  "года";
                    break;
                case "3":
                    output =  "года";
                    break;
                case "4":
                    output =  "года";
                    break;
                default:
                    output = "лет";
                    break;
            }
            return output;
        }      
    } else {
        switch (value) {
            case "1":
                output =  "год";
                break;
            case "2":
                output =  "года";
                break;
            case "3":
                output =  "года";
                break;
            case "4":
                output =  "года";
                break;
            default:
                output = "лет";
                break;
        }
        return output;
    }   
}

function getRating(experience, podiums, wins) {
    if(experience != 0 && podiums != 0 && wins != 0) {
        expRate = (podiums / (experience * 52)) * 100;

        winRate = (wins / podiums) * 100;

        output = expRate + winRate;

        return Math.floor(output);
    } else {
        return "лох";
    }
    
}

function createDriverCard(method) {
    // создаём элементы разметки карточки
    var card                 = document.createElement("div");
    var avatar               = document.createElement("div");
    var rating               = document.createElement("div");
    var ratingSpan           = document.createElement("span");
    var ratingValue          = document.createElement("span");
    var cardContent          = document.createElement("div");
    var driverName           = document.createElement("div");
    var firstRow             = document.createElement("div");
    var flag                 = document.createElement("div");
    var nameSpan             = document.createElement("span");
    var secondRow            = document.createElement("div");
    var surnameSpan          = document.createElement("span");
    var team                 = document.createElement("span");
    var info                 = document.createElement("div");
    var ageSpan              = document.createElement("span");
    var racingExperienceSpan = document.createElement("span");
    var podiumsSpan          = document.createElement("span");
    var winsSpan             = document.createElement("span");
    var logo                 = document.createElement("div");
    var button               = document.createElement("button");

    // присваиваем элементам классы
    card.className                   = "driver-card";
    avatar.className                 = "avatar";
    rating.className                 = "rating";
    ratingValue.className            = "value";
    cardContent.className            = "content";
    driverName.className             = "driver-name";
    firstRow.className               = "first-row";
    flag.className                   = "flag";
    nameSpan.className               = "name";
    secondRow.className              = "second-row";
    surnameSpan.className            = "surname";
    team.className                   = "team";
    info.className                   = "info";
    ageSpan.className                = "age";
    racingExperienceSpan.className   = "racing-experience";
    podiumsSpan.className            = "podiums";
    winsSpan.className               = "wins";
    logo.className                   = "logo";
    button.className                 = "btn";
    
    // создаём теги с изображениями
    var AvatarNode     = "<img src='img/driverGT.png' alt='avatar'>";
    // var flagNode       = "<img src='img/flagRussia.png' alt='flag'>";
    // var gtLogoNode     = "<img src='img/Gran_turismo_logo.png' alt='gt logo'>";
    // var f1LogoNode     = "<img src='img/f1-2020-logo-1.png' alt='f1 logo'>";
    // var asettoLogoNode = "<img src='img/Assetto_Corsa_Competizione_Logo.png' alt='f1 logo'>";

    switch (method) {
        case "random":
            nameNode             = driver.getName();
            surnameNode          = driver.getSurname();
            ageNode              = driver.getAge();
            teamNode             = driver.getTeam();
            countryNode          = driver.getCountry();
            gameNode             = driver.getGame();
            racingExperienceNode = driver.getExperience(ageNode);
            podiumsNode          = driver.getPodiums(racingExperienceNode);
            winsNode             = driver.getWins(podiumsNode);
            flagNode             = `<img src='img/flag${countryNode}.png' alt='flag'>`;
            logoNode             = `<img src='img/${gameNode}_logo.png' alt='${gameNode} logo'>`;

            avatar.innerHTML               = AvatarNode;
            ratingSpan.innerHTML           = "Рейтинг";
            ratingValue.innerHTML          = getRating(racingExperienceNode, podiumsNode, winsNode);
            flag.innerHTML                 = flagNode;
            nameSpan.innerHTML             = nameNode;
            surnameSpan.innerHTML          = surnameNode;
            team.innerHTML                 = teamNode;
            ageSpan.innerHTML              = `Возраст: ${ageNode} ${getLiteralYear(String(ageNode))}`;
            racingExperienceSpan.innerHTML = `Гоночный опыт: ${racingExperienceNode} ${getLiteralYear(String(racingExperienceNode))}`;
            podiumsSpan.innerHTML          = `Подиумов: ${podiumsNode}`;
            winsSpan.innerHTML             = `Побед : ${winsNode}`;
            logo.innerHTML                 = logoNode;
            button.innerHTML               = "Подробнее";

            // добавляем все созданные элементы друг в друга
            rating.appendChild(ratingSpan);
            rating.appendChild(ratingValue);

            firstRow.appendChild(flag);
            firstRow.appendChild(nameSpan);

            secondRow.appendChild(surnameSpan);
            secondRow.appendChild(team);

            driverName.appendChild(firstRow);
            driverName.appendChild(secondRow);

            info.appendChild(ageSpan);
            info.appendChild(racingExperienceSpan);
            info.appendChild(podiumsSpan);
            info.appendChild(winsSpan);

            cardContent.appendChild(driverName);
            cardContent.appendChild(info);
            cardContent.appendChild(button);

            card.appendChild(avatar);
            card.appendChild(rating);
            card.appendChild(logo);
            card.appendChild(cardContent);

            msgBox.prepend(card);
            break;
        case "custom":
            // получаем входные данные
            var fullname         = document.getElementsByTagName("input")[0].value;
            var age              = document.getElementsByTagName("input")[1].value;
            var racingExperience = document.getElementsByTagName("input")[2].value;

            var gap = fullname.search(" ");

            var surname = fullname.slice(0, gap);
            var name    = fullname.slice(gap + 1, fullname.length);

            if(name != "" && surname != "" && age != "" && racingExperience != "") {
                // вставляем значения в элементы
                avatar.innerHTML               = AvatarNode;
                ratingSpan.innerHTML           = "Рейтинг";
                ratingValue.innerHTML          = getRating(age, racingExperience);
                flag.innerHTML                 = flagNode;
                nameSpan.innerHTML             = name;
                surnameSpan.innerHTML          = surname;
                team.innerHTML                 = "LockUp Racing";
                ageSpan.innerHTML              = `Возраст: ${age} ${getLiteralYear(age)}`;
                racingExperienceSpan.innerHTML = `Гоночный опыт: ${racingExperience} ${getLiteralYear(racingExperience)}`;
                podiumsSpan.innerHTML          = "Подиумов: 12";
                winsSpan.innerHTML             = "Побед : 6";
                logo.innerHTML                 = asettoLogoNode;
                button.innerHTML               = "Перейти к профилю";

                // добавляем все созданные элементы друг в друга
                rating.appendChild(ratingSpan);
                rating.appendChild(ratingValue);

                firstRow.appendChild(flag);
                firstRow.appendChild(nameSpan);

                secondRow.appendChild(surnameSpan);
                secondRow.appendChild(team);

                driverName.appendChild(firstRow);
                driverName.appendChild(secondRow);

                info.appendChild(ageSpan);
                info.appendChild(racingExperienceSpan);
                info.appendChild(podiumsSpan);
                info.appendChild(winsSpan);

                cardContent.appendChild(driverName);
                cardContent.appendChild(info);
                cardContent.appendChild(button);

                card.appendChild(avatar);
                card.appendChild(rating);
                card.appendChild(logo);
                card.appendChild(cardContent);

                msgBox.prepend(card);

                // обнуляем содержимое входных полей
                document.getElementsByTagName("input")[0].value = null;
                document.getElementsByTagName("input")[1].value = null;
                document.getElementsByTagName("input")[2].value = null;
            } else {
                alert("Введены не все данные");
            } 
            break;
    }  
}

// createDriverCard(driver.name, driver.surname, driver.age, driver.racingExperience);

// for(var i in driver) {
//     document.write(driver[i] + "<br>");
// }

// driver.writeDriverCard();

// let writeBoldDriverName = htmlTags.wrap(driver.name, "b") + htmlTags.br;
// let writeDriverSurname = htmlTags.wrap(driver.surname, "div");

// document.write(writeBoldDriverName);
// document.write(writeDriverSurname);