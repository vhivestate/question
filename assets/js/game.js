function game() {
    window.alert("you've been hacked, LOL");
    window.alert("LOL jk");
    window.alert("however, I just have one question for you...");
    var question = window.confirm('Will you be my valentine???? ;)' );

    if ( question === false ) {
        var answer = window.confirm('Please');
        
        if (answer === false ){
          var answer2 = window.confirm('Please');

          if ( answer2 === true ) {
            window.alert('💥AYEEE YEAR NO.2 OF BEING VALENTINES W MY NO.1 💘💥')
          }

          if (answer2 === false){
            var answer3 = window.confirm('PLEASE');

            if ( answer3 === true ) {
              window.alert('💥AYEEE YEAR NO.2 OF BEING VALENTINES W MY NO.1 💘💥')
            }

          if (answer3 === false) {
            window.alert('fuck off lol');
          }
          }
        } 

        if ( answer === true ) {
          window.alert('💥AYEEE YEAR NO.2 OF BEING VALENTINES W MY NO.1 💘💥')
        }
    }

    if ( question === true ) {
      window.alert('💥AYEEE YEAR NO.2 OF BEING VALENTINES W MY NO.1 💘💥')
    }
  }

  game()