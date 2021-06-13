package Step_definitiom;
//This is Abhishek
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class test {
	@Given("^I want to write a step with precondition$")
	public void i_want_to_write_a_step_with_precondition() throws Throwable {
	  System.out.println("This is for Regression");
	}
	

	@Given("^some other precondition$")
	public void some_other_precondition() throws Throwable {
		 System.out.println("This is for Regression");
	}

	@When("^I complete action$")
	public void i_complete_action() throws Throwable {
		 System.out.println("This is for Regression");
	}

	@When("^some other action$")
	public void some_other_action() throws Throwable {
		 System.out.println("This is for Regression");
	}

	@When("^yet another action$")
	public void yet_another_action() throws Throwable {
		 System.out.println("This is for Regression");

	}

	@Then("^I validate the outcomes$")
	public void i_validate_the_outcomes() throws Throwable {
		 System.out.println("This is for Regression");
	}

	@Then("^check more outcomes$")
	public void check_more_outcomes() throws Throwable {
		 System.out.println("This is for Regression");
	}
	@Given("^I want to write a step with$")
	public void i_want_to_write_a_step_with() throws Throwable {
		System.out.println("This is for Smoke");
	}

	@When("^I check for thein step$")
	public void i_check_for_thein_step() throws Throwable {
		System.out.println("This is for Smoke");
	}

	@Then("^I verify the in step$")
	public void i_verify_the_in_step() throws Throwable {
		System.out.println("This is for Smoke");
	    	}


}
