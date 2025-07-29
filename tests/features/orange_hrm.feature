@orangeHRM
@login
@loginwithsession
Feature: OrangeHRM portal

  @regression
  Scenario:Validate the details on my info page
    Given user login to portal on "My Info" page "pim/viewPersonalDetails/empNumber/7"
    Then Validate profile tabs on page
      | Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships |
    And Validate input field lables
      | Employee Full Name | Employee Id | Other Id | Driver's License Number | License Expiry Date | Nationality | Marital Status | Date of Birth | Gender | a | Blood Type | Test_Field |

  @regression
  Scenario: Validate all employee total time data
    Given user login to portal on "Time" page "time/viewEmployeeTimesheet"
    When user navigates to attendance summary page
    Then Validate all employee total time data
      | Employee Name | Time (Hours) |
      | Jane 1        | 2140.97      |
      | Shubham       | 2310.61      |