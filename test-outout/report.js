$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/apple/eclipse-workspace/EpamCodingAssigmentBDDFramework/src/main/java/Features/FlightBooking.feature");
formatter.feature({
  "line": 1,
  "name": "Flight booking Feature",
  "description": "",
  "id": "flight-booking-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 6,
  "name": "Flight booking Test Scenario",
  "description": "",
  "id": "flight-booking-feature;flight-booking-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user goto the flight booking website\"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of home page is \"Flight Tickets, Flights Booking at Lowest Airfare, Book Air Tickets-Goibibo\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters flight \"\u003csource\u003e\" and \"\u003cdestination\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select booking date and click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user search the best fare and fastest flight",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "print the booking details on console",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "flight-booking-feature;flight-booking-test-scenario;",
  "rows": [
    {
      "cells": [
        "source",
        "destination",
        "browser"
      ],
      "line": 16,
      "id": "flight-booking-feature;flight-booking-test-scenario;;1"
    },
    {
      "cells": [
        "New York",
        "New Delhi",
        "chrome"
      ],
      "line": 17,
      "id": "flight-booking-feature;flight-booking-test-scenario;;2"
    },
    {
      "cells": [
        "New York",
        "Tokoy",
        "chrome"
      ],
      "line": 18,
      "id": "flight-booking-feature;flight-booking-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Flight booking Test Scenario",
  "description": "",
  "id": "flight-booking-feature;flight-booking-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user goto the flight booking website\"chrome\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of home page is \"Flight Tickets, Flights Booking at Lowest Airfare, Book Air Tickets-Goibibo\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters flight \"New York\" and \"New Delhi\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select booking date and click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user search the best fare and fastest flight",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "print the booking details on console",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 37
    }
  ],
  "location": "FlightBooking_StepDefination.user_goto_the_flight_booking_website(String)"
});
formatter.result({
  "duration": 3779255721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flight Tickets, Flights Booking at Lowest Airfare, Book Air Tickets-Goibibo",
      "offset": 23
    }
  ],
  "location": "FlightBooking_StepDefination.title_of_home_page_is(String)"
});
formatter.result({
  "duration": 20931794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 20
    },
    {
      "val": "New Delhi",
      "offset": 35
    }
  ],
  "location": "FlightBooking_StepDefination.user_enters_source_and_destination(String,String)"
});
formatter.result({
  "duration": 3075711292,
  "status": "passed"
});
formatter.match({
  "location": "FlightBooking_StepDefination.select_booking_date_and_click_on_search_button()"
});
formatter.result({
  "duration": 409707409,
  "status": "passed"
});
formatter.match({
  "location": "FlightBooking_StepDefination.user_search_the_best_fare_and_fastest_flight()"
});
formatter.result({
  "duration": 1996234116,
  "status": "passed"
});
formatter.match({
  "location": "FlightBooking_StepDefination.print_the_booking_details_on_console()"
});
formatter.result({
  "duration": 31264,
  "status": "passed"
});
formatter.match({
  "location": "FlightBooking_StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 101431961,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Flight booking Test Scenario",
  "description": "",
  "id": "flight-booking-feature;flight-booking-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user goto the flight booking website\"chrome\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of home page is \"Flight Tickets, Flights Booking at Lowest Airfare, Book Air Tickets-Goibibo\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters flight \"New York\" and \"Tokoy\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select booking date and click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user search the best fare and fastest flight",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "print the booking details on console",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 37
    }
  ],
  "location": "FlightBooking_StepDefination.user_goto_the_flight_booking_website(String)"
});
formatter.result({
  "duration": 2932631047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flight Tickets, Flights Booking at Lowest Airfare, Book Air Tickets-Goibibo",
      "offset": 23
    }
  ],
  "location": "FlightBooking_StepDefination.title_of_home_page_is(String)"
});
formatter.result({
  "duration": 16919414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 20
    },
    {
      "val": "Tokoy",
      "offset": 35
    }
  ],
  "location": "FlightBooking_StepDefination.user_enters_source_and_destination(String,String)"
});
formatter.result({
  "duration": 2697184549,
  "status": "passed"
});
formatter.match({
  "location": "FlightBooking_StepDefination.select_booking_date_and_click_on_search_button()"
});
formatter.result({
  "duration": 396001641,
  "status": "passed"
});
formatter.match({
  "location": "FlightBooking_StepDefination.user_search_the_best_fare_and_fastest_flight()"
});
formatter.result({
  "duration": 4300351755,
  "status": "passed"
});
formatter.match({
  "location": "FlightBooking_StepDefination.print_the_booking_details_on_console()"
});
formatter.result({
  "duration": 20658,
  "status": "passed"
});
formatter.match({
  "location": "FlightBooking_StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 106879087,
  "status": "passed"
});
});