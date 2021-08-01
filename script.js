const container       = document.querySelector(".container");
const balanceBox      = document.querySelector("#balance-value");
const teamScoreBox    = document.querySelector("#teamScore-value");
const btnShowLegends  = document.querySelector("#btn-show");
const btnHideLegends  = document.querySelector("#btn-hide");
const legendsBox      = document.querySelector(".roc-legends");
const resultsBox      = document.querySelector(".session-result");
const resultsIcon     = document.querySelector("#result-icon");
const teamRating      = document.querySelector(".team-rating");
const scoreBox        = document.querySelector(".session-score");
const warningBox      = document.querySelector(".warning");
const warningValue    = document.querySelector(".warning-value");


var wallet        = 0;
var cardValue     = 0;
var teamScore     = 0;
var sessionScore  = 0;
var gameOverState = false;
var clicked       = false;
var id            = 1;
var felixIsBuyed;
var maxIsBuyed;
var ghostIsBuyed;
var zingerIsBuyed;
var kirillIsBuyed;

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

function showLegends() {
    legendsBox.className = "roc-legends active";

    if (clicked) {
        legendsBox.className = "roc-legends";
        clicked = false;
    } else {
        clicked = true;
    }
}

function hideLegends() {
    legendsBox.className = "roc-legends";
    clicked = false;
}

function buyLegend(legend) {
    switch (legend) {
        case "felix":
            if (!felixIsBuyed) {
                if (wallet >= 10000) {
                    felixIsBuyed = true;
                    addLegend(legend);

                    wallet -= 10000;
                    balanceBox.innerHTML = `${wallet} cr.`;
                    document.querySelector(`.${legend}`).className = "legend felix buyed";
                } else {
                    warningValue.innerHTML = "Действие заблокировано: недостаточно кредитов";
                    warningBox.className   = "warning show";
                }
            } else {
                warningValue.innerHTML = "Действие заблокировано: легенда уже куплена";
                warningBox.className   = "warning show";
            }
            break;
        case "max":
            if (!maxIsBuyed) {
                if (wallet >= 9000) {
                    maxIsBuyed = true;
                    addLegend(legend);

                    wallet -= 9000;
                    balanceBox.innerHTML = `${wallet} cr.`;
                    document.querySelector(`.${legend}`).className = "legend max buyed";
                } else {
                    warningValue.innerHTML = "Действие заблокировано: недостаточно кредитов";
                    warningBox.className   = "warning show";
                }
            } else {
                warningValue.innerHTML = "Действие заблокировано: легенда уже куплена";
                warningBox.className   = "warning show";
            }
            break;
        case "ghost":
            if (!ghostIsBuyed) {
                if (wallet >= 8499) {
                    ghostIsBuyed = true;
                    addLegend(legend);

                    wallet -= 8499;
                    balanceBox.innerHTML = `${wallet} cr.`;
                    document.querySelector(`.${legend}`).className = "legend ghost buyed";
                } else {
                    warningValue.innerHTML = "Действие заблокировано: недостаточно кредитов";
                    warningBox.className   = "warning show";
                }
            } else {
                warningValue.innerHTML = "Действие заблокировано: легенда уже куплена";
                warningBox.className   = "warning show";
            }
            break;
        case "zinger":
            if (!zingerIsBuyed) {
                if (wallet >= 7500) {
                    zingerIsBuyed = true;
                    addLegend(legend);

                    wallet -= 7500;
                    balanceBox.innerHTML = `${wallet} cr.`;
                    document.querySelector(`.${legend}`).className = "legend zinger buyed";
                } else {
                    warningValue.innerHTML = "Действие заблокировано: недостаточно кредитов";
                    warningBox.className   = "warning show";
                }
            } else {
                warningValue.innerHTML = "Действие заблокировано: легенда уже куплена";
                warningBox.className   = "warning show";
            }
            break;
        case "kirill":
            if (!kirillIsBuyed) {
                if (wallet >= 2500) {
                    kirillIsBuyed = true;
                    addLegend(legend);

                    wallet -= 2500;
                    balanceBox.innerHTML = `${wallet} cr.`;
                    document.querySelector(`.${legend}`).className = "legend kirill buyed";
                } else {
                    warningValue.innerHTML = "Действие заблокировано: недостаточно кредитов";
                    warningBox.className   = "warning show";
                }
            } else {
                warningValue.innerHTML = "Действие заблокировано: легенда уже куплена";
                warningBox.className   = "warning show";
            }
            break;
    }
}

