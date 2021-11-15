# Lab 8 - Unit and End-to-End Testing

## Answers to Questions

1. In our Recipe project development pipeline, we will want to run our automated tests within a Github action that runs whenever code is pushed. This way, the quality of the code can be established as a part of the approval process, while simultaneously guaranteeing that only compliant code is integrated into our production build.
2. No, checking if functions return the correct outputs is the job of unit testing. End-to-end testing involves simulating user actions on finished builds and confirming that the results are compliant with our specifications.
3. No; it is unreasonable to stuff such a large operation that involves multiple steps into a single unit test. This is what end-to-end testing is for.
4. Yes, this is a good use case for unit testing. We would want to write code to check that our messaging system blocks the message-sending request if the string's length is over 80 characters.