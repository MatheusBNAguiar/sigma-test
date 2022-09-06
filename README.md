# Sanctions Search

Thank you for taking the time to complete our code challenge!

In the anti-money laundering (AML) space, compliance officers are often tasked with ensuring sanctions violations are not occurring as a part of a business transaction. For instance, a client may transfer money to a third-party, which may or may not be sanctioned. Typically, transaction monitoring systems will flag suspicious activity and a compliance officer will investigate.

Transactions typically include a minimal set of information about the parties involved, so compliance officers have to investigate individuals by name to determine whether the transaction should be blocked.

For this problem, you will build a single-page application for searching and viewing sanction data from a provided API.

The focus should be on utility and usability, not on aesthetics, though some basic attention to look and feel is nice to see because sometimes we have to improvise designs on the job.

Our hypothetical user is a compliance officer who is investigating suspicious transactions by searching for the unknown party's name and exploring the results to determine which seems like the most likely match.

## Test Execution

On this project I used Vite to have a full experience on building and developing, usually I just use Rollup to build libraries but as it is related to a web page I ended up using Vite to have HMR and some helpers. To maintain a good codebase I used eslint and prettier to have some good code consistency, also to enforce this a bit more I've added husky and lint-staged to enforce those rules on pre-commit stage.

On the code best practices I usually find easier to implement on a certain structure of code:
- Components: All the non specific visual stuff with as few as logic on it, usually using storybook to make a handsoff and visual testing easier;
- Core: Every part that involves external data and some business rules I put it on core, usually having api requests, mappers for the inside and outside of the application and external typings, this way decoupling the external logic from the app
- Hooks and Utils: Functions and hooks to help on development, on this case I used a function to format a Date to a specific format, not needing to pass the same parameters to everything, and also a debounce hook for the input form;
- Pages: It would be the last level of abstraction before bundling everything on App.tsx, it can have specific components to the view, specific hooks to abstract functionalities and the final view to group them all;

Regarding some of the tools added and the reason for them all:

- emotion: For CSS I usually use emotion, some teams use styled-components, as it delivers a good typing experience and also it feels natural with SCSS included. I usually do not CSS modules due to some lack of typing and sometimes it being confusing with its inherited Ids on bundling. One critique of @emotion that can be done is the run time instead of build time way of working, making it a bit hard on big projects for the first pain;
- Jest and Cypress: Common tools for developing component and e2e testing, to me Cypress was new so I've added a simple example of what I imagined to a test;
- react-query: Pretty straightforward tool for query management, as it already returns all the steps of a query process, it was a way of developing faster with the states needed but it could be done just with useReducer easily;
- React states: On this project I did not use any state managers libraries as the project was not complex on state management per say, usually I use something like [jotai](!https://jotai.org/) and [zustand](https://github.com/pmndrs/zustand)

### Setup App
Run `make prepare` to setup the environment

### Executing tests
To test components you should just run `make test-component`, but for the e2e process you need to run:
```sh
# Open terminal for running localhost
make run
# Open another terminal and run tests
make test
```

## Important

A couple notes to hopefully help make this a low-stress experience:

First, please do not hesitate to ask us any questions you may have. You will not be penalized for asking questions; your questions help us improve the clarity of the instructions so it benefits you and future candidates.

Second, do not be shy about using your preferred language, libraries, databases, or frameworks. We do not expect you to learn our stack for this challenge; your time is better spent using the tools you know that are suitable for the problem at hand.

Third, if you need to learn anything while working on the challenge, that's okay! We know you have many skills and experiences, so it's not a strike against you if you need to do some reading.

Finally, we value your time so we don't expect you to spend more time than necessary on polish. Just focus on the fundamentals! Feel free to include a README.md in your solution covering polish you would make if you have ideas for improvements.

----

# Requirements

1. **must** run in `docker` on `make run`
   - See the commented-out `app` service in [docker-compose.yml](./docker-compose.yml) as a starting point
   - Please build any dependencies into your Docker image
2. **must** include a search view at `/sanctions` with search input
   - results must display the primary name, sanctioned status, and matching alias
   - results must be unique by sanction id
   - results must be paginated into sets of 10 results
   - search must match against aliases
   - no sorting of results is required
   - _see [below](#api) for help_
3. **must** include a sanction detail view at `/sanctions/:id`
   - details may be retrieved with `GET http://api/sanctions/:id?_embed=aliases`
   - all aliases must be displayed
     - each alias must link to a search for that alias
4. **must** include load and error states for the views
   - the API has random response latencies and fails randomly
5. **must** use responsive designs
   - remember, aesthetics are secondary to functionality
   - target modern browsers; no IE support required
5. **must** include at least one test

----

# API

The API is implemented with [json-server](https://github.com/typicode/json-server), so the functionality is a bit limited, though serves our needs. As a note, this means some of the API interactions are a bit clunky or arbitrary to force you to demonstrate the ability to compose API calls.

## Resources

* `/sanctions`
  - maps to a single person or legal entity
  - may be in effect or previously issued and ceased

* `/aliases`
  - maps many-to-one against sanctions (i.e. each alias belongs to one sanction; a sanction may have multiple aliases)
  - used for search

## Search

Use the `q` query parameter to perform a full-text search on `/aliases`; note that full-text search does not operate on [relationships](#relationships), so search will require multiple requests.

## Pagination 

Use the `_page` query parameter on `/sanctions` and `/aliases`.

## Relationships

Use `/sanctions?_embed=aliases` to include the associated `alias` entries within each `sanction`. 
Similarly, `/aliases?_expand=sanction` would include the associted `sanction` within each `alias`.

----

# Bonus Points

Feel free to demonstrate your strengths in areas such as the following as you see fit! None of these are required to pass the challenge, but they can help differentiate yourself from other candidates and increase our confidence in you.

These are just examples, so don't feel limited to this list.

## End-to-End tests

We care deeply about tests. Browser automation is a powerful tool for testing, but it has some serious trade-offs. If you're comfortable balancing those trade-offs and can throw together an e2e test, we'd be happy to see it!

## State Management

We use Redux quite heavily, so you might guess we're pretty interested in talking about state management regardless of the chosen library or pattern. If you have preferred approaches, show us how you like to manage state.

## Styling

Show us your preferred approach to styling, whether it's using a stylesheet language or framework or just how you like to approach plain old CSS.

## Build Tools

If you're experienced with any javascript build tools, you could show off by providing a clean, maintainable build with useful toolchains.

