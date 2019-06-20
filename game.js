function rpgGame() {
    //char select sheet
    var fighter = { attack: 5, counterAttack: 0, hP: 200 };
    var mage = { attack: 10, counterAttack: 10, hP: 100 };
    var rogue = { attack: 5, counterAttack: 20, hP: 150 };
    var monk = { attack: 2, counterAttack: 25, hP: 400 };

    //variables for game
    var startGame = false;
    var enemySelected = false;
    var playerChar = {};
    var computerChar = {};
    var baseAttack = 0
    //~~~~~~~~~~~~~~~~~~

    $(".char").click(charactorSelect);
    $(".atk").click(atkEnemy);


    function atkEnemy() {
        if (playerChar.hP > 0 && enemySelected === true) {
            $("#damage").empty();
            console.log(computerChar.hP);
            console.log(playerChar.attack)
            computerChar.hP = computerChar.hP - playerChar.attack;
            playerChar.hP = playerChar.hP - computerChar.counterAttack;
            $("#playerhP").empty();
            $("#playerhP").append("HP: " + playerChar.hP);
            $("#computerhP").empty();
            $("#computerhP").append("HP: " + computerChar.hP);
            $("#damage").append("You did " + playerChar.attack + " damage to the enemy. He counter attacked for " + computerChar.counterAttack + " damage.");

            console.log(playerChar.hP)
            playerChar.attack = playerChar.attack + baseAttack;
            if (playerChar.hP < 1) {
                $("#result").append("You LOSE");
            }
            else if (computerChar.hP < 1) {
                $("#result").append("You WIN");
                $("#Computer").empty();
                $("#computerhP").empty();
                $("#computerImg").attr("src", "");

                enemySelected = false;
            }
        };
    }






    function charactorSelect() {
        if (startGame === false) {
            selecctedChar = $(this).text();
            $("#Player").append(selecctedChar);
            startGame = true;
            selAvatar();
            $(this).closest('button').remove();
        }
        else if (enemySelected === false) {
            selecctedChar = $(this).text();
            $("#Computer").append(selecctedChar);
            selEnemy();
            enemySelected = true;
            $("#result").empty();
            $(this).closest('button').remove();
        }
        baseAttack = playerChar.attack;

    };
    function selAvatar() {
        if (selecctedChar == "Fighter") {
            playerChar = fighter;
            $("#playerImg").attr("src", "assets/images/fighter/player.gif");
        }
        else if (selecctedChar == "Mage") {
            playerChar = mage;
            $("#playerImg").attr("src", "assets/images/mage/player.gif");

        }
        else if (selecctedChar == "Rogue") {
            playerChar = rogue;
            $("#playerImg").attr("src", "assets/images/rogue/player.gif");

        }
        else if (selecctedChar == "Monk") {
            $("#playerImg").attr("src", "assets/images/monk/player.gif");

            playerChar = monk;
        }
        $("#playerhP").append("HP: " + playerChar.hP);

    }
    function selEnemy() {
        if (selecctedChar == "Fighter") {
            computerChar = fighter;
            $("#computerImg").attr("src", "assets/images/fighter/computer.gif");

        }
        else if (selecctedChar == "Mage") {
            computerChar = mage;
            $("#computerImg").attr("src", "assets/images/mage/computer.gif");

        }
        else if (selecctedChar == "Rogue") {
            computerChar = rogue;
            $("#computerImg").attr("src", "assets/images/rogue/computer.gif");

        }
        else if (selecctedChar == "Monk") {
            computerChar = monk;
            $("#computerImg").attr("src", "assets/images/monk/computer.gif");

        }
        $("#computerhP").append("HP: " + computerChar.hP);

    }
}
