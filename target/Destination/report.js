$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tags.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Functional"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "some other precondition",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "some other action",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "yet another action",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({
  "location": "test.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 341943639,
  "status": "passed"
});
formatter.match({
  "location": "test.some_other_precondition()"
});
formatter.result({
  "duration": 257865,
  "status": "passed"
});
formatter.match({
  "location": "test.i_complete_action()"
});
formatter.result({
  "duration": 239048,
  "status": "passed"
});
formatter.match({
  "location": "test.some_other_action()"
});
formatter.result({
  "duration": 225792,
  "status": "passed"
});
formatter.match({
  "location": "test.yet_another_action()"
});
formatter.result({
  "duration": 845864,
  "status": "passed"
});
formatter.match({
  "location": "test.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 276253,
  "status": "passed"
});
formatter.match({
  "location": "test.check_more_outcomes()"
});
formatter.result({
  "duration": 240331,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I want to write a step with",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I check for thein step",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the in step",
  "keyword": "Then "
});
formatter.match({
  "location": "test.i_want_to_write_a_step_with()"
});
formatter.result({
  "duration": 158225,
  "status": "passed"
});
formatter.match({
  "location": "test.i_check_for_thein_step()"
});
formatter.result({
  "duration": 211680,
  "status": "passed"
});
formatter.match({
  "location": "test.i_verify_the_in_step()"
});
formatter.result({
  "duration": 250595,
  "status": "passed"
});
});