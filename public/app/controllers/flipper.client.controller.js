'use strict'

angular.module('app').controller('Flipper', ['$scope', function($scope){
    $scope.portfolioCompanies = [
        {
            companyName: 'Madvalorem',
            description: 'Madvalorem: Connecting People Through Properties.',
            website: 'http://madvalorem.com',
            logo: 'img/logos/companies/madvalorem_175_175.png'
        },
        {
            companyName: 'Groopic',
            description: 'Groopic App: Putting photographer back in the picture.',
            website: 'http://groopic.com',
            logo: 'img/logos/companies/groopic_175_175.png'
        },
        {
            companyName: 'Ingrain',
            description: 'Video augmentation. Revolutionizing the Product Placement industry.',
            website: 'http://ingrain.io',
            logo: 'img/logos/companies/ingrain_175_175.png'
        },
        {
            companyName: 'Round One Fight',
            description: 'Public voting on the best of things.',
            website: 'http://www.roundonefight.com',
            logo: 'img/logos/companies/roundonefight_175_175.png'
        },
        {
            companyName: 'Track My Stack',
            description: 'Health tracking platform for those who care.',
            website: 'http://www.trackmystack.com',
            logo: 'img/logos/companies/trackmystack_175_175.png'
        },
        {
            companyName: 'PsychAbility',
            description: 'Brining some of the worlds best psychometric test.',
            website: 'http://psychability.org',
            logo: 'img/logos/companies/psychability_175_175.png'
        },
        {
            companyName: 'Rezo Systems',
            description: 'Providing web-based reservation systems to different clients.',
            website: 'http://www.rezosystems.com',
            logo: 'img/logos/companies/rezosystems_text_175_175.png'
        },
        {
            companyName: 'World Wide Cargo Services',
            description: 'International cargo company in the UK.',
            website: 'http://worldwidecargoservices.co.uk',
            logo: 'img/logos/companies/wwc_175_175.png'
        },
    ];
}]);