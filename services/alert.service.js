export const alertService = {
    success,
    error,
    info,
    warn,
};

export const AlertType = {
    Success: 'Success',
    Error: 'Error',
    Info: 'Info',
    Warning: 'Warning'
};

// convenience methods
function success(message, options) {
    showAlert({ ...options, type: AlertType.Success, message });
}

function error(message, options) {
    showAlert({ ...options, type: AlertType.Error, message });
}

function info(message, options) {
    showAlert({ ...options, type: AlertType.Info, message });
}

function warn(message, options) {
    showAlert({ ...options, type: AlertType.Warning, message });
}

// core alert method
function showAlert(alert) {
    alert(alert.type + ': ' + alert.message);
}
