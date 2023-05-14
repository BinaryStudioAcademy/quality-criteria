# JavaScript 🟨

## Base

### Objective

- <details>
    <summary>
      <b>B1.</b> The code corresponds to the Technical Task.
    </summary>
    <p>

  All the mandatory tasks of the TT have been fulfilled.

    </p>
  </details>

- <details>
    <summary>
      <b>B2.</b> No unhandled errors occur when executing code.
    </summary>
    <p>

  Data loading and working with the app, no errors occur, the app doesn’t break.

    </p>
  </details>

- **B3**. The code is cross-browser and does not cause errors in different browsers and different operating systems.

### Naming

- <details>
    <summary>
      <b>B4.</b> Names of variables, parameters, properties and methods begin with a lowercase letter and are written in <code>lowerCamelCase</code> notation.
    </summary>
    <p>

  `Enums`, <code>Classes</code> and <code>Types</code> are exceptions.

    </p>
  </details>

- <details>
    <summary>
      <b>B5.</b> English nouns are used as variable and property names.
    </summary>
    <p>

  Abbreviations in words are prohibited. Abbreviated variable names can be used only if the name is common (<code>err</code>, <code>xhr</code>, <code>evt</code>, <code>src</code>, <code>i</code> and etc).

    </p>
  </details>

- <details>
    <summary>
      <b>B6.</b> Arrays are named plural nouns.
    </summary>
    <p>

  Bad:

  ```javascript
  const age = [10, 15, 22];
  const name = ['John', 'Pit', 'Brew'];

  const cat = {
    name: 'Pit',
    friend: ['Nike', 'Sof', 'Kat'],
  };
  ```

  Good:

  ```javascript
  const ages = [10, 15, 22];
  const names = ['John', 'Pit', 'Brew'];

  const cat = {
    name: 'Pit',
    friends: ['Nike', 'Sof', 'Kat'],
  };
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B7.</b> Boolean variables start with a prefix that can be answered with "yes".
    </summary>
    <p>

  Bad:

  ```javascript
  const login = true;

  const isNotRemoved = Boolean(!payload);
  if (isNotRemoved) {
  }

  const cat = {
    name: 'Pit',
    friend: false,
  };
  ```

  Good:

  ```javascript
  const isLogin = true;

  const isRemoved = Boolean(payload);
  if (!isRemoved) {
  }

  const cat = {
    name: 'Pit',
    hasFriends: false,
  };
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B8.</b> Function or method begins with a verb.
    </summary>
    <p>

  Exceptions:

  1. Functions constructors.
  2. Handler functions or callbacks.

  Bad:

  ```javascript
  const action = (names) => {
    console.log(names);
  };

  const cat = {
    name: 'Pit',
    action() {
      console.log('Meow');
    },
  };

  const randomNumber = () => Math.random();
  ```

  Good:

  ```javascript
  const printNames = (names) => {
    console.log(names);
  };

  const cat = {
    name: 'Pit',
    say() {
      console.log('Meow');
    },
  };

  const getRandomNumber = () => Math.random();
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B9.</b> Constant names are written in capital letters.
    </summary>
    <p>

  Words are separated by underscores (`UPPER_SNAKE_CASE`), for example:

  ```javascript
  const MAX_HEIGHT = 6996;
  const IDX_NOT_FOUND = -1;
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B10.</b> Variable names do not use the data type.
    </summary>
    <p>

  Bad:

  ```javascript
  const filtersArray = ['all', 'past', 'feature'];

  const catObject = {
    name: 'Pit',
    age: 7,
  };
  ```

  Good:

  ```javascript
  const filters = ['all', 'past', 'feature'];

  const cat = {
    name: 'Pit',
    age: 7,
  };
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B11.</b> Classes are named with English nouns. The class name starts with a capital letter.
    </summary>
    <p>

  Bad:

  ```typescript
  class wizard {}
  ```

  Good:

  ```typescript
  // class
  class Wizard {}
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B12.</b> Enums are named by English nouns and begin with an uppercase (capital) letter. Keys are declared in constant format (with uppercase letters)
    </summary>
    <p>

  Bad:

  ```typescript
  const statusCodes = {
    ok: 200,
    notFound: 404,
    badRequest: 400,
  };

  enum STATUS_CODE {
    Ok = 200,
    NotFound = 404,
    BadRequest = 400,
  }
  ```

  Good:

  ```typescript
  const StatusCode = {
    OK: 200,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
  };

  enum StatusCode {
    OK = 200,
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B13.</b> File/folder names are written in lowercase letters. Words are separated by hyphens.
    </summary>
    <p>

  In order to avoid name conflicts in different operating systems, it is better to use the least conflicting way of naming files — lowercase letters separated by a hyphen.

  Bad

  ```typescript
  // src/components/common/Button/Button.tsx
  // src/services/UserService/UserService.ts
  ```

  Good

  ```typescript
  // src/components/common/button/button.tsx
  // src/services/user-service/user-service.ts
  ```

    </p>
  </details>

### Formatting and Code Styling

- <details>
    <summary>
      <b>B14.</b> Curly braces are required everywhere.
    </summary>
    <p>

  In any constructions that imply the use of a code block (curly braces), such as `for`, `while`, `if`, `switch`, `function`, the code block is necessarily used, even if the statement consists of one line.

  Bad

  ```typescript
  if (x % 2 === 1) isEven = false;

  switch (actionType) {
    case ActionType.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
  }
  ```

  Good

  ```typescript
  if (x % 2 === 1) {
    isEven = false;
  }

  switch (actionType) {
    case ActionType.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.END_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
  }
  ```

  The exceptions are single-line arrow functions, which can be used without the required blocks of code:

  ```typescript
  const checkedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B15.</b> The code matches the style of the project.
    </summary>
    <p>

  There are no errors when checking the project with `ESLint`, `Stylelint` and `EditorConfigChecker`.

  Rules aren’t overridden anywhere in the source code.

    </p>
  </details>

