# TODOs and Future Considerations

## Task A

Writing the Test Plan.

This could certainly be augmented with a few more test cases. E.g., adding more than one item at a time, empty text(?), removing items and so on. There will always be more tests to consider, despite best efforts even for a simple application like the one shown.

## Task B

Automating the Tests.

Initially, I planned on using Webdriver to do this stage, but due to the slightly ridiculous nature of my setup (Linux running in WSL in Windows), that was proving to be harder to setup than I really wanted to deal with for this test.

I ended up switching to Selenium IDE which I find somewhat fiddly and a bit buggy to use while developing automated tests.

I think the tests I ended up with should work reasonably well and cover the manual test cases for the most part, but they should be audited to ensure that every condition is covered and there aren't any unnecessary events polluting the test cases.

If I had more time I'd do these in Webdriver.

## Task C

Unittests.

These were really rudimentary. I would probably add more around the Form's rendering in various states (showing the Loading div and Error divs) and Jest has some pretty decent utilities for testing and mocking subtrees in the DOM with Enzyme.

## Task D

Write more? :)

If I subtract the hour or so I took for lunch I think I kept this under 4 hours.

It's been a treat!

Thank you,
Rob