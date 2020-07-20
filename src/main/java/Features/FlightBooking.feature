Feature: Flight booking Feature

/**
 * @author Lav Gupta
 * @deprecated To get the flight fare with fastest and best in price.
 * 
**/

@chrome
Scenario Outline: Flight booking Test Scenario
Given user goto the flight booking website"<browser>"
When title of home page is "Flight Tickets, Flights Booking at Lowest Airfare, Book Air Tickets-Goibibo"
Then user enters flight "<source>" and "<destination>"
And select booking date and click on search button
Then user search the best fare and fastest flight
Then print the booking details on console
Then Close the browser

Examples:
	| source | destination | browser|
	| New York  | New Delhi | chrome|
	| New York  | Tokoy | chrome |
	
	
@safari
Scenario Outline: Flight booking Test Scenario
Given user goto the flight booking website"<browser>"
When title of home page is "Flight Tickets, Flights Booking at Lowest Airfare, Book Air Tickets-Goibibo"
Then user enters flight "<source>" and "<destination>"
And select booking date and click on search button
Then user search the best fare and fastest flight
Then print the booking details on console
Then Close the browser

Examples:
	| source | destination | browser|
	| New York  | New Delhi | safari|
	| New York  | Tokoy | safari|