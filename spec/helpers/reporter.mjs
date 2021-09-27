import JasmineSpecReporter from 'jasmine-spec-reporter';

let reporter = new JasmineSpecReporter.SpecReporter({
    suite: {
        displayNumber: true
    },
    summary: {
        displayDuration: true,
        displayFailed: true, 
        displaySuccessful: true,
        displayPending: true,
        displayErrorMessages: true
    }
})

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(reporter);
