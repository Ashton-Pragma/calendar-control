window.translations = {
    pragmaMessages:{
        headings:
            {
                title: "Notifications",
                systemErrors: "System Errors",
                validationErrors: "Validation Errors",
                systemWarnings: "System Warnings",
                systemInformation: "System Information",
                errorCode: "ERROR CODE"
            },
        buttons: {
            "moreInfo": "More Info",
            "lessInfo": "Less Info",
        }
    },
    labels: {
        accept: "Accept",
        close: "Close",
        start: "Start",
        cancel: "Cancel",
        filter: "Filter",
        clear: "Clear"
    },
    crudToolbar: {
        deleteMessages: {
            noRecordSelected: "Please select a record to delete.",
            batchDeleteNotSupported: "You can't remove multiple records at once."
        }
    },
    dynamicDelete: {
        confirmMessageSingle : "Are you sure you want to remove the selected record?",
        confirmMessageMultiple : "Are you sure you want to remove the selected records?"
    },
    model: {
        dirtyModelConfirmation: "You have unsaved changes to this record which will be lost. Are you sure you want to continue?"
    },
    matchUpdate: {
        noRecordSelected: "Please select at least one record to batch update.",
        emptyFieldConfirmation: "You have empty fields. Please note empty fields will be cleared. Are you sure you want to continue?",
        notificationSummary: "Processing of ${this.batchSize} ${this.resourceName} updates complete. ${this.successCount} Successful. ${this.failCount} Failures.",
        fieldSelectionError: "You must select at least one field in order to proceed"
    },
    crossReference: {
        titles: {
            lookupType: "Lookup Target Entity",
            lookupSource: "Lookup Source Field",
            lookupTarget: "Lookup Target Field",
            crossReference: "${this.resourceName} Cross References"
        },
        messages: {
            noRecordSelected: "Please select at least one record to cross reference.",
            noCrossReferencesAvailable: "No cross references available for ${this.resourceName}.",
            noScreen: "Unable to redirect. Currently there is no dashboard view for ${this.resourceName} available."
        },
        buttons: {
            continue: "Continue",
            cancel: "Cancel"
        },
        labels: {
            targetEntity: "Target Entity",
            sourceField: "Source Field",
            targetField: "Target Field"
        }
    },
    pragmaDialogs: {
        buttons: {
            ok: "Ok",
            cancel: "Cancel",
            accept: "Accept",
            reject: "Reject",
            yes: "Yes",
            no: "No"
        }
    },
    dialog: {
        titles: {
            warning: "Warning",
            information: "Information",
            error: "Error",
            notification: "Notification"
        }
    },
    pragmaNotificationDetail: {
        buttons: {
            expand: "Expand Notification Detail Panel",
            collapse: "Collapse Notification Detail Panel"
        }
    },
    lookups: {
        defaultTitle: "Lookup",
        messages: {
            noRecords: "No records available for lookup"
        }

    },
    selection: {
        selectAll: "Select all",
        selectGroup: "Select group",
        selectRecord: "Select record",
    }
};
