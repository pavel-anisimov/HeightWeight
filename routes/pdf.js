var express = require('express'),
    router  = express.Router();

/* Create a full table. */
router.get('/pdf', function(req, res) {
    res.render('pdf', {
        gender:   'male',
        title:     true ? 'DA FORM 5500' : 'DA FORM 5501',
        fullName: 'Smith, John J',
        rank:     'SPC',
        height:   '72',
        weight:   '201',
        age:      '28',
        bodyfat:  '25',

        measurements: {
            neck: {
                first:   '15.00',
                second:  '15.00',
                third:   '15.50',
                average: '15.00'
            },
            waist: {
                first:   '37.00',
                second:   '37.50',
                third:   '38.00',
                average: '37.50'
            }
        },
        remarks:  true == false ? "\n"
        + '• SPC Smith has passed the height and weight and body fat test.' + "\n\n"
        + '• According to AR 600-9, Table B-2, SPC Smith is authorized up to ' + 24 + '% of body fat.' + "\n\n"
        + '• SPC Smith\'s body fat index is ' + 23 + '% with ' + (24 - 23) + '% below the army standard.' + "\n\n"

            : "\n"
        + '• SPC Smith has NOT passed the height and weight and body fat test.' + "\n\n"
        + '• According to AR 600-9, Table B-2, SPC Smith is authorized up to ' + 24 + '% of body fat.' + "\n\n"
        + '• SPC Smith\'s body fat index is ' + 25 + '% with ' + (25 - 24) + '% above the army standard.' + "\n\n",

        comply:   false,
        grader:   {
            name: 'Green, Leo',
            rank: 'SSG',
            date: '20141128'
        },
        supervisor:    {
            name: 'Brown, Mike',
            rank: 'SGT',
            date: '20141129'
        }

    });
});

/* Generate PDF. */
router.get('/generate', function(req, res) {
    var phantom = require('phantom');

    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open("http://www.google.com", function (status) {
                console.log("opened google? ", status);
                page.evaluate(function () { return document.title; }, function (result) {
                    console.log('Page title is ' + result);
                    ph.exit();
                });
            });
        });
    });
});

module.exports = router;
