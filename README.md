# js-basic-conditions-zero-psy-test

## Need to create psychology test

## Please, open file TEST.md and create prompts with all questions and analise result of this. Don't validate results, parse numbers

# Programming Task

You are given 12 categories, each with specific question numbers. Calculate the score for each category based on responses to these questions.

## Task Steps:
1. For each of the 12 categories, sum the responses for the specified question numbers.
2. If the total score for any category is 30 or more, this indicates an issue in that category.
3. Display all categories with scores of 30 or more.

## Category Details:
- **Category 1:** Questions 1, 13, 25, 37, 49
- **Category 2:** Questions 2, 14, 26, 38, 50
- **Category 3:** Questions 3, 15, 27, 39, 51
- **Category 4:** Questions 4, 16, 28, 40, 52
- **Category 5:** Questions 5, 17, 29, 41, 53
- **Category 6:** Questions 6, 18, 30, 42, 54
- **Category 7:** Questions 7, 19, 31, 43, 55
- **Category 8:** Questions 8, 20, 32, 44, 56
- **Category 9:** Questions 9, 21, 33, 45, 57
- **Category 10:** Questions 10, 22, 34, 46, 58
- **Category 11:** Questions 11, 23, 35, 47, 59
- **Category 12:** Questions 12, 24, 36, 48, 60

## Example Output
If category 1 has a score of 32, and category 5 has a score of 30, the program should output:
```plaintext
Problem detected in categories:
- Category 1: Score 32
- Category 5: Score 30
```

## Criteria:

- Resolve all errors in the file
- Ensure the code is properly formatted using ESLint (our [pipeline](https://github.com/rammfall-code/guidelines/blob/main/DICTIONARY.md#pipeline-a-pipeline-is-a-sequence-of-automated-steps-that-run-code-checks-it-is-triggered-in-github-after-code-is-pushed-the-pipeline-can-have-three-statuses-pending-checks-are-in-progress-failed-checks-did-not-pass-due-to-issues-like-incorrect-code-errors-or-failed-tests-and-passed-all-checks-were-successful) checks for this).
- The code must comply with the project [guidelines](https://github.com/rammfall-code/guidelines/blob/main/JS.md).
- Pass validation without any errors in [validator](https://validator.w3.org/nu/)
- Additionally, follow all [git guidelines](https://github.com/rammfall-code/guidelines/blob/main/GIT.md) to avoid issues.
