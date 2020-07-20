package stepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.util.TestUtil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlightBooking_StepDefination{

	public static long PAGE_LOAD_TIMEOUT = 20;
	public static long IMPLICIT_WAIT = 20;
	WebDriver driver;
	WebDriverWait wait ;

	@Given("^user goto the flight booking website\"([^\"]*)\"$")
	public void user_goto_the_flight_booking_website(String browser)
	{
		if(browser.contains("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","/Users/apple/eclipse-workspace/EpamCodingAssigmentBDDFramework/drivers/chromedriver");
			driver = new ChromeDriver();
		}else {
			driver = new SafariDriver(); 
		}

		driver.manage().window().maximize();
		driver.get("https://www.goibibo.com/flights/");
		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(IMPLICIT_WAIT, TimeUnit.SECONDS);
		wait = new WebDriverWait(driver,50);
	}

	@When("^title of home page is \"([^\"]*)\"$")
	public void title_of_home_page_is(String pagetitle) throws Throwable {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals(pagetitle, title);
	}

	@Then("^user enters flight \"(.*)\" and \"(.*)\"$")
	public void user_enters_source_and_destination(String source, String destination) throws Exception{
		driver.findElement(By.xpath("//input[@id='gosuggest_inputSrc']")).sendKeys(source);
		driver.findElement(By.xpath("//ul[@id='react-autosuggest-1']//span")).click();
		TestUtil.explicitWait(2000);
		driver.findElement(By.xpath("//input[@id='gosuggest_inputDest']")).sendKeys(destination);
		driver.findElement(By.xpath("//ul[@id='react-autosuggest-1']//span")).click();
	}

	@Then("^select booking date and click on search button$")
	public void select_booking_date_and_click_on_search_button() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='DayPicker-Day DayPicker-Day--today DayPicker-Day--selected']")));
		driver.findElement(By.xpath("//*[@class='DayPicker-Day DayPicker-Day--today DayPicker-Day--selected']")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@id='gi_search_btn']")));
		driver.findElement(By.xpath("//button[@id='gi_search_btn']")).click();
	}

	@Then("^user search the best fare and fastest flight$")
	public void user_search_the_best_fare_and_fastest_flight() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='clr']")));
		driver.findElement(By.xpath("//span[contains(text(),'PRICE')]")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='clr']")));
		List<WebElement> price,duration,time;
		price=driver.findElements(By.xpath("//*[@class='clr']//*[@class='ico20 fb quicks']"));
		duration=driver.findElements(By.xpath("//*[@class='clr']//*[@data-cy='duration']"));
		time=driver.findElements(By.xpath("//*[@class='clr']//*[@data-cy='depTime']"));
		selectFlightTicket(price, duration, time);
	}

	@Then("^print the booking details on console$")
	public void print_the_booking_details_on_console() throws Throwable {
	}


	@Then("^Close the browser$")
	public void close_the_browser(){
		driver.quit();
	}

	public void selectFlightTicket(List<WebElement> price, List<WebElement> duration, List<WebElement> time) 
	{
		int lowestprice=Integer.parseInt(price.get(0).getText().replaceAll(",","").trim());
		int lowestduration=Integer.parseInt((duration.get(0).getText().replaceAll("[^\\d.]","").trim()));
		int lowesttime=Integer.parseInt(time.get(0).getText().replaceAll(":","").trim());
		int count=0,count1=0,count2=0,desireresult=0;
		for(int i=1;i<price.size();i++)
		{
			if(lowestprice>=Integer.parseInt(price.get(i).getText().replaceAll(",","").trim()))
				count++;
		}
		System.out.println("count value is : "+count);
		if(count>0)
		{
			for(int i=1;i<count;i++)
			{
				if(lowestduration>Integer.parseInt((duration.get(0).getText().replaceAll("[^\\d.]","").trim())))
					count1++;
			}
			if(count1>0)
			{
				for(int i=1;i<count1;i++)
				{
					if(lowesttime<Integer.parseInt(time.get(0).getText().replaceAll(":","").trim()))
						count2++;
				}
			}
		}else {
			desireresult=0;
		}
		if(count2==0)
			desireresult=0;
		else if(count2>0 || count1>0)
			desireresult=count2;
		System.out.println("**********************************************************");
		System.out.println("Finally selected flight details are below");
		System.out.println("**********************************************************");
		System.out.println("Flight Best Price fare is : "+price.get(desireresult).getText());
		System.out.println("Flight duration is : "+duration.get(desireresult).getText());
		System.out.println("Flight departure is : "+time.get(desireresult).getText());


	}













}
