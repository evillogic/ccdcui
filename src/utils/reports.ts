import { GoogleForm } from "./google-form.ts";

const reportFormUrl = '';  //TODO: Add link to red team report submission Google Form

var reportFormFields = new Map<string, string>([
    ['email', 'emailAddress'],
    ['author', 'entry.1779145872'],
    ['attackingIp', 'entry.1376138460'],
    ['compromisedIp', 'entry.1480737824'],
    ['universallyAttempted', 'entry.253267320'],
    ['attackVector', 'entry.1428790791'],
    ['accessLevel', 'entry.1162302551'],
    ['persistenceEstablished', 'entry.897835061'],
    ['piiDataAccessed', 'entry.137057342'],
    ['passwordDataAccessed', 'entry.76818520'],
    ['systemConfigDataAccessed', 'entry.1035455989'],
    ['databaseDataAccessed', 'entry.3518863'],
    ['evidenceText', 'entry.1289117997'],
    ['compromisedTeams', 'entry.1627343842']
]);

function convertReportToFormData(report: Object) {
    var formData = {}
    formData[reportFormFields.get('email')] = 'redteam@wrccdc.org';  // TODO: Change this to reflect a user's actual identity
    for (var field in report.reportData) {
        if (assert typeof report.reportData[field] === "boolean") {
            if (report.reportData[field]) {
                formData[reportFormFields.get(field)] = "Yes";
            } else {
                formData[reportFormFields.get(field)] = "No";
            }
        } else {
            formData[reportFormFields.get(field)] = report.reportData[field];
        }
    }
    return formData;
}

export async function submitReport(report:Object) {
    var form = new GoogleForm(reportFormUrl);
    var formData = convertReportToFormData(report);
    form.setAllFields(formData);
    form.send();
}