function addLegend(legend) {
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
    var qoute                = document.createElement("div");
    var logo                 = document.createElement("div");
    var button               = document.createElement("div");

    // присваиваем элементам классы
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
    qoute.className                  = "quote";
    logo.className                   = "logo";
    button.className                 = "btn-wrapper";

    // создаём тег с изображениям пилота
    var AvatarNode = "<img src='img/driverGT.png' alt='avatar'>";

    switch (legend) {
        case "felix":
            card.className = "driver-card felix";

            nameNode             = "Феликс";
            surnameNode          = "Домбровский";
            ageNode              = "Возраст: 26 лет";
            teamNode             = "Monster Energy Crew";
            countryNode          = "Russia";
            gameNode             = "GranTurismo";
            racingExperienceNode = "Гоночный опыт: 4 года";
            qouteNode            = "&quot;Я скорость&quot;";
            ratingNode           = "300";
            flagNode             = `<img src='img/flag${countryNode}.png' alt='flag'>`;
            logoNode             = `<img src='img/${gameNode}_logo.png' alt='${gameNode} logo'>`;
            buttonNode = `<button class='btn'>Подробнее</button>`;

            avatar.innerHTML               = AvatarNode;
            ratingSpan.innerHTML           = "Рейтинг";
            ratingValue.innerHTML          = ratingNode;
            flag.innerHTML                 = flagNode;
            nameSpan.innerHTML             = nameNode;
            surnameSpan.innerHTML          = surnameNode;
            team.innerHTML                 = teamNode;
            ageSpan.innerHTML              = ageNode;
            racingExperienceSpan.innerHTML = racingExperienceNode;
            qoute.innerHTML                = qouteNode;
            logo.innerHTML                 = logoNode;
            button.innerHTML               = buttonNode;

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

            cardContent.appendChild(driverName);
            cardContent.appendChild(info);
            cardContent.appendChild(qoute);
            cardContent.appendChild(button);

            card.appendChild(avatar);
            card.appendChild(rating);
            card.appendChild(logo);
            card.appendChild(cardContent);

            container.prepend(card);
            
            sessionScore += 300;
            teamScore++;
            teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
            break;
        case "max":
            card.className = "driver-card max";

            nameNode             = "Максим";
            surnameNode          = "Гавриленко";
            ageNode              = "Возраст: 20 лет";
            teamNode             = "Gays Racing";
            countryNode          = "Russia";
            gameNode             = "GranTurismo";
            racingExperienceNode = "Гоночный опыт: 5 лет";
            qouteNode            = "&quot;dungeon master&quot;";
            ratingNode           = "280";
            flagNode             = `<img src='img/flag${countryNode}.png' alt='flag'>`;
            logoNode             = `<img src='img/${gameNode}_logo.png' alt='${gameNode} logo'>`;
            buttonNode = `<button class='btn'>Подробнее</button>`;

            avatar.innerHTML               = AvatarNode;
            ratingSpan.innerHTML           = "Рейтинг";
            ratingValue.innerHTML          = ratingNode;
            flag.innerHTML                 = flagNode;
            nameSpan.innerHTML             = nameNode;
            surnameSpan.innerHTML          = surnameNode;
            team.innerHTML                 = teamNode;
            ageSpan.innerHTML              = ageNode;
            racingExperienceSpan.innerHTML = racingExperienceNode;
            qoute.innerHTML                = qouteNode;
            logo.innerHTML                 = logoNode;
            button.innerHTML               = buttonNode;

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

            cardContent.appendChild(driverName);
            cardContent.appendChild(info);
            cardContent.appendChild(qoute);
            cardContent.appendChild(button);

            card.appendChild(avatar);
            card.appendChild(rating);
            card.appendChild(logo);
            card.appendChild(cardContent);

            container.prepend(card);
            
            sessionScore += 300;
            teamScore++;
            teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
            break;
        case "ghost":
            card.className = "driver-card ghost";

            nameNode             = "Даниил";
            surnameNode          = "Беренцев";
            ageNode              = "Возраст: 27 лет";
            teamNode             = "Monster Energy Crew";
            countryNode          = "Russia";
            gameNode             = "GranTurismo";
            racingExperienceNode = "Гоночный опыт: меньше года";
            qouteNode            = "&quot;Обогнал Арсена&quot;";
            ratingNode           = "269";
            flagNode             = `<img src='img/flag${countryNode}.png' alt='flag'>`;
            logoNode             = `<img src='img/${gameNode}_logo.png' alt='${gameNode} logo'>`;
            buttonNode = `<button class='btn'>Подробнее</button>`;

            avatar.innerHTML               = AvatarNode;
            ratingSpan.innerHTML           = "Рейтинг";
            ratingValue.innerHTML          = ratingNode;
            flag.innerHTML                 = flagNode;
            nameSpan.innerHTML             = nameNode;
            surnameSpan.innerHTML          = surnameNode;
            team.innerHTML                 = teamNode;
            ageSpan.innerHTML              = ageNode;
            racingExperienceSpan.innerHTML = racingExperienceNode;
            qoute.innerHTML                = qouteNode;
            logo.innerHTML                 = logoNode;
            button.innerHTML               = buttonNode;

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

            cardContent.appendChild(driverName);
            cardContent.appendChild(info);
            cardContent.appendChild(qoute);
            cardContent.appendChild(button);

            card.appendChild(avatar);
            card.appendChild(rating);
            card.appendChild(logo);
            card.appendChild(cardContent);

            container.prepend(card);
            
            sessionScore += 300;
            teamScore++;
            teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
            break;
        case "zinger":
            card.className = "driver-card zinger";

            nameNode             = "Александр";
            surnameNode          = "Безрядин";
            ageNode              = "Возраст: 38 лет";
            teamNode             = "LockUp Racing";
            countryNode          = "Russia";
            gameNode             = "GranTurismo";
            racingExperienceNode = "Гоночный опыт: много";
            qouteNode            = "&quot;Легенда во плоти&quot;";
            ratingNode           = "250";
            flagNode             = `<img src='img/flag${countryNode}.png' alt='flag'>`;
            logoNode             = `<img src='img/${gameNode}_logo.png' alt='${gameNode} logo'>`;
            buttonNode = `<button class='btn'>Подробнее</button>`;

            avatar.innerHTML               = AvatarNode;
            ratingSpan.innerHTML           = "Рейтинг";
            ratingValue.innerHTML          = ratingNode;
            flag.innerHTML                 = flagNode;
            nameSpan.innerHTML             = nameNode;
            surnameSpan.innerHTML          = surnameNode;
            team.innerHTML                 = teamNode;
            ageSpan.innerHTML              = ageNode;
            racingExperienceSpan.innerHTML = racingExperienceNode;
            qoute.innerHTML                = qouteNode;
            logo.innerHTML                 = logoNode;
            button.innerHTML               = buttonNode;

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

            cardContent.appendChild(driverName);
            cardContent.appendChild(info);
            cardContent.appendChild(qoute);
            cardContent.appendChild(button);

            card.appendChild(avatar);
            card.appendChild(rating);
            card.appendChild(logo);
            card.appendChild(cardContent);

            container.prepend(card);
            
            sessionScore += 300;
            teamScore++;
            teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
            break;
        case "kirill":
            card.className = "driver-card kirill";

            nameNode             = "Кирилл";
            surnameNode          = "Чернецов";
            ageNode              = "Возраст: 19 лет";
            teamNode             = "Paralympic Racing Team";
            countryNode          = "Russia";
            gameNode             = "GranTurismo";
            racingExperienceNode = "Гоночный опыт: 6 лет";
            qouteNode            = "&quot;А кто это?&quot;";
            ratingNode           = "210";
            flagNode             = `<img src='img/flag${countryNode}.png' alt='flag'>`;
            logoNode             = `<img src='img/${gameNode}_logo.png' alt='${gameNode} logo'>`;
            buttonNode = `<button class='btn'>Подробнее</button>`;

            avatar.innerHTML               = AvatarNode;
            ratingSpan.innerHTML           = "Рейтинг";
            ratingValue.innerHTML          = ratingNode;
            flag.innerHTML                 = flagNode;
            nameSpan.innerHTML             = nameNode;
            surnameSpan.innerHTML          = surnameNode;
            team.innerHTML                 = teamNode;
            ageSpan.innerHTML              = ageNode;
            racingExperienceSpan.innerHTML = racingExperienceNode;
            qoute.innerHTML                = qouteNode;
            logo.innerHTML                 = logoNode;
            button.innerHTML               = buttonNode;

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

            cardContent.appendChild(driverName);
            cardContent.appendChild(info);
            cardContent.appendChild(qoute);
            cardContent.appendChild(button);

            card.appendChild(avatar);
            card.appendChild(rating);
            card.appendChild(logo);
            card.appendChild(cardContent);

            container.prepend(card);
            
            sessionScore += 300;
            teamScore++;
            teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
            break;
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
        return "-";
    }
    
}

