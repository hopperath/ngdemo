'use strict';
module.exports = function SampleDirective($compile)
{
    return {
        template: "<input type='text' ng-model='sampleData'/> {{sampleData}}<br/>"
    };

};