- <details>
    <summary>
      <b>B16.</b> All source files follow the recommended structure.
    </summary>
    <p>

  ```typescript
  // 1. Imports
  import { getUniqueItems } from 'helpers';

  // 2. Data structures/types
  const COLORS = ['red', 'green', 'blue'];

  // 3. Declaring variables whose value is known before the program starts
  const colorPicker = document.querySelector('.color-picker');

  // 4. Functions
  const getUniqueColors = (userColors, defaultColors) => {
    return getUniqueItems(userColors, defaultColors);
  };

  // 5. Program code
  const rightColors = getColorsIntersection(colorPicker.value, DEFAULT_COLORS);

  // 6. Exports
  export { rightColors };
  ```

  Some blocks may be missing, but the rest should still adhere to the order.

    </p>
  </details>

- <details>
    <summary>
      <b>B17.</b> Sets of constants of the same type are collected into Enums.
    </summary>
    <p>

  Bad:

  ```typescript
  const LOAD_USERS_START = 'LOAD_USERS_START';
  const LOAD_USERS_END = 'LOAD_USERS_END';
  const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';
  ```

  Good:

  ```typescript
    const UsersActionType = {
      LOAD_USERS_START: 'LOAD_USERS_START',
      LOAD_USERS_END: 'LOAD_USERS_END',
      LOAD_USERS_ERROR: 'LOAD_USERS_ERROR'
    }

    // or

    enum UsersActionType = {
      LOAD_USERS_START = 'LOAD_USERS_START',
      LOAD_USERS_END = 'LOAD_USERS_END',
      LOAD_USERS_ERROR = 'LOAD_USERS_ERROR'
    }
  ```

    </p>
    <p>
    Note: constants that are used in the same context, but has different purposes should be split into different enums or separate constants

  Bad:

  ```typescript
  const CompensationComputation = {
    HOLIDAY_COMPENSATION: 1.7,
    OVERTIME_COMPENSATION: 1.5,
    OVERTIME_THRESHOLD: 1.1, //related not to compensation rate, but to overtime hours calculation
  };
  ```

  Good:

  ```typescript
  const CompensationCoefficient = {
    HOLIDAY_COMPENSATION: 1.7,
    OVERTIME_COMPENSATION: 1.5,
  };

  const OVERTIME_THRESHOLD = 1.1;
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B18.</b> Class properties and methods are marked.
    </summary>
    <p>

  Bad:

  ```typescript
  class Animal {
    constructor({ name }) {
      this.privateName = name;
    }

    getPrivateName() {
      return this.privateName;
    }
  }
  ```

  Good:

  ```typescript
  class Animal {
    constructor({ name }) {
      this._privateName = name;
    }

    getPrivateName() {
      return this._privateName;
    }
  }

  // or

  class Animal {
    constructor({ name }) {
      this.#privateName = name;
    }

    getPrivateName() {
      return this.#privateName;
    }
  }

  // or

  class Animal {
    private privateName;

    constructor({ name }) {
      this.privateName = name;
    }

    private getPrivateName() {
      return this.privateName;
    }
  }
  ```

    </p>
  </details>

### Rubbish

- <details>
    <summary>
      <b>B19.</b> The versions of dependencies used are fixed in <code>package.json</code>.
    </summary>
    <p>

  The dependency lists in the package.json file indicate the exact versions of the packages used. The version must be specified. `^`, `*` and `~` are not allowed.

    </p>
  </details>

- <details>
    <summary>
      <b>B20.</b> There are no files, modules and parts of code that aren't used in the project code, including commented code pats.
    </summary>
    <p>

  There are no script files that are “dead code” that is never executed.

    </p>
  </details>

### Correctness

- <details>
    <summary>
      <b>B21.</b> Constants and enums aren't redefined anywhere in the code.
    </summary>
    <p>

  Constants and enum are read-only and are never redefined.

    </p>
  </details>

- <details>
    <summary>
      <b>B22.</b> Strict mode is on.
    </summary>
    <p>

  Unsafe constructions are prohibited in the code. The code runs in strict mode. The `'use strict'` directive is set at the beginning of js-files; or ES modules are used, which by default run in strict mode.

    </p>
  </details>

- <details>
    <summary>
      <b>B23.</b> Potentially incorrect operations are missing.
    </summary>
    <p>

  For example, incorrect addition of two operands as strings. The problem of concatenation precedence over addition.

  Bad:

  ```typescript
  new Date() + 1000;
  ```

  Good:

  ```typescript
  Number(new Date()) + 1000;
  ```

  Potentially incorrect operation of taking the integer part of a number.

  Bad:

  ```typescript
  const minutesNumber = ~~(seconds / 60);
  ```

  Good:

  ```typescript
  const minutesNumber = Math.trunc(seconds / 60);
  ```

    </p>
  </details>

### Modules

- <details>
    <summary>
      <b>B24.</b> Modules do not export mutable variables.
    </summary>
    <p>
    A module shouldn't export a variable whose value may change in the future.

  Bad:

  ```typescript
  let latestResult;

  export { latestResult };
  ```

  Good:

  ```typescript
  const latestResult = loadLatestResult();

  export { latestResult };
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B25.</b> The name of the module corresponds to its content.
    </summary>
    <p>

  Different logical parts of the code are placed in separate module files. The name of the module must match its content. For example, if the module contains the `GameView` class, then the name of the module should be `game-view.js`.

    </p>
  </details>