function createDriverCard() {
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
    var button               = document.createElement("div");

    // присваиваем элементам классы
    card.className                   = "driver-card";
    card.id                          = `card-${id}`;
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
    button.className                 = "btn-wrapper";
    
    // создаём тег с изображениям пилота
    var AvatarNode = "<img src='img/driverGT.png' alt='avatar'>";

    switch (gameOverState) {
        case false:
            nameNode             = driver.getName();
            surnameNode          = driver.getSurname();
            ageNode              = driver.getAge();
            teamNode             = driver.getTeam();
            countryNode          = driver.getCountry();
            gameNode             = driver.getGame();
            racingExperienceNode = driver.getExperience(ageNode);
            podiumsNode          = driver.getPodiums(racingExperienceNode);
            winsNode             = driver.getWins(podiumsNode);
            ratingNode           = getRating(racingExperienceNode, podiumsNode, winsNode);
            flagNode             = `<img src='img/flag${countryNode}.png' alt='flag'>`;

            switch (true) {
                case ratingNode == "лох":
                    cardValue = 0;

                    logoNode  = `<img src='img/${gameNode}_logo.png' alt='${gameNode} logo'>`;

                    buttonNode = `<button class='btn' onclick='removeCard(${id}, 800)'>Убрать за 800 cr.</button>`;
                    break;
                case ratingNode > 150:
                    cardValue = ratingNode;

                    card.className = "driver-card rare";

                    logoNode = `<img src='img/${gameNode}_inverted_logo.png' alt='${gameNode} logo'>`;

                    buttonNode = `<button class='btn' onclick='sellCard(${id}, 1000)'>Обменять на 1000 cr.</button>`;
                    
                    sessionScore += ratingNode * 2;
                    break;
                default:
                    cardValue = ratingNode;

                    logoNode  = `<img src='img/${gameNode}_logo.png' alt='${gameNode} logo'>`;

                    buttonNode = `<button class='btn' onclick='removeCard(${id}, 300)'>Убрать за 300 cr.</button>`;

                    sessionScore += ratingNode;
                    break;
            }

            avatar.innerHTML               = AvatarNode;
            ratingSpan.innerHTML           = "Рейтинг";
            ratingValue.innerHTML          = ratingNode;
            flag.innerHTML                 = flagNode;
            nameSpan.innerHTML             = nameNode;
            surnameSpan.innerHTML          = surnameNode;
            team.innerHTML                 = teamNode;
            ageSpan.innerHTML              = `Возраст: ${ageNode} ${getLiteralYear(String(ageNode))}`;
            racingExperienceSpan.innerHTML = `Гоночный опыт: ${racingExperienceNode} ${getLiteralYear(String(racingExperienceNode))}`;
            podiumsSpan.innerHTML          = `Подиумов: ${podiumsNode}`;
            winsSpan.innerHTML             = `Побед : ${winsNode}`;
            logo.innerHTML                 = logoNode;
            button.innerHTML               = buttonNode;

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

            container.prepend(card);
            break;
        case true: 
            warningValue.innerHTML = "Действие заблокировано: завершите сессию";
            warningBox.className   = "warning show";
            break;         
    } 

    if (!gameOverState) {
        teamScore++;
        wallet += cardValue;
    };
    
    teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
    balanceBox.innerHTML   = `${wallet} cr.`;
    id++;

    gameOver(teamScore);
}

