Feature: Verify Login

    @smoke
    Scenario Outline: Verify sample scenario smoke
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

    @regression
    Scenario Outline: Verify sample scenario regression
        Given User open browser
        When user enter text
        Then Application display messasge

        Examples:
            | browserName |
            | Chrome      |
