sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskapp/riskapp/test/integration/FirstJourney',
		'riskapp/riskapp/test/integration/pages/RisksList',
		'riskapp/riskapp/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskapp/riskapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);