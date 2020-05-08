let annotationParser = require('./schemaJison/schema-parser');
function parse(shortText) {
    return annotationParser.parse(shortText);
}
module.exports = parse;