- <details>
    <summary>
      <b>B26.</b> No logic in <code>index</code> files.
    </summary>
    <p>

  Files named `index` are used for export only. They should not contain additional code that can be used in other parts of the application.

  Bad:

  ```typescript
  // logger/index.ts
  const rewriteFile = (filePath: string) => {};

  export { rewriteFile };
  ```

  Good:

  ```typescript
  // logger/index.ts
  import { rewriteFile } from './rewrite-file';
  import { somethingElse } from './something-else';

  export { rewriteFile, somethingElse };
  ```

    </p>
  </details>

### Magic

- **B27**. The code doesn’t use “magic values”, each of them has a separate variable named as a constant.

### Security

- <details>
    <summary>
      <b>B28.</b> Event handlers are added and removed in a timely manner.
    </summary>
    <p>

  Event handlers are added only when the element appears on the page and are removed when it disappear.

    </p>
  </details>

- **B29**. The project works correctly in the current NodeJS LTS version.

- **B30**. 🗄 It is forbidden to use the GET method to write data.

- <details>
    <summary>
      <b>B31.</b> 🗄 There are no SQL Injections in the code.
    </summary>
    <p>

  While working with a database, all SQL queries must be protected from SQL injection.

    </p>
  </details>

- <details>
    <summary>
      <b>B32.</b> 🗄 Code protected from XSS.
    </summary>
    <p>

  It isn’t allowed to display unfiltered information received from the user, because XSS attack is possible.

    </p>
  </details>

- <details>
    <summary>
      <b>B33.</b> 🗄 Password is always hashed.
    </summary>
    <p>

  The database shouldn’t store passwords as clear text. The hash of the password is saved instead of passwords. Use cryptographic hashes or secure key derivation functions, such as `Argon2`. Add salt and pepper to passwords manually, if it is not supported by selected library/function.

    </p>
  </details>

## Advance

### Objective

- <details>
    <summary>
      <b>A1.</b> The Technical Task is implemented in full.
    </summary>
    <p>

  All mandatory and optional tasks of the TT have been fulfilled.

    </p>
  </details>

### Naming