function removeCard(cardID, price) {
    switch (true) {
        case gameOverState:
            warningValue.innerHTML = "Действие заблокировано: завершите сессию";
            warningBox.className   = "warning show";
            break;
        case wallet > price:
            var removingCard = document.querySelector(`#card-${cardID}`);

            removingCard.parentNode.removeChild(removingCard);

            wallet -= price;
            teamScore -= 1;
            teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
            balanceBox.innerHTML   = `${wallet} cr.`;
            break;
        default:
            warningValue.innerHTML = "Действие заблокировано: недостаточно кредитов";
            warningBox.className   = "warning show";
            break;
    }
}

function sellCard(cardID, price) {
    if (!gameOverState) {
        var sellingingCard = document.querySelector(`#card-${cardID}`);

        sellingingCard.parentNode.removeChild(sellingingCard);

        wallet += price;
        teamScore -= 1;
        teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
        balanceBox.innerHTML   = `${wallet} cr.`;
    } else {
        warningValue.innerHTML = "Действие заблокировано: завершите сессию";
        warningBox.className   = "warning show";
    }
}

function showResults() {
    resultsIcon.setAttribute("src", "img/badge.svg");
        
    switch (true) {
        case sessionScore >= 3000:
            resultsIcon.setAttribute("src", "img/trophy.svg");
            teamRating.innerHTML = "&quot;РОЧ DREAM TEAM&quot;";
            break;
        case sessionScore >= 2800:
            teamRating.innerHTML = "&quot;Арсена Карданова на них нет&quot;";
            break;
        case sessionScore >= 2500:
            teamRating.innerHTML = "&quot;Ты всё ещё здесь?&quot;";
            break;
        case sessionScore >= 2200:
            teamRating.innerHTML = "&quot;Дамаксис не догонит в &male;ass&male;&quot;";
            break;
        case sessionScore >= 1900:
            teamRating.innerHTML = "&quot;Ликёр с ними бы не справился&quot;";
            break;
        case sessionScore >= 1600:
            teamRating.innerHTML = "&quot;Они как из палаты сбежали?&quot;";
            break;
        case sessionScore >= 1300:
            teamRating.innerHTML = "&quot;GT-MASTERS League&quot;";
            break;
        case sessionScore >= 1000:
            teamRating.innerHTML = "&quot;Непосредственная посредственность&quot;";
            break;
        case sessionScore < 1000:
            teamRating.innerHTML = "&quot;Достойны Виел ту виела&quot;";
            break;
    }

    scoreBox.innerHTML = `Счёт: ${sessionScore} очков`;
    resultsBox.className = "session-result show";
    teamScoreBox.removeAttribute("onclick" , "showResults()");
    sessionScore = 0;
}

function closeWarning() {
    warningBox.className = "warning";
}

function newGame() {
    var driverCards = document.getElementsByClassName("driver-card");

    while(driverCards.length > 0) {
        driverCards[0].parentNode.removeChild(driverCards[0]);
    };

    teamScore = 0;

    if (felixIsBuyed) {
        addLegend("felix");
    }

    if (maxIsBuyed) {
        addLegend("max");
    }

    if (ghostIsBuyed) {
        addLegend("ghost");
    }

    if (zingerIsBuyed) {
        addLegend("zinger");
    }

    if (kirillIsBuyed) {
        addLegend("kirill");
    }

    teamScoreBox.className = "value";
    teamScoreBox.innerHTML = `${teamScore} из 14 пилотов`;
    resultsBox.className = "session-result";

    gameOverState = false;
}

function gameOver(value) {
    if(value == 14) {
        gameOverState = true;

        teamScoreBox.setAttribute("onclick" , "showResults()");
        teamScoreBox.className = "value game-over";
        teamScoreBox.innerHTML = "Продолжить";
    }
}
