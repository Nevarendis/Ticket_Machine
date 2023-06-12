*** Settings ***
Library    SeleniumLibrary
Library  OperatingSystem
Library    XML
Test Teardown    Close Browser

*** Test Cases ***
The Machine Calculates The Price Without a discount
    Open the browser
    Fill the bus stop
    Price per kilometer
    Discount 0percent
    ${money}=    Get Text    //*[@id="money"]
    Should Be Equal As Strings    ${money}     20 PLN
The Machine Calculates The Price With a 37percent discount
    Open the browser
    Fill the bus stop
    Price per kilometer
    Discount 37percent
    ${money}=    Get Text    //*[@id="money"]
    Should Be Equal As Strings    ${money}     12.6 PLN
The Machine Calculates The Price With a 50percent discount
    Open the browser
    Fill the bus stop
    Price per kilometer
    Discount 50percent
    ${money}=    Get Text    //*[@id="money"]
    Should Be Equal As Strings    ${money}     10 PLN
The Machine Calculates The Price With a 55percent discount
    Open the browser
    Fill the bus stop
    Price per kilometer
    Discount 55percent
    ${money}=    Get Text    //*[@id="money"]
    Should Be Equal As Strings    ${money}     9 PLN
The Machine Calculates The Price With Negative Value for Price Per Kilometer
    Open the browser
    Fill the bus stop
    Price per kilometer2
    Discount 0percent
    ${money}=    Get Text    //*[@id="money"]
    Should Be Equal As Strings    ${money}     20 PLN

*** Keywords ***
Open the browser
    Create Webdriver    Firefox
    Open Browser    http://localhost/Ticket%20Machine/ticket_machine.html

Fill the bus stop
    Input Text    id:BusStop1   Reda
    Input Text    id:Distance1  0
    Click Button    xpath://*[@id="bus_stops"]/button[1]
    Input Text    id:BusStop2   Rumia
    Input Text    id:Distance2  10
    Click Button    xpath://*[@id="bus_stops"]/button[2]

Price per kilometer
    Input Text  xpath://*[@id="price"]/input    2
Price per kilometer2
    Input Text  xpath://*[@id="price"]/input    -2

Discount 0percent 
    Select From List By Value    xpath://*[@id="discount"]  0
    Click Button    xpath://*[@id="ticketButton"]
Discount 37percent
    Select From List By Value    xpath://*[@id="discount"]  37
    Click Button    xpath://*[@id="ticketButton"]
Discount 50percent
    Select From List By Value    xpath://*[@id="discount"]  50
    Click Button    xpath://*[@id="ticketButton"]

Discount 55percent
    Select From List By Value    xpath://*[@id="discount"]  55
    Click Button    xpath://*[@id="ticketButton"]