- <details>
    <summary>
      <b>A2.</b> Abstract classes or interfaces should have generic names and don't contain implementation details. For concrete classes add implementation details if more than one implementation is possible, but also keep context details.
    </summary>
    <p>

  Bad:

  ```typescript
  //Storage what? LocalStorage, FileStorage, Storage as an entity in your domain?
  class Storage {
    public getItem(location: string) {}
  }

  //Too concrete, requires knowing what S3 is, context derivation is required
  class S3 {
    public getItem(location: string) {}
  }
  ```

  Good:

  ```typescript
  //Clear intent, this is infrastructural code
  interface FileStorage {
    getItem(location: string): Promise<Buffer>
  }

  //We know that this is an S3 implementation of FileStorage just by checking the name
  class S3FileStorage implements FileStorage {
    ...
  }

  //Although this does not implement any interface, other implementations are possible, so we add implementation details
  class EuropeanCentralBankCurrencyConverter {
    public getConversionRate(from: Currency, to: Currency);
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>A3.</b> The names of methods/functions and properties/variables of objects don't contain the names of object/module.
    </summary>
    <p>

  Bad:

  ```typescript
  const popup = {
    openPopup() {
      console.log('I will open popup');
    },
  };

  const wizard = {
    wizardName: 'Gandalf',
  };
  ```

  Good:

  ```typescript
  const popup = {
    open() {
      console.log('I will open popup');
    },
  };

  const wizard = {
    name: 'Gandalf',
  };
  ```

  Bad:

  ```typescript
  // src/validation-schemas/users/login.validation-schema.ts

  const userValidationSchema = {};
  ```

  Good:

  ```typescript
  // src/validation-schemas/users/login.validation-schema.ts

  const user = {};

  // src/components/sign-in/sign-in.tsx
  import { user as userValidationSchema } from 'validation-schemas';
  ```

    </p>
  </details>

### Uniformity

- <details>
    <summary>
      <b>A4.</b> All functions are declared uniformly.
    </summary>
    <p>

  Arrow functions are used when declaring functions. A special method syntax is used to declare object methods.

    </p>
  </details>

- <details>
    <summary>
      <b>A5.</b> A uniform naming style for variables is used.
    </summary>
    <p>

  Variable naming style is used the same in all modules, for example:

  If the variables that store the DOM element contain the word Element or anything else, it must be the same everywhere

  Bad:

  ```typescript
  const popupMainElement = document.querySelector('.popup');
  const sidebarNode = document.querySelector('.sidebar');
  const similarContainer = popupMainElement.querySelector('ul.similar');
  ```

  Good:

  ```typescript
  const popupMainElement = document.querySelector('.popup');
  const sidebarElement = document.querySelector('.sidebar');
  const similarContainerElement = popupMainElement.querySelector('ul.similar');
  ```

  Also good

  ```typescript
  const popupMainNode = document.querySelector('.popup');
  const sidebarNode = document.querySelector('.sidebar');
  const similarContainerNode = popupMainNode.querySelector('ul.similar');
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>A6.</b> When using the API that supports multiple use cases, one method is used.
    </summary>
    <p>

  If there are several different APIs that allow you to solve the same problem, for example, finding an element by id in the DOM tree, then only one of these APIs is used in the project.

  Bad:

  ```typescript
  const popupMainElement = document.querySelector('#popup');
  const sidebarElement = document.getElementById('sidebar');

  const popupClassName = popupMainElement.getAttribute('class');
  const sidebarClassName = sidebarElement.className;
  ```

  Good:

  ```typescript
  const popupMainElement = document.querySelector('#popup');
  const sidebarElement = document.querySelector('#sidebar');

  const popupClassName = popupMainElement.getAttribute('class');
  const sidebarClassName = sidebarElement.getAttribute('class');

  // or

  const popupMainElement = document.getElementById('popup');
  const sidebarElement = document.getElementById('sidebar');

  const popupClassName = popupMainElement.className;
  const sidebarClassName = sidebarElement.className;
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>A7.</b> Methods/properties in classes are ordered.
    </summary>
    <p>

  1. Constructor.
  2. Class property getters and setters.
  3. The main methods of the class:
  4. Overloaded methods of the parent class.
  5. Class methods;
  6. Private methods;
  7. Event handlers.
  8. Static methods.

    </p>
  </details>

- <details>
    <summary>
      <b>A8.</b> ⚛️ Callbacks passed to <code>props</code> are named via <code>on</code>.
    </summary>
    <p>

  ```tsx
  <ListItem onClick="{handleBtnClick}" />
  ```

    </p>
    <p>
  Alternative naming(default function naming) MAY be applied to:
  - Render props
  - Injecting behavior via HOCs
  - Explicit side-effect based calls(fetching data or direct DOM interactions)
  - Injected functions that are not event handlers

  ```tsx
  //HOC and injected behavior
  const withModal = (ModalBody) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClose = React.useCallback(() => setIsOpen(false), [setIsOpen]);
    //some logic;

    //NOTE: closeModal MIGHT be used as a name in this case, but onClose would be ok too
    return isOpen ? <ModalBody closeModal={handleClose} /> : null;
  };
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>A9.</b> ⚛️ Component methods are named via <code>handle</code>
    </summary>
    <p>

  ```jsx
  const Dashboard = () => {
    const handleBtnClick = () => {};

    return <ListItem onClick={handleBtnClick} />;
  };
  ```

    </p>
  </details>

