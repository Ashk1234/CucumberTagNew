package RunnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(features={"featuretest"}, glue={"Step_definitiom"}, tags={"@Functional"}
       , plugin={"html:target/Destination"}
		)
public class RunnerClass1 {

}
