var Metalsmith = require('mtim'),
    markdown   = require('mtim-markdown'),
    templates  = require('mtim-templates'),
    Handlebars = require('handlebars'),
    fs         = require('fs');

    Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
	Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

Metalsmith(__dirname)
    .use(markdown())
    .use(templates('handlebars'))
    .source('./markdown')
    .destination('./mtim.pages.dev')
    .build(function (err) { if(err) console.log(err) }) 
