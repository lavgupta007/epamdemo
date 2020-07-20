package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import stepDefinitions.FlightBooking_StepDefination;


/**
 * @author Lav Gupta
 * @deprecated Test Runner for safari browser 
 * 
**/
	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "/Users/apple/eclipse-workspace/EpamCodingAssigmentBDDFramework/src/main/java/Features/FlightBooking.feature", //the path of the feature files
			glue={"stepDefinitions"}, //the path of the step definition files
			format= {"pretty","html:test-outout", "json:json_output/cucumber-1.json", "junit:junit_xml/cucumber-1.xml"}, //to generate different types of reporting
			monochrome = true, //display the console output in a proper readable format
			strict = true, //it will check if any step is not defined in step definition file
			dryRun = false, //to check the mapping is proper between feature file and step def file
			tags = {"@safari"}	
			)
	 
	public class SafariTestRunner {
	 
	}
	

