Feature: Verify Login

    @chrome-test
    Scenario Outline: Verify sample scenario
        Given User open browser
        When user enter text
        And User has missing step
            | field |
            | div   |
            | a     |
        Then Application display messasge

        Examples:
            | browserName |
            | Chrome      |

    @chrome
    Scenario Outline: Verify sample scenario one
        Given User open browser
        When user enter text
        Then Application display messasge

        Examples:
            | browserName |
            | Chrome      |
