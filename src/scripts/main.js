(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    var jqxhr = $.getJSON( "https://data.opendatasoft.com/api/records/1.0/search/?dataset=population-francaise-communes-2014%40public&facet=nom_de_la_region&facet=metropole", function(result) {

      console.log(result);
      var champion = result.records[0];
      var championName = champion.fields.nom_de_la_commune;;
      var challenger = result.records[1];
      var challengerName = challenger.fields.nom_de_la_commune;

      var fightWin = champion.fields.population_totale > challenger.fields.population_totale;

      if(fightWin) {
        console.log('YES ! '+championName+' a '+champion.fields.population_totale+' habitants contre '+challenger.fields.population_totale+' pour '+challengerName);
      } else {
        console.log('Noooo ! '+championName+' n\'a que '+champion.fields.population_totale+' habitants contre '+challenger.fields.population_totale+' pour '+challengerName);
      }
      // console.log(fight_winner.fields.nom_de_la_commune);
    });

  });

})(Zepto, window, document);
