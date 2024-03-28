// Adapted from https://www.npmjs.com/package/google-form-send

var GoogleForm = function (link) {
    var findViewForm = link.lastIndexOf('viewform');
    if(~findViewForm) {
        link = link.slice(0, findViewForm - 1);
    }
    this.link = link + '/formResponse?ifq';
    this.data = {};
}

GoogleForm.prototype.addField = function (name, data) {
    data = data || ''
    var field = {};
    field[name] = data;
    Object.assign(this.data, field);
}

GoogleForm.prototype.setAllFields = function(data) {
    this.data = data;
}

GoogleForm.prototype.send = async function () {
    var formUrlParams = '';
    for (var name in this.data) {
        if (Array.isArray(this.data[name])) {
            for (var field in this.data[name]) {
                formUrlParams += '&' + name + '=' + encodeURIComponent(this.data[name][field] || '');
            }
        } else {
            formUrlParams += '&' + name + '=' + encodeURIComponent(this.data[name] || '');
        }
    }
    var formSubmissionUrl = this.link + formUrlParams + '&submit=Submit';
    try {
        const response = await fetch(formSubmissionUrl);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = GoogleForm;