### Correctness

- <details>
    <summary>
      <b>A10.</b> API uses correctly
    </summary>
    <p>

  Valid values are passed as expected by the specification.

  Bad:

  ```typescript
  const isPressed = element.getAttribute('aria-pressed', false);
  ```

  Good:

  ```typescript
  const isPressed = element.getAttribute('aria-pressed');
  ```

  ```typescript
  let greeting = 'Привет';

  wizards.map((wizard) => {
    greeting += `, ${wizard.name}`;
  });

  console.log(`${greeting}!`);
  ```

  Good:

  ```typescript
  const greeting = 'Привет';

  const names = wizards.map((wizard) => {
    return wizard.name;
  });

  console.log(`${greeting} ${names.join(', ')}!`);
  ```

    </p>
  </details>

### A11y

- <details>
    <summary>
      <b>A11.</b> 🫂 All interactive elements have a description.
    </summary>
    <p>

  Bad:

  ```html
  <input placeholder="First Name" />

  <button onClick="{handleEditUserClick}"></button>

  <a href="{AppRoute.DASHBOARD}"></a>

  <button onClick="{handleEditUserClick}"><img src="img/user.svg" /></button>

  <a href="{AppRoute.DASHBOARD}"><img src="img/arrow.svg" /></a>
  ```

  Good:

  ```html
  <label class="visually-hidden" for="first-name">First name</label>
  <input id="first-name" placeholder="First Name" />

  <button onClick="{handleEditUserClick}">
    <span className="visually-hidden">Edit user</span>
  </button>

  <a href="{AppRoute.DASHBOARD}">
    <span className="visually-hidden">Go to dashboard</span>
  </a>

  <label>
    <span class="visually-hidden">First name</span>
    <input placeholder="First Name" />
  </label>

  <button onClick="{handleEditUserClick}">
    <img src="img/user.svg" alt="" />
    <span className="visually-hidden">Edit user</span>
  </button>

  <a href="{AppRoute.DASHBOARD}">
    <img src="img/arrow.svg" alt="" />
    <span className="visually-hidden">Go to dashboard</span>
  </a>

  <input aria-label="First name" placeholder="First Name" />
  ```

    </p>
  </details>

### Modules

- **A12.** If the same code is repeated in several modules, the repeated part is moved to a separate module.

### Redundancy

- <details>
    <summary>
      <b>A13.</b> Where possible, the ternary operator is used in the assignment of a value instead of if.
    </summary>
    <p>

  Bad:

  ```typescript
  let sex;

  if (male) {
    sex = 'Man';
  } else {
    sex = 'Woman';
  }
  ```

  Good:

  ```typescript
  const sex = male ? 'Man' : 'Woman';
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>A14.</b> Conditions are simplified.
    </summary>
    <p>

  If the function returns a boolean value, do not use `if..else` with unnecessary `return`.

  Bad:

  ```typescript
  const checkIsEquals = (firstValue, secondValue) => {
    if (firstValue === secondValue) {
      return true;
    } else {
      return false;
    }
  };
  ```

  Good:

  ```typescript
  const checkIsEquals = (firstValue, secondValue) => {
    return firstValue === secondValue;
  };
  ```

    </p>
  </details>

### Optimality

- <details>
    <summary>
      <b>A15.</b> To iterate over arrays and data structures that can be iterated over, (Iterable) use the <code>for .. of</code>.
    </summary>
    <p>

  Where an array element index isn’t required, or where all elements of an iterable data structure need to be traversed, a `for .. of` loop is used instead of a `for` loop.

  Bad:

  ```typescript
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    renderLevel(level);
  }
  ```

  Good:

  ```typescript
  for (const level of levels) {
    renderLevel(level);
  }
  ```

    </p>
  </details>

### Complexity and Readability.

- **A16** Long functions and methods are split into several smaller ones.

- <details>
    <summary>
      <b>A17.</b> Iterators for arrays are used to work with JS collections.
    </summary>
    <p>

  Iterators are used to transform arrays — `forEach`, `map`, `filter`, and etc.

  ```typescript
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      console.log(element);
    });
  });
  ```

    </p>
  </details>
